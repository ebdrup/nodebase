"use strict";
process.env.NODE_ENV = "coverage";
var nodecoverage = require("nodecoverage");
nodecoverage({
	instrument:["lib"],
	requireBeforeRun:["lib/app.js"] //used for starting up a http server or similar, before running all tests
}, function (err) {
	if(err){
		console.error(err);
	}
	process.exit();
});
