'use strict';
var express = require('express');
var router = require('./user');
var app = express();


app.use('/user', router);


app.listen(3000, function() {
    console.log('Listening on port 3000...')
});