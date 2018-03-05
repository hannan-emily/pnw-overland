require('dotenv').config();

var flash = require('connect-flash');
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('../config/ppConfig');
var isLoggedIn = require('../middleware/isLoggedIn');
var geocoder = require('geocoder');
// var app = express();
var db = require('../models');
var router = express.Router();

//DISPLAY USER PROFILE
router.get('/', isLoggedIn, function(req, res) {
  res.render('profile/edit');
});

router.get('/edit', isLoggedIn, function(req, res){
	db.user.findById(req.params.id).then(function(user) {
		res.render('profile/edit', {user: user});
	});
});


router.put('/edit', isLoggedIn, function(req, res) {
	db.user.update({
    email: req.body.authEmail,
		name: req.body.authName,
	  password: req.body.authPassword,
	}, {
		fields: ['email', 'name', 'password'],
		where: {id: req.user.id}
	}).then(function(user) {
    db.user.findById(req.user.id).then(function(user) {
        req.login(user, function(error) { //unclear why the login needs to be here?
          if (error) {
            console.log(err);
          }
        });
        res.send('success');
        res.redirect('/');
    });
});
});




module.exports = router;
