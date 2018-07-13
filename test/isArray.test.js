
const expect = require('chai').expect;
const isArray = require('../src/isArray');

// Test
describe('isArray test', function() {
  // []
  it(`isArray([]) === true`, function() {
    expect(isArray([])).to.be.equal(true);
  });

  // {}
  it(`isArray({}) === false`, function() {
    expect(isArray({})).to.be.equal(false);
  });

  // function
  it(`isArray(parseInt) === false`, function() {
    expect(isArray(parseInt)).to.be.equal(false);
  });

  // new Date
  it(`isArray(new Date()) === false`, function() {
    expect(isArray(new Date())).to.be.equal(false);
  });

  // null
  it(`isArray(null) === false`, function() {
    expect(isArray(null)).to.be.equal(false);
  });

  // Object({})
  it(`isArray(Object({})) === false`, function() {
    expect(isArray(Object({}))).to.be.equal(false);
  });

  // Object([])
  it(`isArray(Object([])) === true`, function() {
    expect(isArray(Object([]))).to.be.equal(true);
  });

  // new Object([])
  it(`isArray(new Object([])) === true`, function() {
    expect(isArray(new Object([]))).to.be.equal(true);
  });
});
