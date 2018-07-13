
const expect = require('chai').expect;
const isUnZero = require('../src/isUnZero');

// Test
describe('isZero test', function() {
  // 3
  it(`isUnZero(3) === true`, function() {
    expect(isUnZero(3)).to.be.equal(true);
  });

  // '3'
  it(`isUnZero('3') === true`, function() {
    expect(isUnZero('3')).to.be.equal(true);
  });

  // '3'
  it(`isUnZero('3', {isStrict: true}) === false`, function() {
    expect(isUnZero('3', {isStrict: true})).to.be.equal(false);
  });

  it(`isUnZero(0) === false`, function() {
    expect(isUnZero(0)).to.be.equal(false);
  });

  it(`isUnZero('0') === false`, function() {
    expect(isUnZero('0')).to.be.equal(false);
  });

  it(`isUnZero('0', {isStrict: true}) === false`, function() {
    expect(isUnZero('0', {isStrict: true})).to.be.equal(false);
  });

  // NaN
  it(`isUnZero(NaN) === false`, function() {
    expect(isUnZero(NaN)).to.be.equal(false);
  });

  // Infinity
  it(`isUnZero(Infinity) === false`, function() {
    expect(isUnZero(Number.POSITIVE_INFINITY)).to.be.equal(false);
  });

  // -Infinity
  it(`isUnZero(-Infinity) === false`, function() {
    expect(isUnZero(Number.NEGATIVE_INFINITY)).to.be.equal(false);
  });

  // ''
  it(`isUnZero('') === false`, function() {
    expect(isUnZero('')).to.be.equal(false);
  });

  // null
  it(`isUnZero(null) === false`, function() {
    expect(isUnZero(null)).to.be.equal(false);
  });

  // undefined
  it(`isUnZero(undefined) === false`, function() {
    expect(isUnZero(undefined)).to.be.equal(false);
  });

  // Number(0)
  it(`isUnZero(Number(0)) === false`, function() {
    expect(isUnZero(Number(0))).to.be.equal(false);
  });

  // Number(3)
  it(`isUnZero(Number(3)) === true`, function() {
    expect(isUnZero(Number(3))).to.be.equal(true);
  });

  // new Number(0)
  it(`isUnZero(new Number(0)) === false`, function() {
    expect(isUnZero(new Number(0))).to.be.equal(false);
  });

  // new Number('0')
  it(`isUnZero(new Number(0)) === false`, function() {
    expect(isUnZero(new Number('0'))).to.be.equal(false);
  });

  // new Number(3)
  it(`isUnZero(new Number(3)) === true`, function() {
    expect(isUnZero(new Number(3))).to.be.equal(true);
  });

  // Object(3)
  it(`isUnZero(Object(3)) === true`, function() {
    expect(isUnZero(Object(3))).to.be.equal(true);
  });

  // Object('3')
  it(`isUnZero(Object('3')) === true`, function() {
    expect(isUnZero(Object('3'))).to.be.equal(true);
  });

  // Object('3')
  it(`isUnZero(Object('3'), {isStrict: true}) === false`, function() {
    expect(isUnZero(Object('3'), {isStrict: true})).to.be.equal(false);
  });
});
