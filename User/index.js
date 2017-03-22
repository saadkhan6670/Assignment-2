'use strict';
var router = require ('express').Router();
var controller = require('./controller');
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

router.get("/",function(req,res){
    res.json("TO create account go to this link /user/create-user \n TO login the account go to this link /user/login-user  ");
});

router.get("/failed",function(req,res){
    res.json("FAILED ");
});
router.post('/create-user',controller.CreateUser,controller.ShowEnteredUser);
router.post('/login-user', controller.LoginUser,passport.authenticate('local', { successRedirect: '/',
    failureRedirect: '/failed'}));

//router.get('/logged-in',controller.LoggedIn);
router.get('/user-profile', controller.UserProfile);

module.exports = router;
