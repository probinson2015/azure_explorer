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
    for (var i = 0; i <= data.length; i++) {
      console.log(fs.lstatSync(data[i]).isDirectory());
      // fs.statSync('/'+ data[i], function(err, stats, next){
      //   console.log(stats)
      //   if(err) {
      //     next;
      //   }
      //   if (stats.isFile()) {
      //     // console.log("is File")
      //     console.log(data[i])
      //     allItems['files'].push(data[i])
      //   }
      //   if(stats.isDirectory()){
      //     // console.log("is Directory")
      //     console.log(data[i])
      //     allItems['folders'].push(data[i])
      //   }
      // })
    }
    console.log("Folders: " + allItems.folders);
    console.log("Files: " + allItems.files)

    res.render('viewer', {data:data});
  })
});

var server = app.listen(80);

io = require('socket.io').listen(server);
