var express    = require('express');
var Webtask    = require('webtask-tools');
var bodyParser = require('body-parser');
var app = express();

module.exports = function(callback){
  // Prints the message "Hello Webtask" when accessed
  callback(null, "Hello Webtask");
}

module.exports = Webtask.fromExpress(app);
