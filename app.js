var PORT = process.env.PORT || 3000;

var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var path = require('path');


//other Setting///
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

//Routes
app.use('/', require('./routes/index'));



// Port Setting
 var server = app.listen(PORT, function(){
	console.log("Connected!")
});

