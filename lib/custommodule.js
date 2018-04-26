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

module.exports = Person;