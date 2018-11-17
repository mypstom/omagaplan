var firebase = require("firebase");
var express = require('express');
var app = express();
 
var config = {
    apiKey: "AIzaSyDxgOeH5kzft0JQ6aSlzzSatdOff9sMmso",
    authDomain: "ooaccountingsystem.firebaseapp.com",
    databaseURL: "https://ooaccountingsystem.firebaseio.com",
    projectId: "ooaccountingsystem",
    storageBucket: "ooaccountingsystem.appspot.com",
    messagingSenderId: "339874112428"
};
firebase.initializeApp(config);
var database = firebase.database();

var ref = firebase.database().ref('status/');



app.use('/public', express.static(path.join(__dirname + '/public')));

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/data', function (req, res) {
    // 输出 JSON 格式
    var response = {
        "stockState":req.query.stockState,
        "openState":req.query.openState,
        "waterflow":req.query.waterflow
    };
    ref.set(response);
    res.send("Receive date: " + JSON.stringify(response));
 })
 
var server = app.listen(process.env.PORT||3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Server host on %s port", port)
 
})