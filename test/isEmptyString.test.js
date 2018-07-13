
const expect = require('chai').expect;
const isEmptyString = require('../src/isEmptyString');

// Test
describe('isEmptyString test', function() {
  // '3'
  it(`isEmptyString('3') === false`, function() {
    expect(isEmptyString('3')).to.be.equal(false);
  });

  // ''
  it(`isEmptyString('') === true`, function() {
    expect(isEmptyString('')).to.be.equal(true);
  });

  // ''
  it(`isEmptyString('', {isStrict: false}) === true`, function() {
    expect(isEmptyString('', {isStrict: false})).to.be.equal(true);
  });

  // '   '
  it(`isEmptyString('   ') === true`, function() {
    expect(isEmptyString('   ')).to.be.equal(true);
  });

  // ''
  it(`isEmptyString('   ', {isStrict: false}) === false`, function() {
    expect(isEmptyString('   ', {isStrict: false})).to.be.equal(false);
  });
});
