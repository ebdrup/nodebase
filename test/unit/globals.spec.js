"use strict";
describe("When running tests", function () {

	it("should have sinon defined", function () {
		expect(sinon).to.be.ok;
	});

	it("should have expect defined", function () {
		expect(expect).to.be.ok;
	});

	it("should have injectr defined", function () {
		expect(injectr).to.be.ok;
	});

	it("should have underscore defined", function () {
		expect(_).to.be.ok;
	});

	it("should have request defined", function () {
		expect(request).to.be.ok;
	});

});