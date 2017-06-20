var express = require('express');
var router = express.Router();
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

router.get('/', function (req, res, next) {
    fcm.send(message, function (err, response) {
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });
});

router.get('/test', function (req, res, next) {
    fcm.send(message2, function (err, response) {
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });
});


module.exports = router;

