var fs = require('fs');

var md = `

	Sample Markdown Title
	=====================

	Sample subtitle
	===============

	* point
	* point
	* point
`;

fs.writeFile('smaple.md', md.trim(), function(err){
console.log('file created');
})