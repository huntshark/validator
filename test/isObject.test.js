
const expect = require('chai').expect;
const isObject = require('../src/isObject');

// 测试
describe('isObject 测试集合', function() {
  // {}
  it(`isObject({}) 等于 true`, function() {
    expect(isObject({})).to.be.equal(true);
  });

  // []
  it(`isObject([]) 等于 false`, function() {
    expect(isObject([])).to.be.equal(false);
  });

  // function
  it(`isObject(parseInt) 等于 false`, function() {
    expect(isObject(parseInt)).to.be.equal(false);
  });

  // new Date
  it(`isObject(new Date()) 等于 false`, function() {
    expect(isObject(new Date())).to.be.equal(false);
  });

  // Object({})
  it(`isObject(Object({})) 等于 true`, function() {
    expect(isObject(Object({}))).to.be.equal(true);
  });

  // Object('3')
  it(`isObject(Object('3')) 等于 false`, function() {
    expect(isObject(Object('3'))).to.be.equal(false);
  });

  // new Object('3')
  it(`isObject(new Object('3')) 等于 false`, function() {
    expect(isObject(new Object('3'))).to.be.equal(false);
  });

  // null
  it(`isObject(null) 等于 false`, function() {
    expect(isObject(null)).to.be.equal(false);
  });

  // Object.create(null)
  it(`isObject(Object.create(null)) 等于 true`, function() {
    expect(isObject(Object.create(null))).to.be.equal(true);
  });

  // new Class()
  function Class() {};
  it(`isObject(new Class()) 等于 true`, function() {
    expect(isObject(new Class())).to.be.equal(true);
  });
});
