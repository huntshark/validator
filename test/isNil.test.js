
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

  // // true
  // it('isNil(true) 等于 false', function() {
  //   expect(isNil(true)).to.be.equal(false);
  // });

  // // false
  // it('isNil(false) 等于 false', function() {
  //   expect(isNil(false)).to.be.equal(false);
  // });

  // // 0
  // it('isNil(0) 等于 false', function() {
  //   expect(isNil(0)).to.be.equal(false);
  // });

  // // ''
  // it('isNil(\'\') 等于 false', function() {
  //   expect(isNil('')).to.be.equal(false);
  // });

  // // []
  // it('isNil([]) 等于 false', function() {
  //   expect(isNil([])).to.be.equal(false);
  // });

  // // {}
  // it('isNil({}) 等于 false', function() {
  //   expect(isNil({})).to.be.equal(false);
  // });
});
