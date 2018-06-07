
const expect = require('chai').expect;
const _isNaN = require('../src/isNaN');

// 测试
describe('isNaN 测试集合', function() {
  // NaN
  it(`isNaN(NaN) 等于 true`, function() {
    expect(_isNaN(NaN)).to.be.equal(true);
  });

  // null
  it(`isNaN(null) 等于 false`, function() {
    expect(_isNaN(null)).to.be.equal(false);
  });

  // undefined
  it(`isNaN(undefined) 等于 false`, function() {
    expect(_isNaN(undefined)).to.be.equal(false);
  });

  // ''
  it(`isNaN('') 等于 false`, function() {
    expect(_isNaN('')).to.be.equal(false);
  });

  // 3
  it(`isNaN(3) 等于 false`, function() {
    expect(_isNaN('3')).to.be.equal(false);
  });

  // {}
  it(`isNaN({}) 等于 false`, function() {
    expect(_isNaN({})).to.be.equal(false);
  });

  // Number('foo')
  it(`isNaN(Number('foo')) 等于 true`, function() {
    expect(_isNaN(Number('foo'))).to.be.equal(true);
  });

  // Number('3')
  it(`isNaN(Number('3')) 等于 false`, function() {
    expect(_isNaN(Number('3'))).to.be.equal(false);
  });
});
