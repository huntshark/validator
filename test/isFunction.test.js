
const expect = require('chai').expect;
const isFunction = require('../src/isFunction');

// Test
describe('isFunction test', function() {
  // []
  it(`isFunction([]) === false`, function() {
    expect(isFunction([])).to.be.equal(false);
  });

  // {}
  it(`isFunction({}) === false`, function() {
    expect(isFunction({})).to.be.equal(false);
  });

  // function
  it(`isFunction(parseInt) === true`, function() {
    expect(isFunction(parseInt)).to.be.equal(true);
  });

  // new Date
  it(`isFunction(new Date()) === false`, function() {
    expect(isFunction(new Date())).to.be.equal(false);
  });

  // null
  it(`isFunction(null) === false`, function() {
    expect(isFunction(null)).to.be.equal(false);
  });
});
