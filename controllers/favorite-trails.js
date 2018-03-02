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


router.get('/', isLoggedIn, function(req,res) {
  db.favoriteTrail.findAll({
    where: {
      userId: req.user.id
    }
  }).then(function(favorites) {
  // res.send(data);
  res.render('favorite-trails/show', {favoritesObject: favorites});
  });
});

router.put('/:id/note', isLoggedIn, function(req,res) {
    console.log(req.body);
    db.favoriteTrail.update({
      note: req.body.note
    }, {
    where:  {
        id: req.params.id,
      }
    }).then(function(note) {
        // res.send(favorite);
        res.redirect('/favorite-trails');
    });
});

router.get('/:id/:title', isLoggedIn, function(req,res) {
    db.favoriteTrail.findOrCreate({
    where:  {
        userId: req.user.id,
        trailId: req.params.id,
        title: req.params.title
      }
    }).spread(function(favorite) {
        // res.send(favorite);
        res.redirect('/favorite-trails');
    });
});





module.exports = router;
