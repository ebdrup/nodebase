nodebase
--------
This is my boilerplate for when I start a new `node.js` project. I copy this repository and start from there.

The main advantage of copying this repository is that it comes with a **working test-setup** and runs **JSHint** as well
as all the tests.

You put your code in the `lib` folder. I recommend an editor that you can configure to run JSHint for you
while you are editing your JavaScript files. I use WebStorm.

Installation
------------
Once you've copied the files, ```cd``` to the ```nodebase``` directory and type
```
npm install
```


Running tests
-------------
Use

```
npm test
```

to run all tests.

*In the Webstorm editor you can also set up a mocha run configuration and point it at the `test` folder.*


Test setup
----------
- `mocha` is the test framework
- `sinon` is used for mocks and spies
- `chai` is used for assertions
- `sinon-chai` is used for better assertions of sinon
- `mocha-jshint` is used to run JSHint as a mocha test

Test files
----------
The project it set up to have tests in the ```test``` folder.

There is an example test in ```test/unit/globals.spec.js```.

I usually put my unit tests in ```test/unit``` and my integration tests in ```test/integration```, and create
other folders in ```test/``` for other classes of tests.

BDD style
---------
The tests are set to use BDD-style, and use the dot reporter. These options can be changed in the
file ```test/mocha.opts```

Global variables when testing
-----------------------------
The following global variables are defined for testing:
- `expect` for assertions
- `sinon` for mocking and spies

You can alter globals for testing in the file `test/common.js`

JSHint
------
JSHint is set up to verify all the JavaScript files except then ones in `node_modules`.

You can specify specific files or directories for JSHint to ignore in the file ```.jshintignore```

You can specify what JSHint options to use in the file ```.jshintrc```

Running a subset of tests
-------------------------
If you want to run a subset of tests, you can run the command
```
node test.js --grep myTestFilter
```

or modify the file ```tests/mocha.opts``` and add the line
```
--grep myTestFilter
```
Here is the mocha explanation of ```--grep```

The ```--grep``` option when specified will trigger mocha to only run tests matching the given pattern which is internally compiled to a RegExp.

Suppose for example you have “api” related tests, as well as “app” related tests, as shown in the following snippet;
One could use ```--grep api``` or ```--grep app``` to run one or the other.
The same goes for any other part of a suite or test-case title, ```--grep users``` would be valid as well,
or even ```--grep GET```.

```js
describe('api', function(){
  describe('GET /api/users', function(){
    it('respond with an array of users')
  });
});

describe('app', function(){
  describe('GET /users', function(){
    it('respond with an array of users')
  });
});
```