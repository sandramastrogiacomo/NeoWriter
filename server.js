require('dotenv').config();
const express = require('express');
const path = require('path');
const { OpenAI } = require('openai'); // ← novo jeito!

const app = express();
app.use(express.json());
app.use(express.static('public'));

// nova instância com a nova forma de uso
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/generate', async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 100,
    });

    res.json({ result: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao gerar texto.');
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
