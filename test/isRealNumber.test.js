
const expect = require('chai').expect;
const isRealNumber = require('../src/isRealNumber');

// Test
describe('isRealNumber test', function() {
  // 3
  it(`isRealNumber(3) === true`, function() {
    expect(isRealNumber(3)).to.be.equal(true);
  });

  // '3'
  it(`isRealNumber('3') === true`, function() {
    expect(isRealNumber('3')).to.be.equal(true);
  });

  // '3'
  it(`isRealNumber('3', {isStrict: true}) === false`, function() {
    expect(isRealNumber('3', {isStrict: true})).to.be.equal(false);
  });

  // '3a'
  it(`isRealNumber('3a') === false`, function() {
    expect(isRealNumber('3a')).to.be.equal(false);
  });

  // NaN
  it(`isRealNumber(NaN) === false`, function() {
    expect(isRealNumber(NaN)).to.be.equal(false);
  });

  // Infinity
  it(`isRealNumber(Infinity) === true`, function() {
    expect(isRealNumber(Number.POSITIVE_INFINITY)).to.be.equal(true);
  });

  // -Infinity
  it(`isRealNumber(-Infinity) === true`, function() {
    expect(isRealNumber(Number.NEGATIVE_INFINITY)).to.be.equal(true);
  });

  // ''
  it(`isRealNumber('') === false`, function() {
    expect(isRealNumber('')).to.be.equal(false);
  });

  // null
  it(`isRealNumber(null) === false`, function() {
    expect(isRealNumber(null)).to.be.equal(false);
  });

  // undefined
  it(`isRealNumber(undefined) === false`, function() {
    expect(isRealNumber(undefined)).to.be.equal(false);
  });

  // Number(3)
  it(`isRealNumber(Number(3)) === true`, function() {
    expect(isRealNumber(Number(3))).to.be.equal(true);
  });

  // new Number(3)
  it(`isRealNumber(new Number(3)) === true`, function() {
    expect(isRealNumber(new Number(3))).to.be.equal(true);
  });

  // {}
  it(`isRealNumber({}) === false`, function() {
    expect(isRealNumber({})).to.be.equal(false);
  });

  // Object(3)
  it(`isRealNumber(Object(3)) === true`, function() {
    expect(isRealNumber(Object(3))).to.be.equal(true);
  });

  // Object('3')
  it(`isRealNumber(Object('3')) === true`, function() {
    expect(isRealNumber(Object('3'))).to.be.equal(true);
  });

  // Object('3')
  it(`isRealNumber(Object('3'), {isStrict: true}) === false`, function() {
    expect(isRealNumber(Object('3'), {isStrict: true})).to.be.equal(false);
  });
});
