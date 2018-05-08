var express = require('express');
var _ = require('lodash');

var app = express();

var todos = [];

// GET
app.get('/todos', function(req, res) {
    res.json(todos);
});

// POST
app.post('/todos', function(req, res) {
    var todo = req.body.todo;

    todos.push(todo);
    res.send(todos);
});

app.get('/todos/:id', function(req, res) {
    var todo = _.find(todos, {id: req.params.id});

    res.json(todo);
});

app.listen(3000);