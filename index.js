require('dotenv').config();
var flash = require('connect-flash');
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('./config/ppConfig');
var isLoggedIn = require('./middleware/isLoggedIn');
var geocoder = require('geocoder');
var app = express();
var db = require('./models');

app.set('view engine', 'ejs');
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));


//session IS a function WITH an object THAT takes the stuff you want to store in this session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false, //save the session even if it was modified = NOPE
  saveUninitialized: true // if the session is new but it hasn't been saved, SAVE it = YEP
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  //before every route, attach the flash messages and current user to res.locals
  //this tells it to use the req.flash() for any alerts
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile');
});

//DISPLAY ALL TRAILS ON ONE PAGE, AFTER THIS REQUEST
app.get('/trails', function(req, res) {
  res.render('trails/index');
});

//DISPLAY ONE SPECIFIC TRAIL
app.get('/trails/:id', function(req, res) {
    db.trail.findById().then(function(trails) {
        res.render('trails/show', { trails: trails });
    }).catch(function(err) {
        res.send({ message: 'error', error: err });
    });
});


app.use('/auth', require('./controllers/auth'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
