"use strict";
describe("When running tests", function () {
	var fix;  //this is needed because .to.be.ok is not a function call and JSHint fails on that
	//they really should make .ok a function call

	it("should have sinon defined", function () {
		fix = expect(sinon).to.be.ok;
	});

	it("should have expect defined", function () {
		fix = expect(expect).to.be.ok;
	});

	it("should have injectr defined", function () {
		fix = expect(injectr).to.be.ok;
	});

	it("should have underscore defined", function () {
		fix = expect(_).to.be.ok;
	});

	it("should have request defined", function () {
		fix = expect(request).to.be.ok;
	});

});