'use strict';
var express = require('express');
var router = require('./user');
var app = express();

var cache = require('memory-cache');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/api/users', function(req, res) {
    var username = req.body.username;
    var email  = req.body.email ;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;

    res.send(username + ' ' + email + ' ' + firstname+lastname);
});



app.listen(3000, function() {
    console.log('Listening on port 3000...')
});