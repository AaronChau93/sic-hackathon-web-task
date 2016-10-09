var express    = require('express');
var Webtask    = require('webtask-tools');
var bodyParser = require('body-parser');
var app = express();

module.exports = function(context, request, response){
  response.writeHead(200, { 'Content-Type': 'text/html '});
  response.end('<h1>Hello Webtask!</h1>');
}

module.exports = Webtask.fromExpress(app);
