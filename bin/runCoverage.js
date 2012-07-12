"use strict";
process.env.NODE_ENV = "coverage";
var nodecoverage = require("nodecoverage");
nodecoverage({
	instrument:["lib"],
	copy:["test"]
}, function (err) {
	if(err){
		console.error(err);
	}
	process.exit();
});
