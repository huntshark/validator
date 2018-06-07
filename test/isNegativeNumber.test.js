
const expect = require('chai').expect;
const isNegativeNumber = require('../src/isNegativeNumber');

// 测试
describe('isNegativeNumber 测试集合', function() {
  // -3
  it(`isNegativeNumber(-3) 等于 true`, function() {
    expect(isNegativeNumber(-3)).to.be.equal(true);
  });

  // '-3'
  it(`isNegativeNumber('-3') 等于 true`, function() {
    expect(isNegativeNumber('-3')).to.be.equal(true);
  });

  // '-3'
  it(`isNegativeNumber('-3', {isStrict: true}) 等于 false`, function() {
    expect(isNegativeNumber('-3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isNegativeNumber(0) 等于 false`, function() {
    expect(isNegativeNumber(0)).to.be.equal(false);
  });

  // '0'
  it(`isNegativeNumber('0') 等于 false`, function() {
    expect(isNegativeNumber('0')).to.be.equal(false);
  });

  // 3
  it(`isNegativeNumber(3) 等于 false`, function() {
    expect(isNegativeNumber(3)).to.be.equal(false);
  });

  // '3'
  it(`isNegativeNumber('3') 等于 false`, function() {
    expect(isNegativeNumber('3')).to.be.equal(false);
  });
});
