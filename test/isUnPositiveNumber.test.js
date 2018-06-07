
const expect = require('chai').expect;
const isUnPositiveNumber = require('../src/isUnPositiveNumber');

// 测试
describe('isUnPositiveNumber 测试集合', function() {
  // -3
  it(`isUnPositiveNumber(-3) 等于 true`, function() {
    expect(isUnPositiveNumber(-3)).to.be.equal(true);
  });

  // '-3'
  it(`isUnPositiveNumber('-3') 等于 true`, function() {
    expect(isUnPositiveNumber('-3')).to.be.equal(true);
  });

  // '-3'
  it(`isUnPositiveNumber('-3', {isStrict: true}) 等于 false`, function() {
    expect(isUnPositiveNumber('-3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isUnPositiveNumber(0) 等于 true`, function() {
    expect(isUnPositiveNumber(0)).to.be.equal(true);
  });

  // '0'
  it(`isUnPositiveNumber('0') 等于 true`, function() {
    expect(isUnPositiveNumber('0')).to.be.equal(true);
  });

  // 3
  it(`isUnPositiveNumber(3) 等于 false`, function() {
    expect(isUnPositiveNumber(3)).to.be.equal(false);
  });

  // '3'
  it(`isUnPositiveNumber('3') 等于 false`, function() {
    expect(isUnPositiveNumber('3')).to.be.equal(false);
  });
});
