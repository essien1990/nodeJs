var fs = require('fs');

// rename module to rename the old name to new name of the file by using fs rename synchronous
// rename module is also useo for moving directories
fs.renameSync('./lib/project-config.js', './lib/project-config.json');

console.log('File has been renamed successfully');


// moving file from a directory to another directory by using fs rename asynchronous
fs.rename('./Nana.md', './lib/Nana.md', function(err){
	if(err){
		console.log(err);
	}else{
		console.log('File moved successfully');
	}
});