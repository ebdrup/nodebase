global.sinon = require('sinon');
var chai = require('chai');
chai.config.includeStack = true;
chai.config.truncateThreshold = 0; // disable truncating
global.expect = chai.expect;
chai.use(require('sinon-chai'));
