
var express = require('express');
var router = express.Router();
 var bodyParser = require('body-parser'); //parses information from POST


router.use(bodyParser.urlencoded({ extended: true }))


var mongoose = require('mongoose');
//var dbHost = 'mongodb://localhost:27017/test';
//mongoose.connect(dbHost);

var ratingSchema = mongoose.Schema({
ratingID: String,
  movieName: String,
  comments:String,
  rating: String
  // email:String,
  // blockedSeat:String,
  // payStatus:String
     });

var Rating = mongoose.model('Rating', ratingSchema, 'rating');

router.get('/rating', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Rating.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/rating/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Rating.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});


router.post('/rating', function(req, res){
  console.log(req.body);
  var id = req.body.ratingID;
  var name = req.body.movieName;
  var comments = req.body.comments;
  var rating = req.body.rating;
    var rating = new Rating({
    ratingID : id,
  movieName:name,
  comments:comments,
  rating:rating
    });

  rating.save(function(err, docs){
    if ( err ) throw err;
    console.log("rate Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/rating/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Rating.remove({ratingID:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

// router.put('/rating/:id', function(req, res){
//     console.log("REACHED PUT");
//     console.log(req.body);
//     rating.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
//       res.json(data);
//     });
// })


// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
