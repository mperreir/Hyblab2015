// Load usefull expressjs and nodejs objects / modules
var express = require('express');
var path = require('path');
var request = require('request');
var swig = require('swig');
var app = express();


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/html');

// serve static content from the html directory
app.use(express.static(path.join(__dirname, 'html')));

// also add the path of hte libs that are stored in our node_modules directory 
app.use('/angular',express.static(path.join(__dirname, 'node_modules/angular')));
app.use('/bootstrap',express.static(path.join(__dirname, 'node_modules/bootstrap')));
app.use('/jquery',express.static(path.join(__dirname, 'node_modules/jquery')));
app.use('/d3',express.static(path.join(__dirname, 'node_modules/d3')));

// if the server is asked for some data, request it from data.nantes.fr and send it back to the browser
app.get('/', function(req,res){
  // request object come from the 'request' module for nodejs. It simplifies requests programming.  See its documentation for more details
/*  request('http://data.nantes.fr/api/getDisponibiliteParkingsPublics/1.0/39W9VSNCSASEOGV/?output=json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })*/
    
    res.render('layout', {test: 'coucou'});
});

app.get('/tableau', function(req, res){
  var params = req.query;
  var datas = require("./data/data.json");
  
  if('nom' in params) {
    for(var city in datas) {
      if(datas[city].nom === params.nom) {
        console.log(datas[city]);
      }
    }
  }
  // Faire une methode en front pour sérialiser les critères cochés (NAF et années) pour relancer une requete Ajax avec tous les critères et re-remplir le tableau
  res.json(datas);
  //res.end();
});

// launch the server
var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('JDEHyblab app listening at http://%s:%s', host, port)
});

