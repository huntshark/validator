
const expect = require('chai').expect;
const isFunction = require('../src/isFunction');

// 测试
describe('isFunction 测试集合', function() {
  // []
  it(`isFunction([]) 等于 false`, function() {
    expect(isFunction([])).to.be.equal(false);
  });

  // {}
  it(`isFunction({}) 等于 false`, function() {
    expect(isFunction({})).to.be.equal(false);
  });

  // function
  it(`isFunction(parseInt) 等于 true`, function() {
    expect(isFunction(parseInt)).to.be.equal(true);
  });

  // new Date
  it(`isFunction(new Date()) 等于 false`, function() {
    expect(isFunction(new Date())).to.be.equal(false);
  });

  // null
  it(`isFunction(null) 等于 false`, function() {
    expect(isFunction(null)).to.be.equal(false);
  });
});
