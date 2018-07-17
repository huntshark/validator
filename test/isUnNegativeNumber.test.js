
const isUnNegativeNumber = require('../src/isUnNegativeNumber');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isUnNegativeNumber test', function () {
  // 3
  it(`isUnNegativeNumber(3) === true`, function () {
    isUnNegativeNumber(3).should.equal(true);
  });

  // '3'
  it(`isUnNegativeNumber('3') === true`, function () {
    isUnNegativeNumber('3').should.equal(true);
  });

  // 3
  it(`isUnNegativeNumber(3, {isStrict: true}) === true`, function () {
    isUnNegativeNumber(3, {isStrict: true}).should.equal(true);
  });

  // '3'
  it(`isUnNegativeNumber('3', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isUnNegativeNumber(0) === false`, function () {
    isUnNegativeNumber(0).should.equal(true);
  });

  // '0'
  it(`isUnNegativeNumber('0') === false`, function () {
    isUnNegativeNumber('0').should.equal(true);
  });

  // 0
  it(`isUnNegativeNumber(0, {isStrict: true}) === true`, function () {
    isUnNegativeNumber(0, {isStrict: true}).should.equal(true);
  });

  // '0'
  it(`isUnNegativeNumber('0', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('0', {isStrict: true}).should.equal(false);
  });

  // -3
  it(`isUnNegativeNumber(-3) === false`, function () {
    isUnNegativeNumber(-3).should.equal(false);
  });

  // '-3'
  it(`isUnNegativeNumber('-3') === false`, function () {
    isUnNegativeNumber('-3').should.equal(false);
  });

  // -3
  it(`isUnNegativeNumber(-3, {isStrict: true}) === false`, function () {
    isUnNegativeNumber(-3, {isStrict: true}).should.equal(false);
  });

  // '-3'
  it(`isUnNegativeNumber('-3', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('-3', {isStrict: true}).should.equal(false);
  });

  // Number.POSITIVE_INFINITY
  it(`isUnNegativeNumber(Number.POSITIVE_INFINITY) === false`, function () {
    isUnNegativeNumber(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // Number.POSITIVE_INFINITY
  it(`isUnNegativeNumber(Number.POSITIVE_INFINITY, {isStrict: true}) === false`, function () {
    isUnNegativeNumber(Number.POSITIVE_INFINITY, {isStrict: true}).should.equal(false);
  });

  // ''
  it(`isUnNegativeNumber('') === false`, function () {
    isUnNegativeNumber('').should.equal(false);
  });

  // '   '
  it(`isUnNegativeNumber('   ') === false`, function () {
    isUnNegativeNumber('   ').should.equal(false);
  });

  // null
  it(`isUnNegativeNumber(null) === false`, function () {
    isUnNegativeNumber(null).should.equal(false);
  });

  // undefined
  it(`isUnNegativeNumber(undefined) === false`, function () {
    isUnNegativeNumber(undefined).should.equal(false);
  });

  // NaN
  it(`isUnNegativeNumber(NaN) === false`, function () {
    isUnNegativeNumber(NaN).should.equal(false);
  });

  // Infinity
  it(`isUnNegativeNumber(Infinity) === false`, function () {
    isUnNegativeNumber(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // -Infinity
  it(`isUnNegativeNumber(-Infinity) === false`, function () {
    isUnNegativeNumber(Number.NEGATIVE_INFINITY).should.equal(false);
  });
});
