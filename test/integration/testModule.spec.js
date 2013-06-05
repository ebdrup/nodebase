"use strict";
describe("When calling testModule", function () {
	
	var result;
	
	before(function(){
		var testModule = require("../../lib/testModule.js");
		result = testModule();		
	});
	
	it("runs without throwing an error", function () {

		expect(result).to.equal("testModule.js was tested");
	});
});
