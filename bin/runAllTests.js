//use strict
var spawn = require('child_process').spawn;
var jsHint = spawn("node", ["./node_modules/jshint/bin/hint", "./lib"]);
var jsHintErrors = false;
jsHint.stdout.on("data", function (data) {
	jsHintErrors = true;
	console.warn(data.toString());
});
jsHint.stderr.on("data", function (data) {
	jsHintErrors = true;
	console.error('jshint Error: ' + data.toString());
});
jsHint.on("exit", function () {
	if (jsHintErrors) {
		console.error("Exiting because of jsHint errors");
		return process.exit(1);
	}
	console.log("No JSHint errors detected");
	//run mocha
	var realExit = process.exit;
	process.exit = function () {
		var args = arguments;
		setTimeout(function () {
			realExit.apply(process, args);
		}, 1000); //for some reason Mocha does not flush data output before exiting the process, this compensates
	};
	require('../node_modules/mocha/bin/_mocha');
});