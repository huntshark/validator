
const expect = require('chai').expect;
const isInfinity = require('../src/isInfinity');

// Test
describe('isInfinity test', function() {
  // Infinity
  it(`isInfinity(Infinity) === true`, function() {
    expect(isInfinity(Number.POSITIVE_INFINITY)).to.be.equal(true);
  });

  // Infinity
  it(`isInfinity(-Infinity) === true`, function() {
    expect(isInfinity(Number.NEGATIVE_INFINITY)).to.be.equal(true);
  });

  // NaN
  it(`isInfinity(NaN) === false`, function() {
    expect(isInfinity(NaN)).to.be.equal(false);
  });

  // null
  it(`isInfinity(null) === false`, function() {
    expect(isInfinity(null)).to.be.equal(false);
  });

  // undefined
  it(`isInfinity(undefined) === false`, function() {
    expect(isInfinity(undefined)).to.be.equal(false);
  });

  // 3
  it(`isInfinity(3) === false`, function() {
    expect(isInfinity(3)).to.be.equal(false);
  });

  // ''
  it(`isInfinity('') === false`, function() {
    expect(isInfinity('')).to.be.equal(false);
  });
});
