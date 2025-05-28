require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const port = process.env.PORT || 5000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors());
app.use(express.json());

// 👇 Add this
app.get('/', (req, res) => {
  res.send('Server is running. Use POST /chat to interact with the AI.');
});

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: message }],
    });

    const aiResponse = completion.choices[0].message.content;
    res.json({ response: aiResponse });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to get response from OpenAI' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
