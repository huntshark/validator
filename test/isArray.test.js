
const expect = require('chai').expect;
const isArray = require('../src/isArray');

// 测试
describe('isArray 测试集合', function() {
  // []
  it(`isArray([]) 等于 true`, function() {
    expect(isArray([])).to.be.equal(true);
  });

  // {}
  it(`isArray({}) 等于 false`, function() {
    expect(isArray({})).to.be.equal(false);
  });

  // function
  it(`isArray(parseInt) 等于 false`, function() {
    expect(isArray(parseInt)).to.be.equal(false);
  });

  // new Date
  it(`isArray(new Date()) 等于 false`, function() {
    expect(isArray(new Date())).to.be.equal(false);
  });

  // null
  it(`isArray(null) 等于 false`, function() {
    expect(isArray(null)).to.be.equal(false);
  });

  // Object({})
  it(`isArray(Object({})) 等于 false`, function() {
    expect(isArray(Object({}))).to.be.equal(false);
  });

  // Object([])
  it(`isArray(Object([])) 等于 true`, function() {
    expect(isArray(Object([]))).to.be.equal(true);
  });

  // new Object([])
  it(`isArray(new Object([])) 等于 true`, function() {
    expect(isArray(new Object([]))).to.be.equal(true);
  });
});
