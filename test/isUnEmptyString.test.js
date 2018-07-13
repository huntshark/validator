
const expect = require('chai').expect;
const isUnEmptyString = require('../src/isUnEmptyString');

// Test
describe('isUnEmptyString test', function() {
  // '3'
  it(`isUnEmptyString('3') === true`, function() {
    expect(isUnEmptyString('3')).to.be.equal(true);
  });

  // ''
  it(`isUnEmptyString('') === false`, function() {
    expect(isUnEmptyString('')).to.be.equal(false);
  });

  // ''
  it(`isUnEmptyString('', {isStrict: false}) === false`, function() {
    expect(isUnEmptyString('', {isStrict: false})).to.be.equal(false);
  });

  // '   '
  it(`isUnEmptyString('   ') === false`, function() {
    expect(isUnEmptyString('   ')).to.be.equal(false);
  });

  // ''
  it(`isUnEmptyString('   ', {isStrict: false}) === true`, function() {
    expect(isUnEmptyString('   ', {isStrict: false})).to.be.equal(true);
  });
});
