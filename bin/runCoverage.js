"use strict";
var nodecoverage = require("nodecoverage");
nodecoverage({
	instrument:["lib"],
	copy:["test"]
}, function (err) {
	if(err){
		console.error(err);
	}
});
