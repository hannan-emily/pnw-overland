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

//get route for all favorite trail for the logged in user
router.get('/', isLoggedIn, function(req,res) {
  db.favoriteTrail.findAll({
    where: {
      userId: req.user.id
    }
  }).then(function(favorites) {
  res.render('favorite-trails/show', {favorites: favorites});
  });
});

//updating the note content on one specific favorite trail
//identifying WHICH favorite trail by 'trailId'
router.put('/:trailId/note', isLoggedIn, function(req,res) {
    console.log('we hit the router put route');
    // get the user
    db.favoriteTrail.update({
      note: req.body.note
    }, {
      where: {
        trailId: req.params.trailId
      }
    }
).then(function(note) {
        req.method('GET');
        res.redirect('/favorite-trails');
    });
});




//post route to create new favorite trail & add to user favorite list
//this get route id matches the user id db request
router.get('/:id/:title', isLoggedIn, function(req,res) {
  db.user.find({
    where: {
      id: req.user.id
    }
  }).then(function(user) {
    user.createFavoriteTrail({
      trailId: req.params.id,
      title: req.params.title
    }).then(function(data) {
    })
  })
});

//getting specific id of one favorite trail of this user's list
router.get('/:id', isLoggedIn, function(req,res) {
  db.favoriteTrail.findAll({
    where: {
      id: req.params.id
    }
  }).then(function(data) {
    res.redirect('/favorite-trails');
  });
});


//deleting one specific favorite trail from this user's list
router.delete('/:id', isLoggedIn, function(req, res) {
  db.favoriteTrail.destroy({
    where: {
      id: req.params.id
    }
    }).then(function() {
  })
});

module.exports = router;
