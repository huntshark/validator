
const expect = require('chai').expect;
const isPhone = require('../src/isPhone');

// Test
describe('isPhone test', function() {
  // '18505505933'
  it(`isPhone('18505505933') === true`, function() {
    expect(isPhone('18505505933')).to.be.equal(true);
  });

  // '28505505933'
  it(`isPhone('28505505933') === false`, function() {
    expect(isPhone('28505505933')).to.be.equal(false);
  });

  // '185055059334'
  it(`isPhone('185055059334') === false`, function() {
    expect(isPhone('185055059334')).to.be.equal(false);
  });

  // '1850550593'
  it(`isPhone('1850550593') === false`, function() {
    expect(isPhone('1850550593')).to.be.equal(false);
  });

  // '18505505933'
  it(`isPhone('1850550 933') === false`, function() {
    expect(isPhone('1850550 933')).to.be.equal(false);
  });

  // '18505505933'
  it(`isPhone('1850550-933') === false`, function() {
    expect(isPhone('1850550-933')).to.be.equal(false);
  });

  // '7632614'
  it(`isPhone('7632614') === true`, function() {
    expect(isPhone('7632614')).to.be.equal(true);
  });

  // '0550-7632614'
  it(`isPhone('0550-7632614') === true`, function() {
    expect(isPhone('0550-7632614')).to.be.equal(true);
  });

  // '185055059334'
  it(`isPhone('185055059334') === false`, function() {
    expect(isPhone('185055059334')).to.be.equal(false);
  });
});
