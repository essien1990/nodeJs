// events module
var emit = require('events');

// create new instance of Eventemmiter constructor
var emitter = new events.EventEmitter();

//event listener with eventname using a message and status args for the callback function
emitter.on('customEvent', function(message, status){

	// display status and message value
	console.log(`${status}: ${message}`);
})

// trigger or emmit customEvent(Event Name), message and status
emitter.emit('customEvent', 'Hello Word', 200);