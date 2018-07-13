
const expect = require('chai').expect;
const isEmptyArray = require('../src/isEmptyArray');

// Test
describe('isEmptyArray test', function() {
  // []
  it(`isEmptyArray([]) === true`, function() {
    expect(isEmptyArray([])).to.be.equal(true);
  });

  // {}
  it(`isEmptyArray({}) === false`, function() {
    expect(isEmptyArray({})).to.be.equal(false);
  });

  // [1]
  it(`isEmptyArray([1]) === false`, function() {
    expect(isEmptyArray([1])).to.be.equal(false);
  });

  // Object({})
  it(`isEmptyArray(Object({})) === false`, function() {
    expect(isEmptyArray(Object({}))).to.be.equal(false);
  });

  // Object([])
  it(`isEmptyArray(Object([])) === true`, function() {
    expect(isEmptyArray(Object([]))).to.be.equal(true);
  });

  // Object([1])
  it(`isEmptyArray(Object([1])) === false`, function() {
    expect(isEmptyArray(Object([1]))).to.be.equal(false);
  });

  // new Object([])
  it(`isEmptyArray(new Object([])) === true`, function() {
    expect(isEmptyArray(new Object([]))).to.be.equal(true);
  });

  // new Object([1])
  it(`isEmptyArray(new Object([1])) === false`, function() {
    expect(isEmptyArray(new Object([1]))).to.be.equal(false);
  });
});
