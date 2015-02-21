var express = require('express');
var path = require('path');
var app = express();

//console.log("Page demandée :" + path.join(__dirname, '/public'));
// serve static content from the html directory
app.use(express.static(path.join(__dirname, '/public')));

module.exports = app;