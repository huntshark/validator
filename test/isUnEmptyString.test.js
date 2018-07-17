
const isUnEmptyString = require('../src/isUnEmptyString');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isUnEmptyString test', function () {
  // 3
  it(`isUnEmptyString(3) === false`, function () {
    isUnEmptyString(3).should.equal(false);
  });

  // '3'
  it(`isUnEmptyString('3') === true`, function () {
    isUnEmptyString('3').should.equal(true);
  });

  // 0
  it(`isUnEmptyString(0) === false`, function () {
    isUnEmptyString(0).should.equal(false);
  });

  // ''
  it(`isUnEmptyString('') === false`, function () {
    isUnEmptyString('').should.equal(false);
  });

  // ''
  it(`isUnEmptyString('', {isStrict: false}) === false`, function () {
    isUnEmptyString('', {isStrict: false}).should.equal(false);
  });

  // '   '
  it(`isUnEmptyString('   ') === false`, function () {
    isUnEmptyString('   ').should.equal(false);
  });

  // '   '
  it(`isUnEmptyString('   ', {isStrict: false}) === true`, function () {
    isUnEmptyString('   ', {isStrict: false}).should.equal(true);
  });

  // null
  it(`isUnEmptyString(null) === false`, function () {
    isUnEmptyString(null).should.equal(false);
  });

  // undefined
  it(`isUnEmptyString(undefined) === false`, function () {
    isUnEmptyString(undefined).should.equal(false);
  });

  // NaN
  it(`isUnEmptyString(NaN) === false`, function () {
    isUnEmptyString(NaN).should.equal(false);
  });
});
