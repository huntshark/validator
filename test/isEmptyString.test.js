
const expect = require('chai').expect;
const isEmptyString = require('../src/isEmptyString');

// 测试
describe('isEmptyString 测试集合', function() {
  // '3'
  it(`isEmptyString('3') 等于 false`, function() {
    expect(isEmptyString('3')).to.be.equal(false);
  });

  // ''
  it(`isEmptyString('') 等于 true`, function() {
    expect(isEmptyString('')).to.be.equal(true);
  });

  // ''
  it(`isEmptyString('', {isStrict: false}) 等于 true`, function() {
    expect(isEmptyString('', {isStrict: false})).to.be.equal(true);
  });

  // '   '
  it(`isEmptyString('   ') 等于 true`, function() {
    expect(isEmptyString('   ')).to.be.equal(true);
  });

  // ''
  it(`isEmptyString('   ', {isStrict: false}) 等于 false`, function() {
    expect(isEmptyString('   ', {isStrict: false})).to.be.equal(false);
  });
});
