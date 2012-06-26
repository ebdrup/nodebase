var spawn = require('child_process').spawn;
var jsHint = spawn("node", ["./node_modules/jshint/bin/hint","./lib"]);
var errors = false;
jsHint.stdout.on("data", function(data){
	console.log('jsHint: ' + data);
});
jsHint.stderr.on("data", function(data){
	console.error('jsHint error: ' + data);
	errors = true;
});
if(errors){
	process.exit(1);
}
var realExit = process.exit;
process.exit = function(){
	var args = arguments;
	setTimeout(function(){
		realExit.apply(process, args);
	}, 1000); //for some reason Mocha does not flush data output before exiting the process, this compensates
}
require('../node_modules/mocha/bin/_mocha');