var passport = require('passport');

//this var is actually a class using ThisName case
var LocalStrategy = require('passport-local').Strategy;
var db = require('../models');

//passport "serializes" objects to make them easy to store
//converting the user to an identifier
//cb stands for callback
passport.serializeUser(function(user, cb){
  cb(null, user.id);
});

//passport de-serializes objects by taking the user's serialization id
//and looking it up in the database
passport.deserializeUser(function(id, cb){
  db.user.findById(id).then(function(user) {
    cb(null, user);
  }).catch(cb);
});

// Set up the local auth strategy
//we're creating a new object with 'new LocalStrategy'
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(email, password, cb) {
  db.user.find({
    where: {email: email}
  }).then(function(user) {
    if (!user || !user.validPassword(password)) { //if one of these are null or undefined
      cb(null, false); //this sets up "not passing authenticon"
    } else {
      cb(null, user); //if we successfuly pass authentican, we show the user
    }
  }).catch(cb);
}));

module.exports = passport;
