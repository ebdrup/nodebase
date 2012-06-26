describe("Global variables for testing", function () {

	it("has sinon defined", function () {
		expect(sinon).to.be.ok;
	});

	it("has expect defined", function () {
		expect(expect).to.be.ok;
	});

	it("has injectr defined", function () {
		expect(injectr).to.be.ok;
	});

	it("has underscore defined", function () {
		expect(_).to.be.ok;
	});

	it("has request defined", function () {
		expect(request).to.be.ok;
	});

});