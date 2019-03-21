var express = require('express');
var router = express.Router();
var opn = require('opn');

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log('body', req.body);
  opn("https://youtu.be/5-xhpcgBMe4?t=84");
  res.status(200);
  res.send();
});

module.exports = router;
