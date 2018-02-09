
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

  // // true
  // it('isUndefined(true) 等于 false', function() {
  //   expect(isUndefined(true)).to.be.equal(false);
  // });

  // // false
  // it('isUndefined(false) 等于 false', function() {
  //   expect(isUndefined(false)).to.be.equal(false);
  // });

  // // 0
  // it('isUndefined(0) 等于 false', function() {
  //   expect(isUndefined(0)).to.be.equal(false);
  // });

  // // ''
  // it('isUndefined(\'\') 等于 false', function() {
  //   expect(isUndefined('')).to.be.equal(false);
  // });

  // // []
  // it('isUndefined([]) 等于 false', function() {
  //   expect(isUndefined([])).to.be.equal(false);
  // });

  // // {}
  // it('isUndefined({}) 等于 false', function() {
  //   expect(isUndefined({})).to.be.equal(false);
  // });

  // // Object(null)
  // it('isUndefined(Object(null)) 等于 false', function() {
  //   expect(isUndefined(Object(null))).to.be.equal(false);
  // });
});
