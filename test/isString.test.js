
const expect = require('chai').expect;
const isString = require('../src/isString');

// 测试
describe('isString的测试集合', function() {
  // ''
  it('isString(\'\') 等于 true', function() {
    expect(isString('')).to.be.equal(true);
  });

  // '   '
  it('isString(\'   \') 等于 true', function() {
    expect(isString('   ')).to.be.equal(true);
  });

  // '3'
  it('isString(\'3\') 等于 true', function() {
    expect(isString('3')).to.be.equal(true);
  });

  // 3
  it('isString(3) 等于 false', function() {
    expect(isString(3)).to.be.equal(false);
  });

  // null
  it('isString(null) 等于 false', function() {
    expect(isString(null)).to.be.equal(false);
  });

  // undefined
  it('isString(undefined) 等于 false', function() {
    expect(isString(undefined)).to.be.equal(false);
  });

  // true
  it('isString(true) 等于 false', function() {
    expect(isString(true)).to.be.equal(false);
  });

  // []
  it('isString([]) 等于 false', function() {
    expect(isString([])).to.be.equal(false);
  });

  // {}
  it('isString({}) 等于 false', function() {
    expect(isString({})).to.be.equal(false);
  });

  // new String('3')
  it('isString(new String(\'3\')) 等于 true', function() {
    expect(isString(new String('3'))).to.be.equal(true);
  });

  // String(3)
  it('isString(String(3)) 等于 true', function() {
    expect(isString(String(3))).to.be.equal(true);
  });

  // String({})
  it('isString(String({})) 等于 true', function() {
    expect(isString(String({}))).to.be.equal(true);
  });

  // function
  it('isString(toString) 等于 false', function() {
    expect(isString(Object.prototype.toString)).to.be.equal(false);
  });
});
