"use strict";
var express = require('express');
var app = express();
var cache = require('memory-cache');

cache.put('User',[]);
var arr = cache.get('User');

   exports.CreateUser = function (req, res, next) {

       var User = {
           firstName: '',
           lastName: '',
           email: '',
           phone: '',
           password:''
       };

       if (arr.length===0){
           arr.push(req.body);
           console.log("user " +arr.length+" created");
       }

       else{

       var NewEmail = req.body.email;
       var emailValidation;
       var  Validity = false;

       arr.forEach( function (user)
       {
            emailValidation = user.email;

           if (NewEmail === emailValidation){
               console.log({Error:"Cant use same email!"});
               Validity =true;

           }
       });

       if (Validity===false) {
           arr.push(req.body);
           console.log("user " +arr.length+" created");
       }}

       res.send(cache.get('User'));

   };


   exports.LoginUser = function (req, res ) {

       var loginUser = {
           LogEmail:'',
           LogPassword:''
       };

       var Credentials = req.body;
       var emailValidation,passValidation;
       var  Validity = false;

       arr.forEach( function (login)
       {
           emailValidation =  login.email;
           passValidation = login.password;

           if ( Credentials.LogEmail === emailValidation){
               if(Credentials.LogPassword===passValidation)
               console.log("User Login Succes");
               Validity =true;
               res.end("Welcome USER");
           }
       });

       if (Validity===false) {
           console.log("Invalid credentials");
           res.end();
 }
   };

   exports.UserProfile = function (req, res ){

      var EmailCheck = req.params.Email;
       var emailValidation;

       var  Validity = false;

       arr.forEach( function (User)
       {
           emailValidation =  User.email;

           if ( EmailCheck === emailValidation){
                   console.log("Email Matched");
               Validity =true;
               cache.get('User');
               res.end("Welcome USER");
           }
       });

       if (Validity===false) {
           console.log("Invalid credentials");
           res.end();
       }



   };


