var express = require('express');
var _ = require('lodash');

var app = express();

var jsonData = {count: 12,  message: 'hello'};

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html', function(err) {
        res.status(500).send(err);
    });
});

app.get('/data', function(req, res) {
    res.json(jsonData);
});

app.listen(3000, function() {
    console.log("Listening on port http://localhost:3000");
});