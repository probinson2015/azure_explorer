var express = require('express');
var fs = require('fs');

var app = express();

app.set('view engine', 'ejs');

app.get('/viewer', function(req, res, next) {
  res.render('viewer');
  //res.send(200, 'OK');
  fs.readdir('/', function(err,data){
    if (err) throw err;
    console.log(data);
  })
});

var server = app.listen(80);

io = require('socket.io').listen(server);
