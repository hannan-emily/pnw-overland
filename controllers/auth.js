var express = require('express');
var db = require('../models');
var passport = require('../config/ppConfig');
var router = express.Router();

router.get('/signup', function(req, res) {
  res.render('auth/signup');
});

router.post('/signup', function(req,res) {
//two possible situations = create new user OR user exists & trying to create
  db.user.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      name: req.body.name,
      password: req.body.password
    }
  }).spread(function(user, created) { //spread() takes two paramaters. then() takes one parameter
    if (created) { //user was created for the first time
      console.log('user created by hitting this route');
      passport.authenticate('local', {
        successRedirect: '/',
        successFlash: 'account created and logged in. yay!'
      })(req, res); //we're defining & immediatly calling a NEW FUNCTION
    } else {
      //email already exists in the db
      console.log('email already exists');
      req.flash('error', 'email already exists');
      res.redirect('/auth/signup');
    }
  }).catch(function(error) {
      console.log('an error occured: ', error.message);
      req.flash('error', error.message);
      res.redirect('/auth/signup');
  });
});

router.get('/login', function(req, res) {
  res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  successFlash: 'you have logged in',
  failureRedirect: '/auth/login',
  failureFlash: 'invalid username and/or password'
}));

router.get('/logout', function(req, res) {
  req.logout();
  console.log('logged out');
  req.flash('success', 'you have logged out');
  res.redirect('/');
});

module.exports = router;
