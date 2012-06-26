nodebase
========
This is my boilerplate for when I start a new ```node.js``` project. I clone this repository and start from there.

Testing setup
=============
- ```mocha``` is the test framework
- ```sinon``` is used for mocks and spies
- ```chai``` is used for assertions
- ```sinon-chai``` is used for better assertions of sinon

Test files
----------
The project it set up to have tests in the ```test``` folder.
There is an example test in ```test/units/globals.spec.js```

BDD style
---------
The tests are set to use BDD-style, and use the dot reporter. These options can be changed in the
file ```test/mocha.opts```

Global variables when testing
-----------------------------
The following global variables are defined for testing:
- ```expect``` for assertions
- ```sinon``` for mocking and spies
- ```_``` the JavaScript helper library underscore
- ```injectr``` for mocking out ```require``` statements
- ```request``` library for making HTTP requests to your API in integration tests

You can alter globals for testing in the file ```test/common.js```

JSHint
------
JSHint is set up to verify all the JavaScript files in the foldes ```lib``` and ```test```.
You can specify what JSHint options to use in the file ```.jshintrc```

Running tests
-------------
After you do ```npm install`` you just run the command ```npm test``` to run all tests.

