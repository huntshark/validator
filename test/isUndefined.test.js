
const expect = require('chai').expect;
const isUndefined = require('../src/isUndefined');

// Test
describe('isUndefined test', function() {
  // undefined
  it(`isUndefined(undefined) === true`, function() {
    expect(isUndefined(undefined)).to.be.equal(true);
  });

  // null
  it(`isUndefined(null) === false`, function() {
    expect(isUndefined(null)).to.be.equal(false);
  });

  // 0
  it(`isUndefined(0) === false`, function() {
    expect(isUndefined(0)).to.be.equal(false);
  });

  // ''
  it(`isUndefined('') === false`, function() {
    expect(isUndefined('')).to.be.equal(false);
  });

  // 'undefined'
  it(`isUndefined('undefined') === false`, function() {
    expect(isUndefined('undefined')).to.be.equal(false);
  });
});
