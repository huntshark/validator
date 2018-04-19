
const expect = require('chai').expect;
const isNull = require('../src/isNull');

// 测试
describe('isNull的测试集合', function() {
  // null
  it('isNull(null) 等于 true', function() {
    expect(isNull(null)).to.be.equal(true);
  });

  // undefined
  it('isNull(undefined) 等于 false', function() {
    expect(isNull(undefined)).to.be.equal(false);
  });
});
