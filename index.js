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
    var FirstName = req.body.firstname;
    var LastName = req.body.lastname;

    cache.put('Username.memo', username);
    console.log(cache.get('Username.memo'));

    res.send(username + ' ' + email + ' ' + FirstName + ' ' + LastName);
});



app.listen(3000, function() {
    console.log('Listening on port 3000...')
});