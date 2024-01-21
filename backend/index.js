const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
const users = [];

app.get('/user', (req, res) => {
  const { mail, pass } = req.query;
  const user = users.find(u => u.mail === mail && u.pass === pass);

  if (user) {
    res.json({ success: true, user: { web: user.web, name: user.name, mail: user.mail, no: user.no } });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/user', (req, res) => {
  const { web, name, mail, no, pass } = req.body;

  if (!web || !name || !mail || !no || !pass) {
    return res.status(400).json({ success: false, message: 'Incomplete data' });
  }

  if (users.some(u => u.mail === mail)) {
    return res.status(400).json({ success: false, message: 'User already exists' });
  }

  const newUser = { web, name, mail, no, pass };
  users.push(newUser);

  res.status(201).json({ success: true, user: { web, name, mail, no } });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
