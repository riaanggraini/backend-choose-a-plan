require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./app/routes');

// support parsing of application/json type post data
app.use(bodyParser.json());

// call routes
app.use('/v1/', routes);

// handle 404
app.use((req, res, next) => {
  res.status(404).send("route not found");
});

// handle 500
app.use((error, req, res, next) => {
  return res.status(500).json({ error: error.toString() });
});

// start the server
app.listen(process.env.PORT, function () {
  console.log(`listening on port ${process.env.PORT}`);
});