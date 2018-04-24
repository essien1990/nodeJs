var questions = [
	"What is your name..?",
	"What is your hobby",
	"What is your preferred programming Language..?"
];

var answers = [];

function ask(i){
	process.stdout.write(`\n\n ${questions[i]}`);
	process.stdout.write(" > ");
}

// wire event listener and callback
process.stdin.on('data', function(data){
	// save answers and ask next question
	answers.push(data.toString().trim());

	if(answers.length < questions.length)
	{
		ask(answers.length);
	}else{
		process.exit();
	}
});


// listener to display answer from user
process.on('exit', function(){
	process.stdout.write(`\n\n\n`);

	process.stdout.write(`Go ${answers[0]} you like ${answers[1]} and you can finish ${answers[2]} later`);
	process.stdout.write(`\n\n\n`);
});
ask(0);