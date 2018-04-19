
const expect = require('chai').expect;
const isUndefined = require('../src/isUndefined');

// 测试
describe('isUndefined的测试集合', function() {
  // undefined
  it('isUndefined(undefined) 等于 true', function() {
    expect(isUndefined(undefined)).to.be.equal(true);
  });

  // null
  it('isUndefined(null) 等于 false', function() {
    expect(isUndefined(null)).to.be.equal(false);
  });
});
