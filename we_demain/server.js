// Load usefull expressjs and nodejs objects / modules
var express = require('express');
var path = require('path');

var app = express();

// serve static content from the html directory
app.use(express.static(path.join(__dirname, 'html')));

// launch the server
/*var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('TestHyblab app listening at http://%s:%s', host, port);
})*/

module.exports = app;
