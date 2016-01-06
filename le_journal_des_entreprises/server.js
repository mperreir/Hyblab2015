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
app.use('/angular', express.static(path.join(__dirname, 'node_modules/angular')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery')));
app.use('/d3', express.static(path.join(__dirname, 'node_modules/d3')));

// if the server is asked for some data, request it from data.nantes.fr and send it back to the browser
app.get('/', function(req, res) {
    // request object come from the 'request' module for nodejs. It simplifies requests programming.  See its documentation for more details
    /*  request('http://data.nantes.fr/api/getDisponibiliteParkingsPublics/1.0/39W9VSNCSASEOGV/?output=json', function (error, response, body) {
      if (!error && response.statusCode == 200) {
          res.send(body);
        }
      })*/

    res.render('layout');
});

/**
 * @author Claire REMY
 * returns the queried town for the selected year and selected naf codes
 * 
 * @param nom name of the city
 * @param annee selected year
 * @param codeNAF string of selected nafcodes
 */
app.get('/tableau', function(req, res) {
    var params = req.query;
    var datas = require("./data/data.json");
    if ('nom' in params && 'annee' in params && 'codeNAF' in params) {
    
        var nafParams = params.codeNAF.replace(/_/g, '.');
        var codesArray = nafParams.split('-');
  
        var selectedNafArray = [];
        var townData = [];
        
        
        //Get objects corresponding to the city queried
        for (var city in datas) {
            if (datas[city].nom === params.nom) {
                townData.push(datas[city]);
            }
        }

        //Get objects with corresponding NAF code
        for(var nafObject in townData){
            for(var code in codesArray) {

                if(townData[nafObject].codeNAF === codesArray[code]){
                    var selectedData = {};
                        selectedData.nom = townData[nafObject].nom;
                        selectedData.codeNAF = townData[nafObject].codeNAF;
                        selectedData.libelleNAF = townData[nafObject].libelleNAF;
                        selectedData.nb = townData[nafObject][params.annee];
                    selectedNafArray.push(selectedData);
                }
            }
        }
    }
    res.json(selectedNafArray);
});

/**
 * @author Benjamin MOUDEN
 * 
 * returns the data for the first dataviz 
 */
app.get('/dataviz1', function(req, res) {
    var paramsD1 = req.query;
    var datasD1 = require("./data/entreprises.json");
    
    if ('annee' in paramsD1) {
    
        var selectedDataD1 = [];
        for (var city in datasD1) {  
            var tmpJson = {};
            tmpJson.nom = datasD1[city].nom;
            tmpJson.nb = datasD1[city][paramsD1.annee];
            selectedDataD1.push(tmpJson);
        }       
    }
    res.json(selectedDataD1);
});

/**
 * @author Benjamin MOUDEN
<<<<<<< HEAD
 * 
 * returns the data for the second dataviz 
 */
app.get('/dataviz2', function(req, res) {
    // first call
    var paramsD2 = req.query;
    var datasD2 = require("./data/salariesnum.json");
    
    if ('annee' in paramsD2) {
    
        var valeurs = [];
        var selectedDataD2= [];
      
        for (var city in datasD2) {  
            var tmpJson = {};
            tmpJson = datasD2[city][paramsD2.annee];
            valeurs.push(tmpJson);
        }
        
        valeurs.sort();
        valeurs.reverse();
        
        var tmp = '';
        for(var i in valeurs) {    
            for (var city in datasD2) {     
                if( (valeurs[i] == datasD2[city][paramsD2.annee]) &&(tmp!=datasD2[city].nom)){
                    var tmpJson2 = {};
                    tmpJson2.nom = datasD2[city].nom;
                    tmpJson2.nb = datasD2[city][paramsD2.annee];
                    selectedDataD2.push(tmpJson2);
                    tmp = datasD2[city].nom;
                    break;
                }
            }
        }      
    }
    res.json(selectedDataD2);
});

/**
 * @author Quentin GROS 
 * @author Claire REMY
 * 
=======
 * 
 * returns the data for the second dataviz 
 */
app.get('/dataviz2', function(req, res) {
    // first call
    var paramsD2 = req.query;
    var datasD2 = require("./data/salariesnum.json");
    
    if ('annee' in paramsD2) {
    
        var valeurs = [];
        var selectedDataD2= [];
      
        for (var city in datasD2) {  
            var tmpJson = {};
            tmpJson = datasD2[city][paramsD2.annee];
            valeurs.push(tmpJson);
        }
        
        valeurs.sort();
        valeurs.reverse();
        
        var tmp = '';
        for(var i in valeurs) {    
            for (var city in datasD2) {     
                if( (valeurs[i] == datasD2[city][paramsD2.annee]) &&(tmp!=datasD2[city].nom)){
                    var tmpJson2 = {};
                    tmpJson2.nom = datasD2[city].nom;
                    tmpJson2.nb = datasD2[city][paramsD2.annee];
                    selectedDataD2.push(tmpJson2);
                    tmp = datasD2[city].nom;
                    break;
                }
            }
        }      
    }
    res.json(selectedDataD2);
});

/**
 * @author Quentin GROS 
 * @author Claire REMY
 * 
>>>>>>> upstream/master
 * @param methode : the classification method used
 * returns the data needed to display the podiums
 */
app.get('/matchfinal', function(req, res) {
    var paramsD3 = req.query;
    var datasD3 = require("./data/matchfinal.json");
    if ('methode' in paramsD3) {
        var methodResults = [];
        for (var podium in datasD3) {
            if (datasD3[podium].methode === paramsD3['methode']) {
                methodResults.push(datasD3[podium]);
            }
        }
    }
    res.json(methodResults);
});

/**
 * @author Claire REMY
 * 
 * returns the informations needed to display popups in dataviz 1
 * 
 * @param nom : the name of city queried
 */
app.get('/townInfo', function(req, res) {
    var params = req.query;
    var datas = require("./data/villes.json");
    
    if('nom' in params) {
        var result = null;
        for(var i in datas) {
            if(datas[i].nom === params.nom) {
                result = datas[i];
            }
        }
    }
    res.json(result);
});

/**
 * @author Claire REMY
 * 
 * returns the numbers to display in popups of dataviz 1
 * 
 * @param nom : the name of the city the user has clicked
 * @param year : the year currently being displayed on the page
 */
app.get('/townNumbers', function(req, res) {
    var params = req.query;
    var datas = require("./data/yearsNb.json");
    
    if('nom' in params && 'annee' in params) {
        var result = {};
        
        for(var i in datas) {
            if(datas[i].nom === params.nom && datas[i].annee === params.annee) {
                result.ch1 = datas[i].chiffre1;
                result.ch2 = datas[i].chiffre2;
                result.ch3 = datas[i].chiffre3;
                result.ch4 = datas[i].chiffre4;
            }
        }
    }
    res.json(result);
});

// launch the server
/*var server = app.listen(process.env.PORT, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('JDEHyblab app listening at http://%s:%s', host, port);
});*/
module.exports = app;
