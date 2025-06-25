const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

let feedbacks = [];

// Get all feedback
app.get('/feedback', (req, res) => {
  res.json(feedbacks);
});

// Post new feedback
app.post('/feedback', (req, res) => {
  const { feedback } = req.body;
  if (!feedback) {
    return res.status(400).json({ error: 'Feedback is required' });
  }
  const newFeedback = { id: Date.now(), feedback };
  feedbacks.push(newFeedback);
  res.status(201).json(newFeedback);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 