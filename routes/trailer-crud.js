var express = require('express');
var router = express.Router();
 var bodyParser = require('body-parser'); //parses information from POST


//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }))









module.exports = router;
