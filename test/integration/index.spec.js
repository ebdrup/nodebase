describe("When requiring index.js", function () {

	it("runs without throwing an error", function () {
		var app = require("../../index.js");
		expect(app).to.be.ok;
	});
});
