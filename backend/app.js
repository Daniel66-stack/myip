const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('../frontend'));

let ipRecords = {
  accepted: [],
  declined: []
};

app.post('/access', (req, res) => {
  const { ip, action } = req.body;
  if (action === 'accept') {
    ipRecords.accepted.push(ip);
  } else if (action === 'decline') {
    ipRecords.declined.push(ip);
  }
  res.json({ status: 'success' });
});

app.get('/access/accepted', (req, res) => {
  res.json(ipRecords.accepted);
});

app.get('/access/declined', (req, res) => {
  res.json(ipRecords.declined);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
