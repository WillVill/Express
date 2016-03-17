'use strict'

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController')


var jsonParser = bodyParser.json();

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname +'/public'));

app.use('/', function(req, res, next){
    console.log('request Url: ' + req.url);
    next();
})

app.get('/', function(req, res){
    //get data
});

apiController(app);
htmlController(app);

app.listen(port);