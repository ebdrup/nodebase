"use strict";
process.on('uncaughtException', function (err) {
	console.error("uncaught exception", err, err.stack);
});
if (process.env.NODE_ENV !== "coverage") {
	console.log("Hello world");
}