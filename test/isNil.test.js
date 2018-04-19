
const expect = require('chai').expect;
const isNil = require('../src/isNil');

// 测试
describe('isNil的测试集合', function() {
  // null
  it('isNil(null) 等于 true', function() {
    expect(isNil(null)).to.be.equal(true);
  });

  // undefined
  it('isNil(undefined) 等于 true', function() {
    expect(isNil(undefined)).to.be.equal(true);
  });
});
