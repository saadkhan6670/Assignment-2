'use strict';
var router = require ('express').Router();
var controller = require('./controller');
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

router.get("/",function(req,res){
    res.json("TO create account go to this link /user/create-user \n TO login the account go to this link /user/login-user  ");
});

router.post('/create-user',controller.CreateUser);
router.post('/login-user', controller.LoginUser);
router.get('/loggedin',controller.loggedin(req,res));
router.get('/user-profile', controller.UserProfile);

module.exports = router;
