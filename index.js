'use strict';
var express = require('express')
    , app = express();

app.use('/user', require('./user'));

app.listen(3000, function() {
    console.log('Listening on port 3000...')
});