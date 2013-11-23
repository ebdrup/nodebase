describe("When running app.js", function () {

	it("runs without throwing an error", function () {
		//just a dummy test to get nicer code coverage report, when I'm testing
		var testModule = require("../../lib/testModule.js");
		var result = testModule();
		expect(result).to.equal("testModule.js was tested");
	});
});