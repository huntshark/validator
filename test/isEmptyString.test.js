
const isEmptyString = require('../src/isEmptyString');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isEmptyString test', function() {
  // 3
  it(`isEmptyString(3) === false`, function() {
    isEmptyString(3).should.equal(false);
  });

  // '3'
  it(`isEmptyString('3') === false`, function() {
    isEmptyString('3').should.equal(false);
  });

  // ''
  it(`isEmptyString('') === true`, function() {
    isEmptyString('').should.equal(true);
  });

  // ''
  it(`isEmptyString('', {isStrict: false}) === true`, function() {
    isEmptyString('', {isStrict: false}).should.equal(true);
  });

  // '   '
  it(`isEmptyString('   ') === true`, function() {
    isEmptyString('   ').should.equal(true);
  });

  // '   '
  it(`isEmptyString('   ', {isStrict: false}) === false`, function() {
    isEmptyString('   ', {isStrict: false}).should.equal(false);
  });

  // null
  it(`isEmptyString(null) === false`, function() {
    isEmptyString(null).should.equal(false);
  });

  // undefined
  it(`isEmptyString(undefined) === false`, function() {
    isEmptyString(undefined).should.equal(false);
  });

  // NaN
  it(`isEmptyString(NaN) === false`, function() {
    isEmptyString(NaN).should.equal(false);
  });
});
