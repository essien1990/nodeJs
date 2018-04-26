// include the filesystem module
var fs = require('fs');

// synchronously read the lib directory
// var files = fs.readdirSync('./lib');

// asynchronously read the lib directory
fs.readdir('./lib', function(err,files) {
	if(err){
		throw err;
	}
	// output the contents
	console.log(files)
});

console.log('Reading files......')