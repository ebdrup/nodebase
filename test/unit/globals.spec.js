"use strict";
describe("Global variables for testing", function () {
	var fix;  //this is needed because .to.be.ok is not a function call and JSHint fails on that
	//they really should mak .ko a function call

	it("has sinon defined", function () {
		fix = expect(sinon).to.be.ok;
	});

	it("has expect defined", function () {
		fix = expect(expect).to.be.ok;
	});

	it("has injectr defined", function () {
		fix = expect(injectr).to.be.ok;
	});

	it("has underscore defined", function () {
		fix = expect(_).to.be.ok;
	});

	it("has request defined", function () {
		fix = expect(request).to.be.ok;
	});

});