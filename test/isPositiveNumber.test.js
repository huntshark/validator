
const expect = require('chai').expect;
const isPositiveNumber = require('../src/isPositiveNumber');

// 测试
describe('isPositiveNumber 测试集合', function() {
  // 3
  it(`isPositiveNumber(3) 等于 true`, function() {
    expect(isPositiveNumber(3)).to.be.equal(true);
  });

  // '3'
  it(`isPositiveNumber('3') 等于 true`, function() {
    expect(isPositiveNumber('3')).to.be.equal(true);
  });

  // '3'
  it(`isPositiveNumber('3', {isStrict: true}) 等于 false`, function() {
    expect(isPositiveNumber('3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isPositiveNumber(0) 等于 false`, function() {
    expect(isPositiveNumber(0)).to.be.equal(false);
  });

  // '0'
  it(`isPositiveNumber('0') 等于 false`, function() {
    expect(isPositiveNumber('0')).to.be.equal(false);
  });

  // -3
  it(`isPositiveNumber(-3) 等于 false`, function() {
    expect(isPositiveNumber(-3)).to.be.equal(false);
  });

  // '-3'
  it(`isPositiveNumber('-3') 等于 false`, function() {
    expect(isPositiveNumber('-3')).to.be.equal(false);
  });
});
