"use strict";
describe("When running app.js", function () {

	it("runs without throwing an error", function () {
		//just a dummy test to get nicer code coverage report, when I'm testing
		require("../../lib/app.js");
		expect(true).to.be.ok;
	});
});