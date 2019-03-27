const express = require('express');
const router = express.Router();
const User = require("../models/Member");
const bcrypt = require('bcryptjs');

/* @desc GET / page. */
router.get('/', (req, res) => {
  res.render('members.ejs', {title : 'Who goes there!?', error: ''});
});

router.post('/', (req,res) => {
  if(req.body.pass !== req.body.confPass){
    res.render("members.ejs", {title: "Who goes there!?", error: 'Passwords do not match!'});
  }
  //check if body is filled in with required fields
  else if(req.body.firstName &&
    req.body.lastName &&
    req.body.email &&
    req.body.user &&
    req.body.pass &&
    req.body.confPass){
      var h;
      bcrypt.hash(req.body.pass, 10, function(err,hash){
        h = hash;
      });
      User.findOne({userName : req.body.user}).exec(function(err,user){
        //if there is a user with the same username
        if(user){
          res.render("members.ejs", {title: 'Who goes there!?', error: 'Username is already taken!'});
        }else{
          var userData = {
            userName: req.body.user,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            year: req.body.year,
            aos: req.body.aos,
          }
          User.create(userData, function(error, user){
            if(error){
              res.render("members.ejs", {title: "Who goes there!?", error: error});
            } else{
              
            }
          });
        }
      });
    } else{
      res.render("members.ejs", {title: "Who goes there!?", error: "Form is Incomplete!"});
    }

  res.render('members.ejs', {title : "Who goes there!? esq."});
});
module.exports = router;
