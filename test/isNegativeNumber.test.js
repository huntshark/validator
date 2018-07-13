
const expect = require('chai').expect;
const isNegativeNumber = require('../src/isNegativeNumber');

// Test
describe('isNegativeNumber test', function() {
  // -3
  it(`isNegativeNumber(-3) === true`, function() {
    expect(isNegativeNumber(-3)).to.be.equal(true);
  });

  // '-3'
  it(`isNegativeNumber('-3') === true`, function() {
    expect(isNegativeNumber('-3')).to.be.equal(true);
  });

  // '-3'
  it(`isNegativeNumber('-3', {isStrict: true}) === false`, function() {
    expect(isNegativeNumber('-3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isNegativeNumber(0) === false`, function() {
    expect(isNegativeNumber(0)).to.be.equal(false);
  });

  // '0'
  it(`isNegativeNumber('0') === false`, function() {
    expect(isNegativeNumber('0')).to.be.equal(false);
  });

  // 3
  it(`isNegativeNumber(3) === false`, function() {
    expect(isNegativeNumber(3)).to.be.equal(false);
  });

  // '3'
  it(`isNegativeNumber('3') === false`, function() {
    expect(isNegativeNumber('3')).to.be.equal(false);
  });
});
