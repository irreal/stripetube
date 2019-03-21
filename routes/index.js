var express = require('express');
var router = express.Router();
var opn = require('opn');

var index = 0;
var youtubeUrls = [
"https://youtu.be/_JZom_gVfuw?t=18", 
"https://youtu.be/2ksuJcnAqR8?t=20",
"https://youtu.be/_3tCkBKAEr4?t=27",
"https://youtu.be/8NHnD7vappI?t=24",
"https://youtu.be/_lb0HImG_MU?t=16",
"https://youtu.be/PBwAxmrE194?t=86",
"https://youtu.be/Fi4S3WXLgso?t=70",
"https://youtu.be/smqhSl0u_sI?t=79",
"https://youtu.be/bWXazVhlyxQ?t=35",
"https://youtu.be/McJcDToEiyw?t=32",
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
