var express = require('express')
//var basicAuth = require('basic-auth-connect');
var app = express()


// password protection
//app.use(basicAuth('ddj2015', 'datascientist'));

// create sub apps
//var test_file = require('./test-file/server'); // test
//var test_api = require('./test-api/server');   // test
var citizen_press = require('./citizen_press/server'); 
var geo = require('./geo/server'); 
var l_express = require('./l_express/server'); 
var la_lettre_API = require('./la_lettre_API/server'); 
var le_journal_des_entreprises = require('./le_journal_des_entreprises/server'); 
var nantes = require('./nantes/server'); 
var ouest_france = require('./ouest_france/server'); 
var pays_de_la_loire = require('./pays_de_la_loire/server'); 
var the_place_to_bio = require('./the_place_to_bio/server'); 
var we_demain = require('./we_demain/server'); 

// register sub-apps 
//app.use('/test-file',test_file);  // test
//app.use('/test-api',test_api);    // test
app.use('/citizen_press',citizen_press);
app.use('/geo',geo);
app.use('/l_express',l_express);
app.use('/la_lettre_API',la_lettre_API);
app.use('/le_journal_des_entreprises',le_journal_des_entreprises);
app.use('/nantes',nantes);
app.use('/ouest_france',ouest_france);
app.use('/pays_de_la_loire',pays_de_la_loire);
app.use('/the_place_to_bio',the_place_to_bio);
app.use('/we_demain',we_demain);
app.use(/\/$/,function(req, res, next){
	res.redirect('http://www.hyblab.fr/evenements/hyblab-datajournalisme/');
});


// launch app
var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Hyblab DDJ 2015 routing app listening at http://%s:%s', host, port)

})
