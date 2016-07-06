$(document).ready(function(){
	console.log('js loadded')
	//allFiles is an array containing data for each file, presumably an object of objects like:
    //allFiles { { name: file1, size: 134 }, { name: file2, size: 156 } }
      function listAllFiles(fromFile) {
        if(fromFile) {
          for(var i = 0; i < allFiles.length; i++) {
            $.each(allFiles[i], function(key, value) {
              $('.file-divs').append('<svg info here><br>' + allFiles[i].name);
            })
          }
        }
      }
});
