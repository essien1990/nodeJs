var fs = require('fs');

try{
	//fs module called unlink for removing files
	fs.unlinkSync('./lib/project-config.json');
}
catch(err) {
	console.log(err);
}

//removing file using asynchronous
fs.unlink('./data/nana.md', function(err) {
	if(err){
		console.log(err);
	}else{
		console.log('File has been removed successfully from data directory')
	}
})