const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory user store
let users = [];

// Register endpoint (Signup)
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ error: 'User already exists' });
  }
  users.push({ username, password });
  res.json({ success: true, message: 'Registration successful' });
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

app.listen(5000, () => {
  console.log('Backend server running on http://localhost:5000');
}); 