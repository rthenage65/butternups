'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();

// viewed at http://localhost:3000

app.use(express.static(__dirname))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/second', function(req, res) {
    res.sendFile(path.join(__dirname + '/second.html'))
});

app.listen(3000);

module.exports.handler = serverless(app);