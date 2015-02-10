var http = require("http");
var url = require("url");
var querystring = require('querystring');

var server = http.createServer(
    function(req, res)
    {
        res.writeHead(200, {"Content-Type": "text/html"});
        var page = url.parse(req.url).pathname;
        var params = querystring.parse(url.parse(req.url).query);
        console.log(page);
        res.write(
            '<!DOCTYPE html>'+
            '<html lang="fr">'+
            '<head>'+
            '<meta charset="utf-8" />'+
            '<title>Test</title>'+
            '</head>'+
            '<body>'+
            '<p>ceci est un texte encrit en <strong>html</strong>.</p>');
        if('nom' in params && 'prenom' in params)
        {
            res.write('<p>vous vous appelez: ' + params['nom'] + ' ' + params['prenom'] + '.</p>');
        }
        else
        {
            res.write('<p>vous devez avoir un nom et un prénom, non?!</p>');
        }
            
        res.write(
            '</body>'+
            '</html>');
        
        res.end();
    }
);

server.listen(8080);