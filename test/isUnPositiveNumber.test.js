
const isUnPositiveNumber = require('../src/isUnPositiveNumber');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isUnPositiveNumber test', function () {
  // -3
  it(`isUnPositiveNumber(-3) === true`, function () {
    isUnPositiveNumber(-3).should.equal(true);
  });

  // '-3'
  it(`isUnPositiveNumber('-3') === true`, function () {
    isUnPositiveNumber('-3').should.equal(true);
  });

  // -3
  it(`isUnPositiveNumber(-3, {isStrict: true}) === true`, function () {
    isUnPositiveNumber(-3, {isStrict: true}).should.equal(true);
  });

  // '-3'
  it(`isUnPositiveNumber('-3', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('-3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isUnPositiveNumber(0) === true`, function () {
    isUnPositiveNumber(0).should.equal(true);
  });

  // '0'
  it(`isUnPositiveNumber('0') === true`, function () {
    isUnPositiveNumber('0').should.equal(true);
  });

  // 0
  it(`isUnPositiveNumber(0, {isStrict: true}) === true`, function () {
    isUnPositiveNumber(0, {isStrict: true}).should.equal(true);
  });

  // '0'
  it(`isUnPositiveNumber('0', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('0', {isStrict: true}).should.equal(false);
  });

  // 3
  it(`isUnPositiveNumber(3) === false`, function () {
    isUnPositiveNumber(3).should.equal(false);
  });

  // '3'
  it(`isUnPositiveNumber('3') === false`, function () {
    isUnPositiveNumber('3').should.equal(false);
  });

  // 3
  it(`isUnPositiveNumber(3, {isStrict: true}) === false`, function () {
    isUnPositiveNumber(3, {isStrict: true}).should.equal(false);
  });

  // '3'
  it(`isUnPositiveNumber('3', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('3', {isStrict: true}).should.equal(false);
  });

  // Number.POSITIVE_INFINITY
  it(`isUnPositiveNumber(Number.POSITIVE_INFINITY) === false`, function () {
    isUnPositiveNumber(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // Number.POSITIVE_INFINITY
  it(`isUnPositiveNumber(Number.POSITIVE_INFINITY, {isStrict: true}) === false`, function () {
    isUnPositiveNumber(Number.POSITIVE_INFINITY, {isStrict: true}).should.equal(false);
  });

  // ''
  it(`isUnPositiveNumber('') === false`, function () {
    isUnPositiveNumber('').should.equal(false);
  });

  // '   '
  it(`isUnPositiveNumber('   ') === false`, function () {
    isUnPositiveNumber('   ').should.equal(false);
  });

  // null
  it(`isUnPositiveNumber(null) === false`, function () {
    isUnPositiveNumber(null).should.equal(false);
  });

  // undefined
  it(`isUnPositiveNumber(undefined) === false`, function () {
    isUnPositiveNumber(undefined).should.equal(false);
  });

  // NaN
  it(`isUnPositiveNumber(NaN) === false`, function () {
    isUnPositiveNumber(NaN).should.equal(false);
  });

  // Infinity
  it(`isUnPositiveNumber(Infinity) === false`, function () {
    isUnPositiveNumber(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // -Infinity
  it(`isUnPositiveNumber(-Infinity) === false`, function () {
    isUnPositiveNumber(Number.NEGATIVE_INFINITY).should.equal(false);
  });
});
