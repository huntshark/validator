
const expect = require('chai').expect;
const isMobile = require('../src/isMobile');

// 测试
describe('isMobile 测试集合', function() {
  // '18505505933'
  it(`isMobile('18505505933') 等于 true`, function() {
    expect(isMobile('18505505933')).to.be.equal(true);
  });

  // '28505505933'
  it(`isMobile('28505505933') 等于 false`, function() {
    expect(isMobile('28505505933')).to.be.equal(false);
  });

  // '185055059334'
  it(`isMobile('185055059334') 等于 false`, function() {
    expect(isMobile('185055059334')).to.be.equal(false);
  });

  // '1850550593'
  it(`isMobile('1850550593') 等于 false`, function() {
    expect(isMobile('1850550593')).to.be.equal(false);
  });

  // '18505505933'
  it(`isMobile('1850550 933') 等于 false`, function() {
    expect(isMobile('1850550 933')).to.be.equal(false);
  });

  // '18505505933'
  it(`isMobile('1850550-933') 等于 false`, function() {
    expect(isMobile('1850550-933')).to.be.equal(false);
  });
});
