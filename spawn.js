// create variable for spawn function
var spawn = require('child_process').spawn

// spawn using node command to run alawystalking file in an array
var cp = spawn('node', ['alwaysTalking']);

// listen to data even using standard output with arg data
cp.stdout.on('data', function(data){
	// log data recieved and will display the data
	console.log(`STDOUT: ${data.toString()}`);
});

// listen is close event is raised
cp.on('close', function(){
	console.log('Child process has ended');
	//exit process
	process.exit();
});


// send time out for 4s and send data to instance using standard input object
setTimeout(function(args) {
	//stop input will stop the application
	cp.stdin.write('stop');
}, 4000)