// Load usefull expressjs and nodejs objects / modules
var express = require('express');
var path = require('path');
var request = require('request');
var app = express();

// serve static content from the html directory
app.use(express.static(path.join(__dirname, 'html')));

// serve static content from the data directory
app.use(express.static(path.join(__dirname, 'data')));

// also add the path of the libs that are stored in our modules directories 
app.use('/highcharts',express.static(path.join(__dirname, 'bower_components/highcharts')));
app.use('/bootstrap',express.static(path.join(__dirname, 'bower_components/bootstrap')));
app.use('/fullpage',express.static(path.join(__dirname, 'bower_components/fullpage.js')));
app.use('/jquery',express.static(path.join(__dirname, 'bower_components/jquery')));
app.use('/jquery-ui',express.static(path.join(__dirname, 'bower_components/jquery-ui')));
app.use('/zoomooz',express.static(path.join(__dirname, 'bower_components/zoomooz')));



// launch the server
/*var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Hyblab app listening at http://%s:%s', host, port)
})*/

module.exports = app;