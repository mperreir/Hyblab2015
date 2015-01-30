var http = require("http");

var server = http.createServer(
    function(req, res)
    {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(
            '<!DOCTYPE html>'+
            '<html lang="fr">'+
            '<head>'+
            '<meta charset="utf-8" />'+
            '<title>Test</title>'+
            '</head>'+
            '<body>'+
            '<p>ceci est un texte encrit en <strong>html</strong>.</p>'+
            '</body>'+
            '</html>');
        
        res.end();
    }
);

server.listen(8080);