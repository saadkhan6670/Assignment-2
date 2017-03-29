"use strict";
var express = require('express');
var app = express();
var cache = require('memory-cache');

var count=0 ;

cache.put('User',[]);

   exports.CreateUser = function (req, res, next) {

       var User = {
           firstName: '',
           lastName: '',
           email: '',
           phone: '',
           password:''
       };

       var arr = cache.get('User');
       var NewEmail = req.body.email;
       var emailValidation;

      // console.log("New User Email "+NewEmail);

       arr.forEach( function (user)
       {
            emailValidation = user.email;
          console.log(JSON.stringify(emailValidation));

       });


       if (NewEmail !== emailValidation){arr.push(req.body);}
       else console.log({message:"Cant use same email!"});
     if (arr.length===0){arr.push(req.body);}
      //arr.push(req.body);


//***********************************

     //  http://procbits.com/2012/01/19/comparing-two-javascript-objects
    //console.log( cache.get('User'));


       res.send("user " +arr.length+" created");

   };


    exports.ShowEnteredUser = function (req,res) {

        res.send("First Name:\t"+ User.firstName + "\n Last Name:\t" + User.lastName +"\n Email: \t" + User.email + "\nPhone:\t"+User.phone + "\nPassword\t"+ User.password);

    };

   exports.LoginUser = function (req, res ) {

   };
