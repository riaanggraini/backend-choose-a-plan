require('dotenv').config()
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send("test");
});

// handle 404
app.use(function(req, res, next) {
    res.status(404).send("route not found");
});

// start the server
app.listen(process.env.PORT, function () {
    console.log(`Example app listening on port ${process.env.PORT}`);
});