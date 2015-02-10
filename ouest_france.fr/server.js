// Load usefull expressjs and nodejs objects / modules
var express = require('express');
var path = require('path');
var request = require('request');
var app = express();


app.use(express.static(path.join(__dirname, 'client')));
app.use('/angular',express.static(path.join(__dirname, 'node_modules/angular')));
app.use('/bootstrap',express.static(path.join(__dirname, 'node_modules/bootstrap')));
app.use('/jquery',express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/jquery-ui',express.static(path.join(__dirname, 'node_modules/jquery-ui')));
app.use('/d3',express.static(path.join(__dirname, 'node_modules/d3')));

// Liste des communes pour l'autocomplétion
app.get('/communes', function(req,res){
  
  var t=require('./label_communes.json');
  var communes = [];
  communes=t;
  res.send(communes);
  console.log('ENVOI COMMUNES');
});

// Données pour une commune spécifique
app.get('/data', function(req,res){

  var json=require('./Base_Hyblab_demo_medic_utf8.json');
  var communeRecherchee =  req.query.commune;
  var tabRetour;

  for(var i=0;i<json.length;i++){
    if(json[i].LIBGEO==communeRecherchee){
      console.log(json[i]);
      tabRetour=json[i];
    }
  }
  
 res.send(tabRetour);
});


// launch the server
var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('TestHyblab app listening at http://%s:%s', host, port)
})