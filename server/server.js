const express = require('express');
const openai = require('openai');

openai.apiKey = 'your-api-key';
const app = express();

app.get('/api', (req, res) => {
  res.json({"users":["user1","user2","user3","user4","user5"]});
});

app.get('/openai', async (req, res) => {
    const prompt = req.query.prompt;
    const response = await openai.Completion.create({
        engine: 'davinci-codex',
        prompt: prompt,
        max_tokens: 100,
    });
    res.json(response);
});

app.listen(5000, () => {console.log('Server is running on port 5000')});