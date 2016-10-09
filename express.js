var express    = require('express');
var Webtask    = require('webtask-tools');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
var BASE_URL = "https://api.kandy.io/";

app.use(bodyParser.json());

// Get Account Access Token
var account = {access_token : null};
var restAcessToken = "/v1.2/accounts/accesstokens?key=AAKa2552b36872e464fa10f79fb5a3153a9&account_api_secret=AAS947d72261ead4ad4adfa6048cdd96a74";
var restSendMessage = "/v1.2/devices/messages{?key, device_id}";

// function sendMessage(key, device_id, text) {
//     var message = {
//       "message": {
//         "content_type": "text",
//         "destination": "972542205056@domain.com",
//         "UUID": "abc2fa752c3c4edf97de8b0a12f622f0",
//         "message": {
//           "mimeType": "text/plain",
//           "text": text
//         }
//       }
//   }
// }

request(BASE_URL + restAcessToken, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
    account.access_token = JSON.parse(body).result.account_access_token;
  } 
});


app.get('/', function (req, res) {
  res.send("Hellooooo " + account.access_token);
  // res.sendStatus(200);
});

app.get('/message/:message', function(req, res) {
  console.log(res);
  // res.send(req.params.message);
  res.sendStatus(200);
});

module.exports = Webtask.fromExpress(app);
