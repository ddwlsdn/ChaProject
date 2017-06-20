var PORT = process.env.PORT || 3000;

var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var path = require('path');
var FCM = require('fcm-node');
var serverKey = 'AAAAWdaqH18:APA91bFjSrEYw4BDr4Cn0f7np7JPVLr7Z9f3fXu7UZIvfSPNffMXDzTSajdcXrJHHySvyEryhhro1KNH46SgWs5fX4KRAvUko7hqc0ZNjG8-7fDDM31CJctVfYot053VEDbX6iRTTN1w'; //put your server key here 
var fcm = new FCM(serverKey);

var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera) 
    to: '/topics/notice',
    collapse_key: 'test',

    notification: {
        title: '금고문이 열렸습니다.',
        body: '~~금고문이 열렸습니다. 확인하세요~~'
    }
};

var message2 = { //this may vary according to the message type (single recipient, multicast, topic, et cetera) 
    to: '/topics/notice',
    collapse_key: 'test',

    notification: {
        title: 'WARNING!!!',
        body: '도둑놈이 나타났다!!!!'
    }
};


//other Setting///
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride("_method"));


app.get('/', function (req, res, next) {
    res.render('index');
    fcm.send(message, function (err, response) {
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });
});

app.get('/test', function (req, res, next) {
    res.render('profile');
    fcm.send(message2, function (err, response) {
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });
});


// Port Setting
var server = app.listen(PORT, function () {
    console.log("Connected!")
});
