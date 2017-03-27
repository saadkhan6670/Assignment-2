"use strict";
var express = require('express');
var app = express();
var cache = require('memory-cache');

var count=0 ;


   exports.CreateUser = function (req, res, next) {

       var User =[ {
           firstName: '',
           lastName: '',
           email: '',
           phone: '',
           password:''
       }];

       for (var user in User){
           cache.put('User',req.body);
         console.log( cache.get('User'));

           }

       count++;
       console.log(count);


       };


       //res.send("First Name:\t"+ User.firstName + "\n Last Name:\t" + User.lastName +"\n Email: \t" + User.email + "\nPhone:\t"+User.phone + "\nPassword\t"+ User.password);


    exports.ShowEnteredUser = function (req,res) {


    };

   exports.LoginUser = function (req, res ) {

   };
