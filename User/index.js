'use strict';
var router = require ('express').Router();
var controller = require('./controller');

router.get("/",function(req,res){
    res.json("TO create account go to this link /user/create-user \n TO login the account go to this link /user/login-user  ");
});

router.post('/create-user',controller.CreateUser, function (req, res) {
    console.log("User Created Success") });

router.post('/login-user',controller.LoginUser );

//router.get('/logged-in',controller.LoggedIn);
//router.get('/user-profile', controller.UserProfile);

module.exports = router;
