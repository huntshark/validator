
const isInfinity = require('../src/isInfinity');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isInfinity test', function() {
  // Infinity
  it(`isInfinity(Infinity) === true`, function() {
    isInfinity(Number.POSITIVE_INFINITY).should.equal(true);
  });

  // Infinity
  it(`isInfinity(-Infinity) === true`, function() {
    isInfinity(Number.NEGATIVE_INFINITY).should.equal(true);
  });

  // NaN
  it(`isInfinity(NaN) === false`, function() {
    isInfinity(NaN).should.equal(false);
  });

  // null
  it(`isInfinity(null) === false`, function() {
    isInfinity(null).should.equal(false);
  });

  // undefined
  it(`isInfinity(undefined) === false`, function() {
    isInfinity(undefined).should.equal(false);
  });

  // 3
  it(`isInfinity(3) === false`, function() {
    isInfinity(3).should.equal(false);
  });

  // ''
  it(`isInfinity('') === false`, function() {
    isInfinity('').should.equal(false);
  });
});
