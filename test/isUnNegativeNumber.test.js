
const expect = require('chai').expect;
const isUnNegativeNumber = require('../src/isUnNegativeNumber');

// Test
describe('isUnNegativeNumber test', function() {
  // 3
  it(`isUnNegativeNumber(3) === true`, function() {
    expect(isUnNegativeNumber(3)).to.be.equal(true);
  });

  // '3'
  it(`isUnNegativeNumber('3') === true`, function() {
    expect(isUnNegativeNumber('3')).to.be.equal(true);
  });

  // '3'
  it(`isUnNegativeNumber('3', {isStrict: true}) === false`, function() {
    expect(isUnNegativeNumber('3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isUnNegativeNumber(0) === false`, function() {
    expect(isUnNegativeNumber(0)).to.be.equal(true);
  });

  // '0'
  it(`isUnNegativeNumber('0') === false`, function() {
    expect(isUnNegativeNumber('0')).to.be.equal(true);
  });

  // -3
  it(`isUnNegativeNumber(-3) === false`, function() {
    expect(isUnNegativeNumber(-3)).to.be.equal(false);
  });

  // '-3'
  it(`isUnNegativeNumber('-3') === false`, function() {
    expect(isUnNegativeNumber('-3')).to.be.equal(false);
  });
});
