const express = require('express');
const path = require('path');
const app = express();
const PORT = 3030;

app.use('/', express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  res.send('hell from server');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
})