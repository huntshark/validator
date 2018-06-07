
const expect = require('chai').expect;
const isNumeric = require('../src/isNumeric');

// 测试
describe('isNumeric 测试集合', function() {
  // 3
  it(`isNumeric(3) 等于 true`, function() {
    expect(isNumeric(3)).to.be.equal(true);
  });

  // '3'
  it(`isNumeric('3') 等于 true`, function() {
    expect(isNumeric('3')).to.be.equal(true);
  });

  // '3'
  it(`isNumeric('3', {isStrict: true}) 等于 false`, function() {
    expect(isNumeric('3', {isStrict: true})).to.be.equal(false);
  });

  // '3a'
  it(`isNumeric('3a') 等于 false`, function() {
    expect(isNumeric('3a')).to.be.equal(false);
  });

  // NaN
  it(`isNumeric(NaN) 等于 false`, function() {
    expect(isNumeric(NaN)).to.be.equal(false);
  });

  // Infinity
  it(`isNumeric(Infinity) 等于 false`, function() {
    expect(isNumeric(Number.POSITIVE_INFINITY)).to.be.equal(false);
  });

  // -Infinity
  it(`isNumeric(-Infinity) 等于 false`, function() {
    expect(isNumeric(Number.NEGATIVE_INFINITY)).to.be.equal(false);
  });

  // ''
  it(`isNumeric('') 等于 false`, function() {
    expect(isNumeric('')).to.be.equal(false);
  });

  // null
  it(`isNumeric(null) 等于 false`, function() {
    expect(isNumeric(null)).to.be.equal(false);
  });

  // undefined
  it(`isNumeric(undefined) 等于 false`, function() {
    expect(isNumeric(undefined)).to.be.equal(false);
  });

  // Number(3)
  it(`isNumeric(Number(3)) 等于 true`, function() {
    expect(isNumeric(Number(3))).to.be.equal(true);
  });

  // new Number(3)
  it(`isNumeric(new Number(3)) 等于 true`, function() {
    expect(isNumeric(new Number(3))).to.be.equal(true);
  });

  // {}
  it(`isNumeric({}) 等于 false`, function() {
    expect(isNumeric({})).to.be.equal(false);
  });

  // Object(3)
  it(`isNumeric(Object(3)) 等于 true`, function() {
    expect(isNumeric(Object(3))).to.be.equal(true);
  });

  // Object('3')
  it(`isNumeric(Object('3')) 等于 true`, function() {
    expect(isNumeric(Object('3'))).to.be.equal(true);
  });

  // Object('3')
  it(`isNumeric(Object('3'), {isStrict: true}) 等于 false`, function() {
    expect(isNumeric(Object('3'), {isStrict: true})).to.be.equal(false);
  });
});
