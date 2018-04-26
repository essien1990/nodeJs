var fs = require('fs');
//path module
var path = require('path');

//read directory in lib directory, stating the format and the callback function
fs.readdir('./lib/', function(err, files) {
	//loop through files
	files.forEach(function(fileName){
		// create a full path by joining current directory
		var file = path.join(__dirname, 'lib', fileName);

		//tell statistics whether files or directory
		var stats = fs.statSync(file)

		if(stats.isFile()){
			// read file using format and callback function
			fs.readFile(file, "UTF8", function(err, contents){
				// display content
				console.log(contents)	
			});
		}
	})

});