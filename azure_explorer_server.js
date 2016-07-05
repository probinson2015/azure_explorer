var express = require('express');
var fs = require('fs');

var app = express();

app.set('view engine', 'ejs');

app.get('/viewer', function(req, res, next) {

  //res.send(200, 'OK');
  fs.readdir('/', function(err,data){
    var allItems = {
      files: [12000],
      folders: [124944]
    };
    if (err) throw err;
    // console.log(data);
    data.forEach(function(item) {
      fs.stat('/'+ item, function(err, stats){
        if(err) {
          console.log(err);
          return;
        }
        if (stats.isFile()) {
          // console.log("is File")
          console.log(item)
          allItems['files'].push(item)
        }
        if(stats.isDirectory()){
          // console.log("is Directory")
          console.log(item)
          allItems['folders'].push(item)
        }
      })
    })
    console.log("Folders: " + allItems.folders);
    console.log("Files: " + allItems.files);

    res.render('viewer', {data:data});
  })
});

var server = app.listen(80);

io = require('socket.io').listen(server);
