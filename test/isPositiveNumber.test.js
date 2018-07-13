
const expect = require('chai').expect;
const isPositiveNumber = require('../src/isPositiveNumber');

// Test
describe('isPositiveNumber test', function() {
  // 3
  it(`isPositiveNumber(3) === true`, function() {
    expect(isPositiveNumber(3)).to.be.equal(true);
  });

  // '3'
  it(`isPositiveNumber('3') === true`, function() {
    expect(isPositiveNumber('3')).to.be.equal(true);
  });

  // '3'
  it(`isPositiveNumber('3', {isStrict: true}) === false`, function() {
    expect(isPositiveNumber('3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isPositiveNumber(0) === false`, function() {
    expect(isPositiveNumber(0)).to.be.equal(false);
  });

  // '0'
  it(`isPositiveNumber('0') === false`, function() {
    expect(isPositiveNumber('0')).to.be.equal(false);
  });

  // -3
  it(`isPositiveNumber(-3) === false`, function() {
    expect(isPositiveNumber(-3)).to.be.equal(false);
  });

  // '-3'
  it(`isPositiveNumber('-3') === false`, function() {
    expect(isPositiveNumber('-3')).to.be.equal(false);
  });
});
