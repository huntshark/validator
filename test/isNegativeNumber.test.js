
const isNegativeNumber = require('../src/isNegativeNumber');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isNegativeNumber test', function() {
  // -3
  it(`isNegativeNumber(-3) === true`, function() {
    isNegativeNumber(-3).should.equal(true);
  });

  // '-3'
  it(`isNegativeNumber('-3') === true`, function() {
    isNegativeNumber('-3').should.equal(true);
  });

  // -3
  it(`isNegativeNumber(-3, {isStrict: true}) === true`, function() {
    isNegativeNumber(-3, {isStrict: true}).should.equal(true);
  });

  // '-3'
  it(`isNegativeNumber('-3', {isStrict: true}) === false`, function() {
    isNegativeNumber('-3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isNegativeNumber(0) === false`, function() {
    isNegativeNumber(0).should.equal(false);
  });

  // '0'
  it(`isNegativeNumber('0') === false`, function() {
    isNegativeNumber('0').should.equal(false);
  });

  // 0
  it(`isNegativeNumber(0, {isStrict: true}) === false`, function() {
    isNegativeNumber(0, {isStrict: true}).should.equal(false);
  });

  // '0'
  it(`isNegativeNumber('0', {isStrict: true}) === false`, function() {
    isNegativeNumber('0', {isStrict: true}).should.equal(false);
  });

  // 3
  it(`isNegativeNumber(3) === false`, function() {
    isNegativeNumber(3).should.equal(false);
  });

  // '3'
  it(`isNegativeNumber('3') === false`, function() {
    isNegativeNumber('3').should.equal(false);
  });

  // 3
  it(`isNegativeNumber(3, {isStrict: true}) === false`, function() {
    isNegativeNumber(3, {isStrict: false}).should.equal(false);
  });

  // '3'
  it(`isNegativeNumber('3', {isStrict: true}) === false`, function() {
    isNegativeNumber('3', {isStrict: true}).should.equal(false);
  });

  // Number.POSITIVE_INFINITY
  it(`isNegativeNumber(Number.POSITIVE_INFINITY) === false`, function() {
    isNegativeNumber(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // Number.POSITIVE_INFINITY
  it(`isNegativeNumber(Number.POSITIVE_INFINITY, {isStrict: true}) === false`, function() {
    isNegativeNumber(Number.POSITIVE_INFINITY, {isStrict: true}).should.equal(false);
  });

  // ''
  it(`isNegativeNumber('') === false`, function() {
    isNegativeNumber('').should.equal(false);
  });

  // '   '
  it(`isNegativeNumber('   ') === false`, function() {
    isNegativeNumber('   ').should.equal(false);
  });

  // null
  it(`isNegativeNumber(null) === false`, function() {
    isNegativeNumber(null).should.equal(false);
  });

  // undefined
  it(`isNegativeNumber(undefined) === false`, function() {
    isNegativeNumber(undefined).should.equal(false);
  });

  // NaN
  it(`isNegativeNumber(NaN) === false`, function() {
    isNegativeNumber(NaN).should.equal(false);
  });

  // Infinity
  it(`isNegativeNumber(Infinity) === false`, function() {
    isNegativeNumber(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // -Infinity
  it(`isNegativeNumber(-Infinity) === false`, function() {
    isNegativeNumber(Number.NEGATIVE_INFINITY).should.equal(false);
  });
});
