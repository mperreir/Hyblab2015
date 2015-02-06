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

    res.render('layout', {
        test: 'coucou'
    });
});

app.get('/tableau', function(req, res) {
    var params = req.query;
    var datas = require("./data/data.json");
    console.log(params);
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
    console.log(selectedNafArray);
    res.json(selectedNafArray);
    //res.end();
});

app.get('/dataviz1', function(req, res) {
    var paramsD1 = req.query;
    var datasD1 = require("./data/entreprises.json");
    
    if ('annee' in paramsD1) {
    
        var selectedDataD1 = [];
        
        //Get objects corresponding to the city queried
        for (var city in datasD1) {  
            var tmpJson = {};
            tmpJson.nom = datasD1[city].nom;
            tmpJson.nb = datasD1[city][paramsD1.annee];
            selectedDataD1.push(tmpJson);
        }       
    }
    console.log(selectedDataD1);
    res.json(selectedDataD1);
    //res.end();
});

app.get('/matchfinal', function(req, res) {
    var paramsD3 = req.query;
    var datasD3 = require("./data/matchfinal.json");
    console.log(paramsD3);
    if ('methode' in paramsD3) {
        
        var methodResults = [];
        
        
        //Get objects corresponding to the city queried
        for (var podium in datasD3) {
            if (datasD3[podium].method === paramsD3.method) {
                methodResults.push(datasD3[podium]);
            }
        }
    }
    console.log(methodResults);
    res.json(methodResults);
    //res.end();
});

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
var server = app.listen(process.env.PORT, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('JDEHyblab app listening at http://%s:%s', host, port)
});
