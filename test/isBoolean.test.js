
const expect = require('chai').expect;
const isBoolean = require('../src/isBoolean');

// 测试
describe('isBoolean的测试集合', function() {
  // true
  it('isBoolean(true) 等于 true', function() {
    expect(isBoolean(true)).to.be.equal(true);
  });

  // false
  it('isBoolean(false) 等于 true', function() {
    expect(isBoolean(false)).to.be.equal(true);
  });

  // Boolean({})
  it('isBoolean(Boolean({})) 等于 true', function() {
    expect(isBoolean(Boolean({}))).to.be.equal(true);
  });

  // new Boolean({})
  it('isBoolean(new Boolean({})) 等于 true', function() {
    expect(isBoolean(new Boolean({}))).to.be.equal(true);
  });

  // null
  it('isBoolean(null) 等于 false', function() {
    expect(isBoolean(null)).to.be.equal(false);
  });

  // undefined
  it('isBoolean(undefined) 等于 false', function() {
    expect(isBoolean(undefined)).to.be.equal(false);
  });

  // 0
  it('isBoolean(0) 等于 false', function() {
    expect(isBoolean(0)).to.be.equal(false);
  });

  // ''
  it('isBoolean(\'\') 等于 false', function() {
    expect(isBoolean('')).to.be.equal(false);
  });

  // []
  it('isBoolean([]) 等于 false', function() {
    expect(isBoolean([])).to.be.equal(false);
  });

  // {}
  it('isBoolean({}) 等于 false', function() {
    expect(isBoolean({})).to.be.equal(false);
  });
});
