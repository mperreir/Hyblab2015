var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'html')));

app.use('/bootstrap',express.static(path.join(__dirname, 'node_modules/bootstrap')));
app.use('/snap',express.static(path.join(__dirname, 'bower_components/snap/dist')));
app.use('/ressource',express.static(path.join(__dirname, 'ressource')));
app.use('/fullpage',express.static(path.join(__dirname, 'bower_components/fullpage')));
app.use('/chartist',express.static(path.join(__dirname, 'bower_components/chartist/dist')));
//app.use('/excel',express.static(path.join(__dirname, 'bower_components/jsxlsx/dist')));


app.get('/', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.end('Vous êtes à l\'accueil');

});

//app.listen(8080);

// launch the server
/*var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('TestHyblab app listening at http://%s:%s', host, port)
})*/

module.exports = app;