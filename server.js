const express = require('express');

const app = express();

const port = parseInt(process.env.PORT, 10) || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});
