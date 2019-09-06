const express = require('express');
const router = express.Router();
const User = require('../models/Member');
const bcrypt = require('bcryptjs');
var flag = false;

/* @desc GET / page. */
router.get('/', (req, res) => {
  res.render('register.ejs', { title: 'Who goes there!?', error: '' });
});

/* @desc GET / page. */
router.get('/register', (req, res) => {
  res.render('register.ejs', { title: 'Registration Form', error: '' });
});

router.post('/', (req, res) => {
  if (req.body.pass !== req.body.confPass) {
    res.render('register.ejs', { title: 'Who goes there!?', error: 'Passwords do not match!' });
  }
  //check if body is filled in with required fields
  else if (req.body.firstName &&
    req.body.lastName &&
    req.body.email &&
    req.body.user &&
    req.body.pass &&
    req.body.confPass) {
    User
      .findOne({ userName: req.body.user })
      .exec(function (err, user) {
      //if there is a user with the same username or an error occurs
      if (err || user) {
        res.render('register.ejs', { title: 'Who goes there!?', error: 'Username is already taken!' });
      } else {
        //encrypt the password before placing into list
        bcrypt.hash(req.body.pass, 10, (err, hash) => {
          var userData = {
            userName: req.body.user,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            year: req.body.year,
            aos: req.body.aos,
            admin: false
          }
          User.create(userData, (error, user) => {
            if (error) {
              res.render('register.ejs', { title: 'Who goes there!?', error: error });
            } else {
              //create session and got to index page
              req.session.user = user._id;
              res.redirect('/');
            }
          });
        });
      }
    });
  } else {
    // TODO: Make it persist if error is encountered
    res.render('register.ejs', { title: 'Who goes there!?', error: 'Incomplete Form!' });
  }
});
module.exports = router;
