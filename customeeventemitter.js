//external module
var Person = require('./lib/custommodule');

// instance of new person
var ben = new Person('Nana Yaw');

var george = new Person('Eunice Osei')

// ben listens when a speak event is raised with sad args
ben.on('speak', function(said){
	console.log(`${this.name}: ${said}`);
});

// ben listens when a speak event is raised with sad args
george.on('speak', function(said){
	console.log(`${this.name} -> ${said}`);
});

// ben emit a speak event
ben.emit('speak','you may delay, but time not...');
george.emit('speak', 'it is far better to be alone, than to be in bad company');