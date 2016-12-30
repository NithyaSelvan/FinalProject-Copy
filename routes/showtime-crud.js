
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
router.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require('mongoose');





var showtimeSchema = mongoose.Schema({
timeID:String,
    time: String
 });
var ShowTime = mongoose.model('ShowTime', showtimeSchema, 'showtime');

//Master
  router.get('/showtime', function (req, res) {
    console.log("REACHED city GET FUNCTION ON SERVER");
    ShowTime.find({}, function (err, docs) {
         res.json(docs);
    });
});


router.get('/showtime/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     ShowTime.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/showtime', function(req, res){
  console.log(req.body);
  var id = req.body.timeID;
  var name = req.body.time;
    var showtime = new ShowTime({
    timeID : id,
    time:name
    });

  showtime.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/showtime/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      ShowTime.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/showtime/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    ShowTime.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
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
