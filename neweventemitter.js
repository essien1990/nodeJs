// event emitter module
var EventEmitter = require('events').EventEmitter;

//util 
var util = require('util');

// creates person object or function

var Person = function(name){
	// name is set to name value property
	this.name = name;

};

// person proprtey inherit Event Emitter  
util.inherits(Person, EventEmitter);

// instance of new person
var ben = new Person('Nana Yaw');

// ben listens when a speak event is raised with sad args
ben.on('speak', function(said){
	console.log(`${this.name}: ${said}`);
});

// ben emit a speak event
ben.emit('speak','you may delay, but time not...');