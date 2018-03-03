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

//updating the note content that is in this row of the user's favorite model
router.put('/:id/note', isLoggedIn, function(req,res) {
    console.log('we hit the router put route');
    // get the user
    db.favoriteTrail.update({
      note: req.body.note
    }, {
      where: {
        id: req.params.id
      }
    }
).then(function(note) {
      console.log(note);
        req.method('GET');
        res.redirect('/favorite-trails');
    });
});

// router.delete('/:id', isLoggedIn, function(req, res) {
//   db.favoriteTrail..destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(data) {
//     res.send("");
//   })
// });

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
      console.log(data);
    })
  })
});


module.exports = router;
