var readline = require('readline');

// instance of readLine with an interface which processes stdout and stdin
var rl = readline.createInterface(process.stdin, process.stdout);

var fs = require('fs');
// creating Js empty Objects for real person
var realPerson = {
	name: '',
	sayings:[]
};

rl.question("What is your name..? ", function(answer) {
	// set the real person name
	realPerson.name = answer;


// create a new markdown file
fs.writeFileSync(realPerson.name + '.md', `${realPerson.name}\n============\n\n`);


	// set prompt user to ask question
	rl.setPrompt(`What would ${realPerson.name} say..? `);

	// display prompt
	rl.prompt();

	// listen on a new line for user to submit answer ie saying
	rl.on('line', function(saying){
		// collecting all sayings
		realPerson.sayings.push(saying.trim());


		// Append saying to markdown file
		fs.appendFile(realPerson.name + '.md', `* ${saying.trim()}\n`)


		// setting the exit command
		if(saying.toLowerCase().trim() === 'exit'){
			rl.close();
		}
		else
		{
			// set another prompt user to ask question
			rl.setPrompt(`What else would ${realPerson.name} say ? ('exit' to leave) ` );
			
			// display prompt
			rl.prompt();
		}

	});
});


// listener event for the readline instance for close
rl.on('close', function(){
	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);

	// exiting the program
	process.exit()
});