
const expect = require('chai').expect;
const isRealNumber = require('../src/isRealNumber');

// 测试
describe('isRealNumber 测试集合', function() {
  // 3
  it(`isRealNumber(3) 等于 true`, function() {
    expect(isRealNumber(3)).to.be.equal(true);
  });

  // '3'
  it(`isRealNumber('3') 等于 true`, function() {
    expect(isRealNumber('3')).to.be.equal(true);
  });

  // '3'
  it(`isRealNumber('3', {isStrict: true}) 等于 false`, function() {
    expect(isRealNumber('3', {isStrict: true})).to.be.equal(false);
  });

  // '3a'
  it(`isRealNumber('3a') 等于 false`, function() {
    expect(isRealNumber('3a')).to.be.equal(false);
  });

  // NaN
  it(`isRealNumber(NaN) 等于 false`, function() {
    expect(isRealNumber(NaN)).to.be.equal(false);
  });

  // Infinity
  it(`isRealNumber(Infinity) 等于 true`, function() {
    expect(isRealNumber(Number.POSITIVE_INFINITY)).to.be.equal(true);
  });

  // -Infinity
  it(`isRealNumber(-Infinity) 等于 true`, function() {
    expect(isRealNumber(Number.NEGATIVE_INFINITY)).to.be.equal(true);
  });

  // ''
  it(`isRealNumber('') 等于 false`, function() {
    expect(isRealNumber('')).to.be.equal(false);
  });

  // null
  it(`isRealNumber(null) 等于 false`, function() {
    expect(isRealNumber(null)).to.be.equal(false);
  });

  // undefined
  it(`isRealNumber(undefined) 等于 false`, function() {
    expect(isRealNumber(undefined)).to.be.equal(false);
  });

  // Number(3)
  it(`isRealNumber(Number(3)) 等于 true`, function() {
    expect(isRealNumber(Number(3))).to.be.equal(true);
  });

  // new Number(3)
  it(`isRealNumber(new Number(3)) 等于 true`, function() {
    expect(isRealNumber(new Number(3))).to.be.equal(true);
  });

  // {}
  it(`isRealNumber({}) 等于 false`, function() {
    expect(isRealNumber({})).to.be.equal(false);
  });

  // Object(3)
  it(`isRealNumber(Object(3)) 等于 true`, function() {
    expect(isRealNumber(Object(3))).to.be.equal(true);
  });

  // Object('3')
  it(`isRealNumber(Object('3')) 等于 true`, function() {
    expect(isRealNumber(Object('3'))).to.be.equal(true);
  });

  // Object('3')
  it(`isRealNumber(Object('3'), {isStrict: true}) 等于 false`, function() {
    expect(isRealNumber(Object('3'), {isStrict: true})).to.be.equal(false);
  });
});
