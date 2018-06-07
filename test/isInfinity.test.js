
const expect = require('chai').expect;
const isInfinity = require('../src/isInfinity');

// 测试
describe('isInfinity 测试集合', function() {
  // Infinity
  it(`isInfinity(Infinity) 等于 true`, function() {
    expect(isInfinity(Number.POSITIVE_INFINITY)).to.be.equal(true);
  });

  // Infinity
  it(`isInfinity(-Infinity) 等于 true`, function() {
    expect(isInfinity(Number.NEGATIVE_INFINITY)).to.be.equal(true);
  });

  // NaN
  it(`isInfinity(NaN) 等于 false`, function() {
    expect(isInfinity(NaN)).to.be.equal(false);
  });

  // null
  it(`isInfinity(null) 等于 false`, function() {
    expect(isInfinity(null)).to.be.equal(false);
  });

  // undefined
  it(`isInfinity(undefined) 等于 false`, function() {
    expect(isInfinity(undefined)).to.be.equal(false);
  });

  // 3
  it(`isInfinity(3) 等于 false`, function() {
    expect(isInfinity(3)).to.be.equal(false);
  });

  // ''
  it(`isInfinity('') 等于 false`, function() {
    expect(isInfinity('')).to.be.equal(false);
  });
});
