
const expect = require('chai').expect;
const isTelephone = require('../src/isTelephone');

// 测试
describe('isTelephone 测试集合', function() {
  // '7632614'
  it(`isTelephone('7632614') 等于 true`, function() {
    expect(isTelephone('7632614')).to.be.equal(true);
  });

  // '0550-7632614'
  it(`isTelephone('0550-7632614') 等于 true`, function() {
    expect(isTelephone('0550-7632614')).to.be.equal(true);
  });

  // '185055059334'
  it(`isTelephone('185055059334') 等于 false`, function() {
    expect(isTelephone('185055059334')).to.be.equal(false);
  });
});
