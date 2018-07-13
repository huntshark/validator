
const expect = require('chai').expect;
const isTelephone = require('../src/isTelephone');

// Test
describe('isTelephone test', function() {
  // '7632614'
  it(`isTelephone('7632614') === true`, function() {
    expect(isTelephone('7632614')).to.be.equal(true);
  });

  // '0550-7632614'
  it(`isTelephone('0550-7632614') === true`, function() {
    expect(isTelephone('0550-7632614')).to.be.equal(true);
  });

  // '185055059334'
  it(`isTelephone('185055059334') === false`, function() {
    expect(isTelephone('185055059334')).to.be.equal(false);
  });
});
