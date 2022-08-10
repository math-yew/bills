var express = require('express');
var bodyParser = require('body-parser');
const opn = require('opn');
var sys = require('util')
var exec = require('child_process').exec;
var app = module.exports = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers","*");
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
 });

///////////////////////////////////////////////////////

var serverCtrl = require('./serverCtrl');
app.post('/updateBudget', serverCtrl.updateBudget);

/////////////////////////////////////////////////////

var port = 3002;

app.listen(port, function() {
  console.log('listening on port ', port);
});
