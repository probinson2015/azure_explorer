var express = require('express');
var fs = require('fs');

var app = express();

app.set('view engine', 'ejs');

app.get('/viewer', function(req, res, next) {

  //res.send(200, 'OK');
  fs.readdir('/', function(err,data){
    if (err) throw err;
    console.log(data);
    data.forEach(function(item) {
      fs.stat('/'+ item, function(err, stats){
        if(err) {
          console.log(err);
          return;
        }
        if (stats.isFile()) {
          console.log("is File")
        }
        if(stats.isDirectory()){
          console.log("is Directory")
        }
      })
    })

    res.render('viewer', {data:data});
  })
});

var server = app.listen(80);

io = require('socket.io').listen(server);
