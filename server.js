
var logger = require('morgan');
var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

// user schema/model



var User = require('./models/user.js');

var auth =  require('./routes/auth');
var movieCrud = require('./routes/movie-crud');
var movieinfoCrud = require('./routes/movieinfo-crud');
var cityCrud = require('./routes/city-crud');
var theatreCrud = require('./routes/theatre-crud');
var showtimeCrud = require('./routes/showtime-crud');
var offerCrud = require('./routes/offer-crud');
var bookingCrud = require('./routes/booking-crud');
var trailerCrud = require('./routes/trailer-crud');
var ratingCrud = require('./routes/rating-crud');

//
//var searchCrud=require('./routes/search-crud');

//




// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// configure passport
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());





app.use('/movie', movieCrud);
app.use('/movieinfo',movieinfoCrud);
app.use('/city', cityCrud);
app.use('/theatre', theatreCrud);
app.use('/showtime', showtimeCrud);
app.use('/offer',offerCrud);
app.use('/booking',bookingCrud);
app.use('/trailer',trailerCrud);
app.use('/rating',ratingCrud);
app.use('/user', auth);


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});




// Only load this middleware in dev mode (important).
if (app.get('env') === 'development') {
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');

  var config = require('./webpack.config');

  app.use(webpackMiddleware(webpack(config), {
    publicPath: "/build",

    headers: { "X-Custom-Webpack-Header": "yes" },

    stats: {
      colors: true
    }
  }));

}
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

var server = app.listen(3000, function () {
  console.log('listening on port 8000');
});
