// Load usefull expressjs and nodejs objects / modules
var express = require('express');
var path = require('path');
var request = require('request');
var fs = require('fs');
var app = express();


app.use(express.static(path.join(__dirname, 'html')));

app.get('/data', function(req,res){
  
  // read the file (asynchronously, aka the nodejs way)
  fs.readFile('data/classement_national.csv', function (error, data) {
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