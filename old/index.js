var path = require('path');
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/public', express.static(path.join(__dirname + '/public')));



app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('attack', function(key) {
        
    });
});

http.listen(2345, function() {
    console.log("Running at 2345 port");
});
