
const expect = require('chai').expect;
const isUnZero = require('../src/isUnZero');

// 测试
describe('isZero 测试集合', function() {
  // 3
  it(`isUnZero(3) 等于 true`, function() {
    expect(isUnZero(3)).to.be.equal(true);
  });

  // '3'
  it(`isUnZero('3') 等于 true`, function() {
    expect(isUnZero('3')).to.be.equal(true);
  });

  // '3'
  it(`isUnZero('3', {isStrict: true}) 等于 false`, function() {
    expect(isUnZero('3', {isStrict: true})).to.be.equal(false);
  });

  it(`isUnZero(0) 等于 false`, function() {
    expect(isUnZero(0)).to.be.equal(false);
  });

  it(`isUnZero('0') 等于 false`, function() {
    expect(isUnZero('0')).to.be.equal(false);
  });

  it(`isUnZero('0', {isStrict: true}) 等于 false`, function() {
    expect(isUnZero('0', {isStrict: true})).to.be.equal(false);
  });

  // NaN
  it(`isUnZero(NaN) 等于 false`, function() {
    expect(isUnZero(NaN)).to.be.equal(false);
  });

  // Infinity
  it(`isUnZero(Infinity) 等于 false`, function() {
    expect(isUnZero(Number.POSITIVE_INFINITY)).to.be.equal(false);
  });

  // -Infinity
  it(`isUnZero(-Infinity) 等于 false`, function() {
    expect(isUnZero(Number.NEGATIVE_INFINITY)).to.be.equal(false);
  });

  // ''
  it(`isUnZero('') 等于 false`, function() {
    expect(isUnZero('')).to.be.equal(false);
  });

  // null
  it(`isUnZero(null) 等于 false`, function() {
    expect(isUnZero(null)).to.be.equal(false);
  });

  // undefined
  it(`isUnZero(undefined) 等于 false`, function() {
    expect(isUnZero(undefined)).to.be.equal(false);
  });

  // Number(0)
  it(`isUnZero(Number(0)) 等于 false`, function() {
    expect(isUnZero(Number(0))).to.be.equal(false);
  });

  // Number(3)
  it(`isUnZero(Number(3)) 等于 true`, function() {
    expect(isUnZero(Number(3))).to.be.equal(true);
  });

  // new Number(0)
  it(`isUnZero(new Number(0)) 等于 false`, function() {
    expect(isUnZero(new Number(0))).to.be.equal(false);
  });

  // new Number('0')
  it(`isUnZero(new Number(0)) 等于 false`, function() {
    expect(isUnZero(new Number('0'))).to.be.equal(false);
  });

  // new Number(3)
  it(`isUnZero(new Number(3)) 等于 true`, function() {
    expect(isUnZero(new Number(3))).to.be.equal(true);
  });

  // Object(3)
  it(`isUnZero(Object(3)) 等于 true`, function() {
    expect(isUnZero(Object(3))).to.be.equal(true);
  });

  // Object('3')
  it(`isUnZero(Object('3')) 等于 true`, function() {
    expect(isUnZero(Object('3'))).to.be.equal(true);
  });

  // Object('3')
  it(`isUnZero(Object('3'), {isStrict: true}) 等于 false`, function() {
    expect(isUnZero(Object('3'), {isStrict: true})).to.be.equal(false);
  });
});
