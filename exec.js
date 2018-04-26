//module for child process
var exec = require('child_process').exec;

// Windows via cmd
exec('start https://www.computerhope.com/', function(err, stdout, stderr){
	console.log(stdout)
});

// Linux or Macos via terminal
// exec('open https://www.computerhope.com/', function(err, stdout, stderr){
// 	console.log(stdout)
// });

