var express    = require('express');
var Webtask    = require('webtask-tools');
var bodyParser = require('body-parser');
var http = require('request');
var io = require('socket.io');
var socket = io(http);
var app = express();

var BASE_URL = "https://api.kandy.io/";

app.use(bodyParser.json());


socket.on('connection', function(client){
  console.log('someone connected to namespace ');
 
  client.on('disconnect', function(){
    console.log('user disconnected there are now ' + socket.total_users + ' users');
  });
});

module.exports = Webtask.fromExpress(app);
