"use strict";
var express = require('express');
var app = express;
var cache = require('memory-cache');
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var cookieParser = require("cookie-parser");
var session = require("express-session");

var username ,password , email  ,FirstName,  LastName;

   exports.CreateUser = function (req, res, next) {
           username = req.body.username;
       password = req.body.password;
            email  = req.body.email ;
            FirstName = req.body.firstname;
            LastName = req.body.lastname;

           cache.put('Username.memo', username);
           console.log(cache.get('Username.memo'));

       cache.put('pass.memo', password);
       console.log(cache.get('pass.memo'));

       cache.put('Email.memo', email);
       console.log(cache.get('Email.memo'));

       cache.put('FN.memo', FirstName);
       console.log(cache.get('FN.memo'));

       cache.put('LN.memo', LastName);
       console.log(cache.get('LN.memo'));
       next();};

    exports.ShowEnteredUser = function (req,res) {
        res.send("username:\t"+ username + "\n Password:\t ******"+"\n Email: \t" + email + "\nFirst Name:\t"+FirstName + "\nLast Name:\t"+ LastName);

    };

   exports.LoginUser = function (req, res ) {

       app.use(session({ secret: "some secret"}));
       app.use(cookieParser());
       app.use (passport.initialize());
       app.use(passport.session());

       passport.use(new LocalStrategy(function (username, password, done ) {
           exports.CreateUser.findOne({username:username,password:password}, function (err,user){

               //if there was no user
               if(err){return done(err);}
               if(!user){return done(null,false);}

               //if the user found then we will notify the user
               return done (null,user);
           });

           passport.serializeUser(function (user,done) {
               done(null,user);

           });

           passport.deserializeUser(function (user,done) {
               exports.CreateUser.findById(user._id, function (err,user) {
                   done(err, user);
                   
               });

           });
       }));

       passport.authenticate('local', { successRedirect: '/',
           failureRedirect: '/login',
           failureFlash: true });

      /* passport.authenticate("local"),function (req, res) {
           var user = req.body;
           exports.CreateUser.findOne({username:user.username, password:user.password},function (req,res){

               res.json(foundUser);
           });

       };*/

      exports.loggedin = function (req,res) {
          res.send(req.isAuthenticated() ? req.user:'0');
      };

   };
   exports.UserProfile = function (req, res) {

    };