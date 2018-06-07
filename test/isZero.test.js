
const expect = require('chai').expect;
const isZero = require('../src/isZero');

// 测试
describe('isZero 测试集合', function() {
  // 3
  it(`isZero(3) 等于 false`, function() {
    expect(isZero(3)).to.be.equal(false);
  });

  it(`isZero(0) 等于 true`, function() {
    expect(isZero(0)).to.be.equal(true);
  });

  it(`isZero('0') 等于 true`, function() {
    expect(isZero('0')).to.be.equal(true);
  });

  it(`isZero('0', {isStrict: true}) 等于 false`, function() {
    expect(isZero('0', {isStrict: true})).to.be.equal(false);
  });

  // NaN
  it(`isZero(NaN) 等于 false`, function() {
    expect(isZero(NaN)).to.be.equal(false);
  });

  // Infinity
  it(`isZero(Infinity) 等于 false`, function() {
    expect(isZero(Number.POSITIVE_INFINITY)).to.be.equal(false);
  });

  // -Infinity
  it(`isZero(-Infinity) 等于 false`, function() {
    expect(isZero(Number.NEGATIVE_INFINITY)).to.be.equal(false);
  });

  // ''
  it(`isZero('') 等于 false`, function() {
    expect(isZero('')).to.be.equal(false);
  });

  // null
  it(`isZero(null) 等于 false`, function() {
    expect(isZero(null)).to.be.equal(false);
  });

  // undefined
  it(`isZero(undefined) 等于 false`, function() {
    expect(isZero(undefined)).to.be.equal(false);
  });

  // Number(0)
  it(`isZero(Number(0)) 等于 true`, function() {
    expect(isZero(Number(0))).to.be.equal(true);
  });

  // new Number(0)
  it(`isZero(new Number(0)) 等于 true`, function() {
    expect(isZero(new Number(0))).to.be.equal(true);
  });

  // new Number('0')
  it(`isZero(new Number(0)) 等于 true`, function() {
    expect(isZero(new Number('0'))).to.be.equal(true);
  });

  // Object(0)
  it(`isZero(Object(0)) 等于 true`, function() {
    expect(isZero(Object(0))).to.be.equal(true);
  });

  // Object('0')
  it(`isZero(Object('0')) 等于 true`, function() {
    expect(isZero(Object('0'))).to.be.equal(true);
  });

  // Object('0')
  it(`isZero(Object('0'), {isStrict: true}) 等于 false`, function() {
    expect(isZero(Object('0'), {isStrict: true})).to.be.equal(false);
  });
});
