var express = require('express');
var fs = require('fs');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'))

app.get('/viewer', function(req, res, next) {

  fs.readdir('/', function(err,data){
    if (err) return console.log(err);

    var directories = {
      folders: [],
      files: []
    };

    data.forEach(function(item) {
      // console.log('item:' + item);

      try {
          var stats = fs.statSync('/' + item);
          if (stats.isFile()) {
            directories.files.push(item);
          }
          if (stats.isDirectory()) {
            directories.folders.push(item);
          }
          // console.log('it exists');
      } catch(err) {
            console.log('it does not exist');
      }
    });
    console.log("Folders: " + directories.folders);
    console.log("Files: " + directories.files);
    res.render('viewer', {directories: directories.folders, files: directories.files});
  });
});

var server = app.listen(80);

io = require('socket.io').listen(server);
