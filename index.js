var express = require('express');
var logger = require('morgan');
var app = express();
var path = require('path');
var pg = require('pg');

app.use(logger('dev'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static('public'));

app.use('/scripts', express.static(__dirname + '../node_modules/bootstrap/dist/'));



app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
});
