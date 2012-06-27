"use strict";
var spawn = require('child_process').spawn;

runJsHint(["./lib", "./test"], function (err) {
	if (err) {
		console.error("Exiting because of jsHint errors");
		return process.exit(1);
	}
	console.log("No JSHint errors detected");
	return runMocha();
});

function runMocha() {
	var realExit = process.exit;
	process.exit = function () {
		var args = arguments;
		setTimeout(function () {
			realExit.apply(process, args);
		}, 1000); //stdout does not flush data output before exiting the process, this compensates
	};
	require('../node_modules/mocha/bin/_mocha');
}

function runJsHint(pathsArray, callback) {
	var pathsRun = 0, error = null, numberOfPaths = pathsArray.length;
	//start off all jsHints in parallel
	for (var i = 0; i < numberOfPaths; i++) {
		runJsHintOnOnePath(pathsArray[i], onePathRun);
	}
	return;

	function onePathRun(err) {
		error = error || err;
		pathsRun++;
		if (pathsRun === numberOfPaths) {
			return callback(error);
		}
	}
}

function runJsHintOnOnePath(path, callback) {
	var jsHint = spawn("node", ["./node_modules/jshint/bin/hint", path]);
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
			return callback(new Error("JSHintErrors"));
		}
		return callback(null);
	});
}