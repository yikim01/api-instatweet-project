var express = require('express');
var logger = require('morgan');
var app = express();
var path = require('path');

app.use(logger('dev'));
app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
});
