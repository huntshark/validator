
const expect = require('chai').expect;
const isPositiveInteger = require('../src/isPositiveInteger');

// 测试
describe('isPositiveInteger 测试集合', function() {
  // 3
  it(`isPositiveInteger(3) 等于 true`, function() {
    expect(isPositiveInteger(3)).to.be.equal(true);
  });

  // '3'
  it(`isPositiveInteger('3') 等于 true`, function() {
    expect(isPositiveInteger('3')).to.be.equal(true);
  });

  // 3.3
  it(`isPositiveInteger(3.3) 等于 false`, function() {
    expect(isPositiveInteger(3.3)).to.be.equal(false);
  });

  // '3.3'
  it(`isPositiveInteger('3.3') 等于 false`, function() {
    expect(isPositiveInteger('3.3')).to.be.equal(false);
  });

  // -3
  it(`isPositiveInteger(-3) 等于 false`, function() {
    expect(isPositiveInteger(-3)).to.be.equal(false);
  });

  // '-3'
  it(`isPositiveInteger('-3') 等于 false`, function() {
    expect(isPositiveInteger('-3')).to.be.equal(false);
  });

  // -3.3
  it(`isPositiveInteger(-3.3) 等于 false`, function() {
    expect(isPositiveInteger(-3.3)).to.be.equal(false);
  });

  // '-3.3'
  it(`isPositiveInteger('-3.3') 等于 false`, function() {
    expect(isPositiveInteger('-3.3')).to.be.equal(false);
  });

  // '3'
  it(`isPositiveInteger('3', {isStrict: true}) 等于 false`, function() {
    expect(isPositiveInteger('3', {isStrict: true})).to.be.equal(false);
  });

  // '3.3'
  it(`isPositiveInteger('3.3', {isStrict: true}) 等于 false`, function() {
    expect(isPositiveInteger('3.3', {isStrict: true})).to.be.equal(false);
  });

  // '-3'
  it(`isPositiveInteger('-3', {isStrict: true}) 等于 false`, function() {
    expect(isPositiveInteger('-3', {isStrict: true})).to.be.equal(false);
  });

  // '-3.3'
  it(`isPositiveInteger('-3.3', {isStrict: true}) 等于 false`, function() {
    expect(isPositiveInteger('-3.3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isPositiveInteger(0) 等于 false`, function() {
    expect(isPositiveInteger(0)).to.be.equal(false);
  });

  // '0'
  it(`isPositiveInteger('0') 等于 false`, function() {
    expect(isPositiveInteger('0')).to.be.equal(false);
  });
});
