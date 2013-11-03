describe("When running app.js", function () {

	it("runs without throwing an error", function () {
		//just a dummy test to get nicer code coverage report, when I'm testing
		var app = require("../../lib/app.js");
		expect(app).to.be.ok;
	});
});
