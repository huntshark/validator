
const expect = require('chai').expect;
const isNumber = require('../src/isNumber');

// 测试
describe('isNumber 测试集合', function() {
  // 3
  it(`isNumber(3) 等于 true`, function() {
    expect(isNumber(3)).to.be.equal(true);
  });

  // '3'
  it(`isNumber('3') 等于 false`, function() {
    expect(isNumber('3')).to.be.equal(false);
  });

  // NaN
  it(`isNumber(NaN) 等于 true`, function() {
    expect(isNumber(NaN)).to.be.equal(true);
  });

  // Infinity
  it(`isNumber(Infinity) 等于 true`, function() {
    expect(isNumber(Number.POSITIVE_INFINITY)).to.be.equal(true);
  });

  // -Infinity
  it(`isNumber(-Infinity) 等于 true`, function() {
    expect(isNumber(Number.NEGATIVE_INFINITY)).to.be.equal(true);
  });

  // ''
  it(`isNumber('') 等于 false`, function() {
    expect(isNumber('')).to.be.equal(false);
  });

  // true
  it(`isNumber(true) 等于 false`, function() {
    expect(isNumber(true)).to.be.equal(false);
  });

  // null
  it(`isNumber(null) 等于 false`, function() {
    expect(isNumber(null)).to.be.equal(false);
  });

  // undefined
  it(`isNumber(undefined) 等于 false`, function() {
    expect(isNumber(undefined)).to.be.equal(false);
  });

  // Number(3)
  it(`isNumber(Number(3)) 等于 true`, function() {
    expect(isNumber(Number(3))).to.be.equal(true);
  });

  // new Number(3)
  it(`isNumber(new Number(3)) 等于 true`, function() {
    expect(isNumber(new Number(3))).to.be.equal(true);
  });

  // {}
  it(`isNumber({}) 等于 false`, function() {
    expect(isNumber({})).to.be.equal(false);
  });

  // Object(3)
  it(`isNumber(Object(3)) 等于 true`, function() {
    expect(isNumber(Object(3))).to.be.equal(true);
  });

  // Object('3')
  it(`isNumber(Object('3')) 等于 false`, function() {
    expect(isNumber(Object('3'))).to.be.equal(false);
  });
});
