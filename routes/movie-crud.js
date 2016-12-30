
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'), //parses information from POST


//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }))


var mongoose = require('mongoose');
// var dbHost = 'mongodb://localhost:27017/test';
// mongoose.connect(dbHost);

var movieSchema = mongoose.Schema({
  Title: String,
  Year:String,
  Language:String,
  Poster:String,
  Genre:String,
  Director:String,
  Actors:String,
   });
var Movie = mongoose.model('Movie', movieSchema, 'movie');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});


router.get('/movie/getData/', function (req, res,next) {
    console.log("REACHED GET omdb FUNCTION ON SERVER");
    Movie.find({}, function (err, docs)
     {
         res.json(docs);
      console.log(docs);

    });
});
router.get('/movie', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Movie.find({}, function (err, docs) {
         res.json(docs);
   console.log(docs);
    });
});

router.get('/movie/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Movie.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/movie', function(req, res){
  console.log(req.body);

  var title = req.body.Title;
  var year=req.body.Year;
  var lang = req.body.Language;
  var poster = req.body.Poster;
  var genre = req.body.Genre;
  var dir=req.body.Director;
  var act=req.body.Actors;
   var movie = new Movie({
    Title:title,
  Year:year,
  Language:lang,
  Poster:poster,
  Genre:genre,
  Director:dir,
  Actors:act,
  });

  movie.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/movie/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Movie.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/movie/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Movie.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})


// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
