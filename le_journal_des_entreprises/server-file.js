// Load usefull expressjs and nodejs objects / modules
var express = require('express');
var path = require('path');
var request = require('request');
var fs = require('fs');
var app = express();

// serve static content from the html directory
app.use(express.static(path.join(__dirname, 'html')));
// also add the path of the libs that are stored in our node_modules directory 
app.use('/angular',express.static(path.join(__dirname, 'node_modules/angular')));
app.use('/bootstrap',express.static(path.join(__dirname, 'node_modules/bootstrap')));
app.use('/jquery',express.static(path.join(__dirname, 'node_modules/jquery')));
app.use('/d3',express.static(path.join(__dirname, 'node_modules/d3')));

// if asked for some data, read our json data file and send it back to the browser.
// of course we could just declare '/data' as a static path that node should serve, 
// but declaring a HTTML GET callback like done below allows to have the
// same url for accessing data with server-api.js and server-file.js.
// in a sens we are building here a very simple RESTful API.
app.get('/data', function(req,res){
  // here we don't need to process any query string...
  // but if we had to do so (ex: /data?file=parking.json)
  // we could get (very simply) 'req.query.file' variable
  // see also 'req.param' array
  
  // read the file (asynchronously, aka the nodejs way)
  fs.readFile('data/parking.json', function (error, data) {
    if (!error) {
      res.send(data);
    } 
    else
      console.log(error);
  });
})

// launch the server
var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('TestHyblab app listening at http://%s:%s', host, port);
})