(() => {
    const config = require(`${__dirname}/config/config`)
    const Utils = require(`${__dirname}/utils`)
    const fs = require('fs')
    const express = require('express')
    const app = express()
    const logs = []
    let countries = undefined

    const getJsonData = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }


    /**
     * Middleware declarations
     */
    app.use(express.json());
    app.use((request, response, next) => {
        config.logFile(request, logs)
        next()
    })


    app.use(express.static(`${__dirname}/../client`))

    app.get('/', (request, response) => {
        response.send(`${config.ROOT}/index.html`)
    })

    app.get('/countries', async (request, response) => {
        if (!countries)
            countries = await Utils.readJson(`${__dirname}/../data/countries.json`)
        response.status(200).json(countries)
    })
    app.get('/universities/:country', async (request, response) => {
        let country = request.params.country
        let filename = `${__dirname}/../data/${country}.json`
        let data
        if (fs.existsSync(filename)) {
            data = await Utils.readJson(filename)
            response.status(200).json(data)
        } else {
            data = await getJsonData(`${config.API_URL}${country}`)
            await Utils.saveJson(filename, JSON.stringify(data))
            response.status(200).json(data)
        }
    });




    // Start Node.js HTTP webserver
    app.listen(config.PORT, "localhost", () => {
        console.log(`\t|Server listening on ${config.PORT}`)
    })
})()