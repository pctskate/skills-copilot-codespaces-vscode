// Create web server
var express = require('express');
var app = express();

// Create a route for /comments
app.get('/comments', function (req, res) {
    res.send('This is the comments page');
});

// Create a route for /comments/new
app.get('/comments/new', function (req, res) {
    res.send('This is the new comments page');
});

// Create a route for /comments/:id
app.get('/comments/:id', function (req, res) {
    res.send('This is the comments page for id ' + req.params.id);
});

// Create a route for /comments/:id/edit
app.get('/comments/:id/edit', function (req, res) {
    res.send('This is the edit comments page for id ' + req.params.id);
});

// Start the server
app.listen(3000, function () {
    console.log('Listening on port 3000');
});