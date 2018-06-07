
const expect = require('chai').expect;
const isUnEmptyString = require('../src/isUnEmptyString');

// 测试
describe('isUnEmptyString 测试集合', function() {
  // '3'
  it(`isUnEmptyString('3') 等于 true`, function() {
    expect(isUnEmptyString('3')).to.be.equal(true);
  });

  // ''
  it(`isUnEmptyString('') 等于 false`, function() {
    expect(isUnEmptyString('')).to.be.equal(false);
  });

  // ''
  it(`isUnEmptyString('', {isStrict: false}) 等于 false`, function() {
    expect(isUnEmptyString('', {isStrict: false})).to.be.equal(false);
  });

  // '   '
  it(`isUnEmptyString('   ') 等于 false`, function() {
    expect(isUnEmptyString('   ')).to.be.equal(false);
  });

  // ''
  it(`isUnEmptyString('   ', {isStrict: false}) 等于 true`, function() {
    expect(isUnEmptyString('   ', {isStrict: false})).to.be.equal(true);
  });
});
