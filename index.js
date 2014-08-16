process.on('uncaughtException', function (err) {
	console.error("uncaught exception", err, err.stack);
});

console.log("Hello world");
