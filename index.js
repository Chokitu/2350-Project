const OpenAI = require('openai');
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


// This is just creating the connection with the openAi API using our token
const openai = new OpenAI({
  apiKey: "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" 
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

// POST cnnectiong being handles on /chat to handle all the incoming requests for the prompts.
app.post("/chat", async (req, res) => {
    const { prompt } = req.body;
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",  // the model we use
        prompt: prompt,          // the prompt we give
        maxTokens: 512,          // MaxTokens
        temperature: 0,
    });

    res.send(completion.data.choices[0].text);  // Sensd the completion to the HTTP Request
});

//Starts to listen on port 8080

const port = 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
