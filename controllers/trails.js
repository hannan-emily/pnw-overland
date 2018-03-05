require('dotenv').config();

var flash = require('connect-flash');
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('../config/ppConfig');
var isLoggedIn = require('../middleware/isLoggedIn');
var geocoder = require('geocoder');

var db = require('../models');
var router = express.Router();

//POST N0TE TO THIS TRAIL
// router.post('/:id', function(req,res) {
// db.trail.findById(req.params.id).then(function(trail) {
//     trail.createNote({
//       content: req.body.content
//     }).then(function(note) {
//       console.log(post.get());
//     });
//   });
// });

//DISPLAY ALL TRAILS
router.get('/', function(req, res) {
    db.trail.findAll().then(function(trails) {
        res.render('trails/index', { trail: trails });
    }).catch(function(err) {
        res.send({ message: 'error', error: err });
    });
});

//DISPLAY ONE SPECIFIC TRAIL & THE ASSOCIATED N0TE CONTENT
router.get('/:id', function(req, res) {
    db.trail.find({
      where: { id: req.params.id },
      include: [db.note]
    }).then(function(trails) {
        res.render('trails/show', { trail: trails });
        include: [db.note]
    }).catch(function(err) {
        res.send({ message: 'error', error: err });
    });
});




module.exports = router;
