// delay time is 3seconds
var waitTime = 3000;
//current time to run the application
var currentTime = 0;
//wait interval for every second
var waitInterval = 10; 
// variable to hold percentage
var percentWaited = 0;



// function for displaying percentage
function writeWaitPercent(p){

	// process to clear the last line
	process.stdout.clearLine();

	// move cursor back to the first line
	process.stdout.cursorTo(0);

	process.stdout.write(`waiting.... ${p}%`);
}

// do operation every half second using set interval
var interval = setInterval(function(args) {

// calculate percent waited
percentWaited = Math.floor((currentTime/waitTime) * 100);
	
// update current time
currentTime += waitInterval;

// display the percentage result in the console
writeWaitPercent(percentWaited);
},waitInterval);



// set time out for the delay
setTimeout(function() {
	// stop the intervals
	clearInterval(interval);
	// when application is done it will display 100%
	writeWaitPercent(100);
	console.log("\n done \n");
},waitTime);


process.stdout.write(`\n\n`);
// start percentage will be 0%
writeWaitPercent(percentWaited); 