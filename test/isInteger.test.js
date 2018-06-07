
const expect = require('chai').expect;
const isInteger = require('../src/isInteger');

// 测试
describe('isInteger 测试集合', function() {
  // 3
  it(`isInteger(3) 等于 true`, function() {
    expect(isInteger(3)).to.be.equal(true);
  });

  // '3'
  it(`isInteger('3') 等于 true`, function() {
    expect(isInteger('3')).to.be.equal(true);
  });

  // 3.3
  it(`isInteger(3.3) 等于 false`, function() {
    expect(isInteger(3.3)).to.be.equal(false);
  });

  // '3.3'
  it(`isInteger('3.3') 等于 false`, function() {
    expect(isInteger('3.3')).to.be.equal(false);
  });

  // -3
  it(`isInteger(-3) 等于 true`, function() {
    expect(isInteger(-3)).to.be.equal(true);
  });

  // '-3'
  it(`isInteger('-3') 等于 true`, function() {
    expect(isInteger('-3')).to.be.equal(true);
  });

  // -3.3
  it(`isInteger(-3.3) 等于 false`, function() {
    expect(isInteger(-3.3)).to.be.equal(false);
  });

  // '-3.3'
  it(`isInteger('-3.3') 等于 false`, function() {
    expect(isInteger('-3.3')).to.be.equal(false);
  });

  // '3'
  it(`isInteger('3', {isStrict: true}) 等于 false`, function() {
    expect(isInteger('3', {isStrict: true})).to.be.equal(false);
  });

  // '3.3'
  it(`isInteger('3.3', {isStrict: true}) 等于 false`, function() {
    expect(isInteger('3.3', {isStrict: true})).to.be.equal(false);
  });

  // '-3'
  it(`isInteger('-3', {isStrict: true}) 等于 false`, function() {
    expect(isInteger('-3', {isStrict: true})).to.be.equal(false);
  });

  // '-3.3'
  it(`isInteger('-3.3', {isStrict: true}) 等于 false`, function() {
    expect(isInteger('-3.3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isInteger(0) 等于 true`, function() {
    expect(isInteger(0)).to.be.equal(true);
  });

  // '0'
  it(`isInteger('0') 等于 true`, function() {
    expect(isInteger('0')).to.be.equal(true);
  });
});
