
/*
NOTE: Spawn: made for long large amount of data processes
	  Exec: are made for short or asynchronous processes
*/

// array of sayings
var sayings = [
	"You are not allowed Here",
	"Tell me you are have not forgotten",
	"Well done is better than well said",
	"Early to bed, early to rise"
];

// creating a interval for every second, sayings will randomly display
var interval = setInterval(function() {
	// random index
	var i = Math.floor(Math.random() * sayings.length);
	// display sayings randomly
	process.stdout.write(`${sayings[i]} \n`);
}, 1000);

// create listener on the standard input object to listen to a data with a callback function
process.stdin.on('data', function(data){
		// log the data that comes into the function
		console.log(`STDIN Data Recieved -> ${data.toString().trim()}`);
		// clear the interval
		clearInterval(interval);
		//exit process
		process.exit();
});
