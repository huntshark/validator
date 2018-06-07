
const expect = require('chai').expect;
const isUndefined = require('../src/isUndefined');

// 测试
describe('isUndefined 测试集合', function() {
  // undefined
  it(`isUndefined(undefined) 等于 true`, function() {
    expect(isUndefined(undefined)).to.be.equal(true);
  });

  // null
  it(`isUndefined(null) 等于 false`, function() {
    expect(isUndefined(null)).to.be.equal(false);
  });

  // 0
  it(`isUndefined(0) 等于 false`, function() {
    expect(isUndefined(0)).to.be.equal(false);
  });

  // ''
  it(`isUndefined('') 等于 false`, function() {
    expect(isUndefined('')).to.be.equal(false);
  });

  // 'undefined'
  it(`isUndefined('undefined') 等于 false`, function() {
    expect(isUndefined('undefined')).to.be.equal(false);
  });
});
