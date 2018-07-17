
const isPositiveNumber = require('../src/isPositiveNumber');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isPositiveNumber test', function () {
  // 3
  it(`isPositiveNumber(3) === true`, function () {
    isPositiveNumber(3).should.equal(true);
  });

  // '3'
  it(`isPositiveNumber('3') === true`, function () {
    isPositiveNumber('3').should.equal(true);
  });

  // 3
  it(`isPositiveNumber(3, {isStrict: true}) === true`, function () {
    isPositiveNumber(3, {isStrict: true}).should.equal(true);
  });

  // '3'
  it(`isPositiveNumber('3', {isStrict: true}) === false`, function () {
    isPositiveNumber('3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isPositiveNumber(0) === false`, function () {
    isPositiveNumber(0).should.equal(false);
  });

  // '0'
  it(`isPositiveNumber('0') === false`, function () {
    isPositiveNumber('0').should.equal(false);
  });

  // 0
  it(`isPositiveNumber(0, {isStrict: true}) === false`, function () {
    isPositiveNumber(0, {isStrict: true}).should.equal(false);
  });

  // '0'
  it(`isPositiveNumber('0', {isStrict: true}) === false`, function () {
    isPositiveNumber('0', {isStrict: true}).should.equal(false);
  });

  // -3
  it(`isPositiveNumber(-3) === false`, function () {
    isPositiveNumber(-3).should.equal(false);
  });

  // '-3'
  it(`isPositiveNumber('-3') === false`, function () {
    isPositiveNumber('-3').should.equal(false);
  });

  // -3
  it(`isPositiveNumber(-3, {isStrict: true}) === false`, function () {
    isPositiveNumber(-3, {isStrict: true}).should.equal(false);
  });

  // '-3'
  it(`isPositiveNumber('-3', {isStrict: true}) === false`, function () {
    isPositiveNumber('-3', {isStrict: true}).should.equal(false);
  });

  // Number.POSITIVE_INFINITY
  it(`isPositiveNumber(Number.POSITIVE_INFINITY) === false`, function () {
    isPositiveNumber(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // Number.POSITIVE_INFINITY
  it(`isPositiveNumber(Number.POSITIVE_INFINITY, {isStrict: true}) === false`, function () {
    isPositiveNumber(Number.POSITIVE_INFINITY, {isStrict: true}).should.equal(false);
  });

  // ''
  it(`isPositiveNumber('') === false`, function () {
    isPositiveNumber('').should.equal(false);
  });

  // '   '
  it(`isPositiveNumber('   ') === false`, function () {
    isPositiveNumber('   ').should.equal(false);
  });

  // null
  it(`isPositiveNumber(null) === false`, function () {
    isPositiveNumber(null).should.equal(false);
  });

  // undefined
  it(`isPositiveNumber(undefined) === false`, function () {
    isPositiveNumber(undefined).should.equal(false);
  });

  // NaN
  it(`isPositiveNumber(NaN) === false`, function () {
    isPositiveNumber(NaN).should.equal(false);
  });

  // Infinity
  it(`isPositiveNumber(Infinity) === false`, function () {
    isPositiveNumber(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // -Infinity
  it(`isPositiveNumber(-Infinity) === false`, function () {
    isPositiveNumber(Number.NEGATIVE_INFINITY).should.equal(false);
  });
});
