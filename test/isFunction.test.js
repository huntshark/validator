
const isFunction = require('../src/isFunction');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isFunction test', function () {
  // []
  it(`isFunction([]) === false`, function () {
    isFunction([]).should.equal(false);
  });

  // {}
  it(`isFunction({}) === false`, function () {
    isFunction({}).should.equal(false);
  });

  // function
  it(`isFunction(parseInt) === true`, function () {
    isFunction(parseInt).should.equal(true);
  });

  // new Date
  it(`isFunction(new Date()) === false`, function () {
    isFunction(new Date()).should.equal(false);
  });

  // null
  it(`isFunction(null) === false`, function () {
    isFunction(null).should.equal(false);
  });
});
