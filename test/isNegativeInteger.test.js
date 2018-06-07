
const expect = require('chai').expect;
const isNegativeInteger = require('../src/isNegativeInteger');

// 测试
describe('isNegativeInteger 测试集合', function() {
  // 3
  it(`isNegativeInteger(3) 等于 false`, function() {
    expect(isNegativeInteger(3)).to.be.equal(false);
  });

  // '3'
  it(`isNegativeInteger('3') 等于 false`, function() {
    expect(isNegativeInteger('3')).to.be.equal(false);
  });

  // 3.3
  it(`isNegativeInteger(3.3) 等于 false`, function() {
    expect(isNegativeInteger(3.3)).to.be.equal(false);
  });

  // '3.3'
  it(`isNegativeInteger('3.3') 等于 false`, function() {
    expect(isNegativeInteger('3.3')).to.be.equal(false);
  });

  // -3
  it(`isNegativeInteger(-3) 等于 true`, function() {
    expect(isNegativeInteger(-3)).to.be.equal(true);
  });

  // '-3'
  it(`isNegativeInteger('-3') 等于 true`, function() {
    expect(isNegativeInteger('-3')).to.be.equal(true);
  });

  // -3.3
  it(`isNegativeInteger(-3.3) 等于 false`, function() {
    expect(isNegativeInteger(-3.3)).to.be.equal(false);
  });

  // '-3.3'
  it(`isNegativeInteger('-3.3') 等于 false`, function() {
    expect(isNegativeInteger('-3.3')).to.be.equal(false);
  });

  // '3'
  it(`isNegativeInteger('3', {isStrict: true}) 等于 false`, function() {
    expect(isNegativeInteger('3', {isStrict: true})).to.be.equal(false);
  });

  // '3.3'
  it(`isNegativeInteger('3.3', {isStrict: true}) 等于 false`, function() {
    expect(isNegativeInteger('3.3', {isStrict: true})).to.be.equal(false);
  });

  // '-3'
  it(`isNegativeInteger('-3', {isStrict: true}) 等于 false`, function() {
    expect(isNegativeInteger('-3', {isStrict: true})).to.be.equal(false);
  });

  // '-3.3'
  it(`isNegativeInteger('-3.3', {isStrict: true}) 等于 false`, function() {
    expect(isNegativeInteger('-3.3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isNegativeInteger(0) 等于 false`, function() {
    expect(isNegativeInteger(0)).to.be.equal(false);
  });

  // '0'
  it(`isNegativeInteger('0') 等于 false`, function() {
    expect(isNegativeInteger('0')).to.be.equal(false);
  });
});
