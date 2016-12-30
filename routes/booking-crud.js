
var express = require('express');
var router = express.Router();
 var bodyParser = require('body-parser'); //parses information from POST


//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }))


var mongoose = require('mongoose');
//var dbHost = 'mongodb://localhost:27017/test';
//mongoose.connect(dbHost);

var bookingSchema = mongoose.Schema({
bookingID: String,
  movieName: String,
  theatre:String,
    time:String,
  city:String,
  date:String,
  // email:String,
    tickets:String,
    seatselected:String,
  totalPrice:String
  // blockedSeat:String,
  // payStatus:String
     });

var Booking = mongoose.model('Booking', bookingSchema, 'booking');

router.get('/booking', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Booking.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/booking/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Booking.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});


router.post('/booking', function(req, res){
  console.log(req.body);
  var id = req.body.bookingID;
  var name = req.body.movieName;
  var theatre = req.body.theatre;
  var time = req.body.time;
  var city = req.body.city;
  var date = req.body.date;
    var tic = req.body.tickets;
  var pric = req.body.totalPrice;
var seat=req.body.seatselected;
    var booking = new Booking({
    bookingID : id,
  movieName:name,
  theatre:theatre,
  time:time,
  city:city,
date:date,
// seatselected:seat,
seatselected:seat,
// email:email,
tickets:tic,
totalPrice:pric
// blockedSeat:bseat,
// payStatus:pstatus
    });

  booking.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/booking/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Booking.remove({bookingID:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

// router.put('/booking/:id', function(req, res){
//     console.log("REACHED PUT");
//     console.log(req.body);
//     Booking.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
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
