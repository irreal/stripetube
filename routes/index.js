var express = require('express');
var router = express.Router();
var opn = require('opn');

var index = 0;
var youtubeUrls = [
  "https://youtu.be/5-xhpcgBMe4?t=84",
  "https://youtu.be/5-xhpcgBMe4?t=14",
  "https://youtu.be/5-xhpcgBMe4?t=184",
]

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log('body', req.body);
  var indexToOpen = index++;
  index = index % youtubeUrls.length;
  opn(youtubeUrls[indexToOpen]);
  res.status(200);
  res.send();
});

module.exports = router;
