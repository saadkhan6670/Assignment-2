'use strict';
const router = require ('express').Router;
var controller = require('./controller');

router.post('/create-user',controller.CreateUser);
router.post('/login-user', controller.LoginUser());
router.get('/user-profile', controller.UserProfile());

module.exports= router;
