
const expect = require('chai').expect;
const isUnPositiveInteger = require('../src/isUnPositiveInteger');

// 测试
describe('isUnPositiveInteger 测试集合', function() {
  // 3
  it(`isUnPositiveInteger(3) 等于 false`, function() {
    expect(isUnPositiveInteger(3)).to.be.equal(false);
  });

  // '3'
  it(`isUnPositiveInteger('3') 等于 false`, function() {
    expect(isUnPositiveInteger('3')).to.be.equal(false);
  });

  // 3.3
  it(`isUnPositiveInteger(3.3) 等于 false`, function() {
    expect(isUnPositiveInteger(3.3)).to.be.equal(false);
  });

  // '3.3'
  it(`isUnPositiveInteger('3.3') 等于 false`, function() {
    expect(isUnPositiveInteger('3.3')).to.be.equal(false);
  });

  // -3
  it(`isUnPositiveInteger(-3) 等于 true`, function() {
    expect(isUnPositiveInteger(-3)).to.be.equal(true);
  });

  // '-3'
  it(`isUnPositiveInteger('-3') 等于 true`, function() {
    expect(isUnPositiveInteger('-3')).to.be.equal(true);
  });

  // -3.3
  it(`isUnPositiveInteger(-3.3) 等于 false`, function() {
    expect(isUnPositiveInteger(-3.3)).to.be.equal(false);
  });

  // '-3.3'
  it(`isUnPositiveInteger('-3.3') 等于 false`, function() {
    expect(isUnPositiveInteger('-3.3')).to.be.equal(false);
  });

  // '3'
  it(`isUnPositiveInteger('3', {isStrict: true}) 等于 false`, function() {
    expect(isUnPositiveInteger('3', {isStrict: true})).to.be.equal(false);
  });

  // '3.3'
  it(`isUnPositiveInteger('3.3', {isStrict: true}) 等于 false`, function() {
    expect(isUnPositiveInteger('3.3', {isStrict: true})).to.be.equal(false);
  });

  // '-3'
  it(`isUnPositiveInteger('-3', {isStrict: true}) 等于 false`, function() {
    expect(isUnPositiveInteger('-3', {isStrict: true})).to.be.equal(false);
  });

  // '-3.3'
  it(`isUnPositiveInteger('-3.3', {isStrict: true}) 等于 false`, function() {
    expect(isUnPositiveInteger('-3.3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isUnPositiveInteger(0) 等于 true`, function() {
    expect(isUnPositiveInteger(0)).to.be.equal(true);
  });

  // '0'
  it(`isUnPositiveInteger('0') 等于 true`, function() {
    expect(isUnPositiveInteger('0')).to.be.equal(true);
  });
});
