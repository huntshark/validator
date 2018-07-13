
const isUnEmptyString = require('../src/isUnEmptyString');
const chai = require('chai');
const {should} = chai;

chai.use(require('chai-things'));
should();

// Test
describe('isUnEmptyString test', function() {
  // '3'
  it(`isUnEmptyString('3') === true`, function() {
    isUnEmptyString('3').should.equal(true);
  });

  // ''
  it(`isUnEmptyString('') === false`, function() {
    isUnEmptyString('').should.equal(false);
  });

  // ''
  it(`isUnEmptyString('', {isStrict: false}) === false`, function() {
    isUnEmptyString('', {isStrict: false}).should.equal(false);
  });

  // '   '
  it(`isUnEmptyString('   ') === false`, function() {
    isUnEmptyString('   ').should.equal(false);
  });

  // ''
  it(`isUnEmptyString('   ', {isStrict: false}) === true`, function() {
    isUnEmptyString('   ', {isStrict: false}).should.equal(true);
  });
});
