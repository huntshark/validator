
const expect = require('chai').expect;
const isUnPositiveNumber = require('../src/isUnPositiveNumber');

// Test
describe('isUnPositiveNumber test', function() {
  // -3
  it(`isUnPositiveNumber(-3) === true`, function() {
    expect(isUnPositiveNumber(-3)).to.be.equal(true);
  });

  // '-3'
  it(`isUnPositiveNumber('-3') === true`, function() {
    expect(isUnPositiveNumber('-3')).to.be.equal(true);
  });

  // '-3'
  it(`isUnPositiveNumber('-3', {isStrict: true}) === false`, function() {
    expect(isUnPositiveNumber('-3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isUnPositiveNumber(0) === true`, function() {
    expect(isUnPositiveNumber(0)).to.be.equal(true);
  });

  // '0'
  it(`isUnPositiveNumber('0') === true`, function() {
    expect(isUnPositiveNumber('0')).to.be.equal(true);
  });

  // 3
  it(`isUnPositiveNumber(3) === false`, function() {
    expect(isUnPositiveNumber(3)).to.be.equal(false);
  });

  // '3'
  it(`isUnPositiveNumber('3') === false`, function() {
    expect(isUnPositiveNumber('3')).to.be.equal(false);
  });
});
