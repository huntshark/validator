
const isEmptyArray = require('../src/isEmptyArray');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isEmptyArray test', function() {
  // []
  it(`isEmptyArray([]) === true`, function() {
    isEmptyArray([]).should.equal(true);
  });

  // {}
  it(`isEmptyArray({}) === false`, function() {
    isEmptyArray({}).should.equal(false);
  });

  // [1]
  it(`isEmptyArray([1]) === false`, function() {
    isEmptyArray([1]).should.equal(false);
  });

  // Object({})
  it(`isEmptyArray(Object({})) === false`, function() {
    isEmptyArray(Object({})).should.equal(false);
  });

  // Object([])
  it(`isEmptyArray(Object([])) === true`, function() {
    isEmptyArray(Object([])).should.equal(true);
  });

  // Object([1])
  it(`isEmptyArray(Object([1])) === false`, function() {
    isEmptyArray(Object([1])).should.equal(false);
  });

  // new Object([])
  it(`isEmptyArray(new Object([])) === true`, function() {
    isEmptyArray(new Object([])).should.equal(true);
  });

  // new Object([1])
  it(`isEmptyArray(new Object([1])) === false`, function() {
    isEmptyArray(new Object([1])).should.equal(false);
  });
});
