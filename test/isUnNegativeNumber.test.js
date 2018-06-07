
const expect = require('chai').expect;
const isUnNegativeNumber = require('../src/isUnNegativeNumber');

// 测试
describe('isUnNegativeNumber 测试集合', function() {
  // 3
  it(`isUnNegativeNumber(3) 等于 true`, function() {
    expect(isUnNegativeNumber(3)).to.be.equal(true);
  });

  // '3'
  it(`isUnNegativeNumber('3') 等于 true`, function() {
    expect(isUnNegativeNumber('3')).to.be.equal(true);
  });

  // '3'
  it(`isUnNegativeNumber('3', {isStrict: true}) 等于 false`, function() {
    expect(isUnNegativeNumber('3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isUnNegativeNumber(0) 等于 false`, function() {
    expect(isUnNegativeNumber(0)).to.be.equal(true);
  });

  // '0'
  it(`isUnNegativeNumber('0') 等于 false`, function() {
    expect(isUnNegativeNumber('0')).to.be.equal(true);
  });

  // -3
  it(`isUnNegativeNumber(-3) 等于 false`, function() {
    expect(isUnNegativeNumber(-3)).to.be.equal(false);
  });

  // '-3'
  it(`isUnNegativeNumber('-3') 等于 false`, function() {
    expect(isUnNegativeNumber('-3')).to.be.equal(false);
  });
});
