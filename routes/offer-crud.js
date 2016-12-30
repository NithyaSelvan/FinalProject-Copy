
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
router.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require('mongoose');


// var dbHost = 'mongodb://localhost:27017/test';
// mongoose.connect(dbHost);



var offerSchema = mongoose.Schema({
// offerID:String,
    theatreName:String,
    city:String,
    offerName: String
 });
var Offer = mongoose.model('Offer', offerSchema, 'offer');

//Master
  router.get('/offer', function (req, res) {
    console.log("REACHED offer GET FUNCTION ON SERVER");
    Offer.find({}, function (err, docs) {
         res.json(docs);
    });
});


router.get('/offer/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Offer.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/offer', function(req, res){
  console.log(req.body);
  // var id = req.body.offerID;
  var city = req.body.city;
  var name = req.body.offerName;
  var name1 = req.body.theatreName;
    var offer = new Offer({
    // offerID : id,
city:city,
theatreName:name1,
    offerName:name

    });

  offer.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/offer/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Offer.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/offer/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Offer.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
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
