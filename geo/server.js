// Load usefull expressjs and nodejs objects / modules
var express = require('express');
var path = require('path');
var app = express();

// serve static content from the html directory
app.use(express.static(path.join(__dirname, 'html')));
// also add the path of the libs that are stored in our node_modules directory 
app.use('/highcharts',express.static(path.join(__dirname, 'node_modules/highcharts')));
app.use('/jquery',express.static(path.join(__dirname, 'node_modules/jquery')));
app.use('/jquery-ui',express.static(path.join(__dirname, 'node_modules/jquery-ui')));

// launch the server
/*var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('TestHyblab app listening at http://%s:%s', host, port);
})*/

module.exports = app;