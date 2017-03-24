"use strict";
var express = require('express');
var app = express();
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
        res.send("username:\t"+ username + "\n Password:\t" + password +"\n Email: \t" + email + "\nFirst Name:\t"+FirstName + "\nLast Name:\t"+ LastName);

    };

   exports.LoginUser = function (req, res ) {

       app.use(session({secret: "some secret"}));
       app.use(cookieParser());
       app.use(passport.initialize());
       app.use(passport.session());



       passport.use( new LocalStrategy({
               LogUser: 'username',
               LogPass: 'password',
               passReqToCallback: true
           },
           function(req, user, password, done) {
               exports.CreateUser.cache.get({ 'LogUser':user,'LogPass': password }, function(err, user) {
                   if (err) throw err;
                   if (!user)
                       return done(null, false, {message:'Unknown User'});

                   return done(null, user);
               });
           }));

           passport.serializeUser(function (user, done) {
               done(null, user);

           });

           passport.deserializeUser(function (user, done) {
               exports.CreateUser.cache.get(user._id, function (err, user) {
                   done(err, user);

               });

           });
       };
