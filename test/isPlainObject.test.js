
const expect = require('chai').expect;
const isPlainObject = require('../src/isPlainObject');

// 测试
describe('isPlainObject 测试集合', function() {
  // {}
  it(`isPlainObject({}) 等于 true`, function() {
    expect(isPlainObject({})).to.be.equal(true);
  });

  // []
  it(`isPlainObject([]) 等于 false`, function() {
    expect(isPlainObject([])).to.be.equal(false);
  });

  // function
  it(`isPlainObject(parseInt) 等于 false`, function() {
    expect(isPlainObject(parseInt)).to.be.equal(false);
  });

  // new Date
  it(`isPlainObject(new Date()) 等于 false`, function() {
    expect(isPlainObject(new Date())).to.be.equal(false);
  });

  // Object({})
  it(`isPlainObject(Object({})) 等于 true`, function() {
    expect(isPlainObject(Object({}))).to.be.equal(true);
  });

  // Object('3')
  it(`isPlainObject(Object('3')) 等于 false`, function() {
    expect(isPlainObject(Object('3'))).to.be.equal(false);
  });

  // new Object('3')
  it(`isPlainObject(new Object('3')) 等于 false`, function() {
    expect(isPlainObject(new Object('3'))).to.be.equal(false);
  });

  // null
  it(`isPlainObject(null) 等于 false`, function() {
    expect(isPlainObject(null)).to.be.equal(false);
  });

  // Object.create(null)
  it(`isPlainObject(Object.create(null)) 等于 true`, function() {
    expect(isPlainObject(Object.create(null))).to.be.equal(true);
  });
});
