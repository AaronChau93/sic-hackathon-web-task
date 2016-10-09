// var express    = require('express');
var Webtask    = require('webtask-tools');
var bodyParser = require('body-parser');
// var app = express();

module.exports = function (cb) {
  cb(null, 'Hello');
}

module.exports = Webtask.fromExpress(app);
