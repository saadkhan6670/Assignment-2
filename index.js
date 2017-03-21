'use strict';
var express = require('express');
var router = require('./user');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use("/user",router);



app.listen(3000, function() {
    console.log('Listening on port 3000...')
});