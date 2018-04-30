var fs = require('fs');

// check if directory already exists throw error or else create directory
if(fs.existsSync('data')){
	console.log('Directory Already Exists')
} else{

	// create directory called data 
fs.mkdir('data', function(err) {
	if(err){
		console.log(err);
	}
	else{
		console.log('Directory Created Successfully');
	}
});      

}


