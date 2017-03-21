'use strict';
var router = require ('express').Router;
var controller = require('./controller');

router.get('/create-user', controller.CreateUser);
/*router.post('/create-user',controller.CreateUser);
router.post('/login-user', controller.LoginUser);
router.get('/user-profile', controller.UserProfile);*/

module.exports = router;
