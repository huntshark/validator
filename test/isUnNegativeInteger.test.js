
const expect = require('chai').expect;
const isUnNegativeInteger = require('../src/isUnNegativeInteger');

// 测试
describe('isUnNegativeInteger 测试集合', function() {
  // 3
  it(`isUnNegativeInteger(3) 等于 true`, function() {
    expect(isUnNegativeInteger(3)).to.be.equal(true);
  });

  // '3'
  it(`isUnNegativeInteger('3') 等于 true`, function() {
    expect(isUnNegativeInteger('3')).to.be.equal(true);
  });

  // 3.3
  it(`isUnNegativeInteger(3.3) 等于 false`, function() {
    expect(isUnNegativeInteger(3.3)).to.be.equal(false);
  });

  // '3.3'
  it(`isUnNegativeInteger('3.3') 等于 false`, function() {
    expect(isUnNegativeInteger('3.3')).to.be.equal(false);
  });

  // -3
  it(`isUnNegativeInteger(-3) 等于 false`, function() {
    expect(isUnNegativeInteger(-3)).to.be.equal(false);
  });

  // '-3'
  it(`isUnNegativeInteger('-3') 等于 false`, function() {
    expect(isUnNegativeInteger('-3')).to.be.equal(false);
  });

  // -3.3
  it(`isUnNegativeInteger(-3.3) 等于 false`, function() {
    expect(isUnNegativeInteger(-3.3)).to.be.equal(false);
  });

  // '-3.3'
  it(`isUnNegativeInteger('-3.3') 等于 false`, function() {
    expect(isUnNegativeInteger('-3.3')).to.be.equal(false);
  });

  // '3'
  it(`isUnNegativeInteger('3', {isStrict: true}) 等于 false`, function() {
    expect(isUnNegativeInteger('3', {isStrict: true})).to.be.equal(false);
  });

  // '3.3'
  it(`isUnNegativeInteger('3.3', {isStrict: true}) 等于 false`, function() {
    expect(isUnNegativeInteger('3.3', {isStrict: true})).to.be.equal(false);
  });

  // '-3'
  it(`isUnNegativeInteger('-3', {isStrict: true}) 等于 false`, function() {
    expect(isUnNegativeInteger('-3', {isStrict: true})).to.be.equal(false);
  });

  // '-3.3'
  it(`isUnNegativeInteger('-3.3', {isStrict: true}) 等于 false`, function() {
    expect(isUnNegativeInteger('-3.3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isUnNegativeInteger(0) 等于 true`, function() {
    expect(isUnNegativeInteger(0)).to.be.equal(true);
  });

  // '0'
  it(`isUnNegativeInteger('0') 等于 true`, function() {
    expect(isUnNegativeInteger('0')).to.be.equal(true);
  });
});
