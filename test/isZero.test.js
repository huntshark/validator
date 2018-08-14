
const isZero = require('../src/isZero');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isZero', function () {
  // 3
  it(`isZero(3) === false`, function () {
    isZero(3).should.equal(false);
  });

  // -3
  it(`isZero(-3) === false`, function () {
    isZero(-3).should.equal(false);
  });

  // '3'
  it(`isZero('3') === false`, function () {
    isZero('3').should.equal(false);
  });

  // '-3'
  it(`isZero('-3') === false`, function () {
    isZero('-3').should.equal(false);
  });

  // 3
  it(`isZero(3, {isStrict: true}) === false`, function () {
    isZero(3, {isStrict: true}).should.equal(false);
  });

  // -3
  it(`isZero(-3, {isStrict: true}) === false`, function () {
    isZero(-3, {isStrict: true}).should.equal(false);
  });

  // '3'
  it(`isZero('3', {isStrict: true}) === false`, function () {
    isZero('3', {isStrict: true}).should.equal(false);
  });

  // '-3'
  it(`isZero('-3', {isStrict: true}) === false`, function () {
    isZero('-3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isZero(0) === true`, function () {
    isZero(0).should.equal(true);
  });

  // '0'
  it(`isZero('0') === true`, function () {
    isZero('0').should.equal(true);
  });

  // '0.0'
  it(`isZero('0.0') === true`, function () {
    isZero('0.0').should.equal(true);
  });

  // '0.'
  it(`isZero('0.') === true`, function () {
    isZero('0.').should.equal(true);
  });

  // '.0'
  it(`isZero('.0') === true`, function () {
    isZero('.0').should.equal(true);
  });

  // '.'
  it(`isZero('.') === false`, function () {
    isZero('.').should.equal(false);
  });

  // 0
  it(`isZero(0, {isStrict: true}) === true`, function () {
    isZero(0, {isStrict: true}).should.equal(true);
  });

  // '0'
  it(`isZero('0', {isStrict: true}) === false`, function () {
    isZero('0', {isStrict: true}).should.equal(false);
  });

  // NaN
  it(`isZero(NaN) === false`, function () {
    isZero(NaN).should.equal(false);
  });

  // Infinity
  it(`isZero(Infinity) === false`, function () {
    isZero(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // -Infinity
  it(`isZero(-Infinity) === false`, function () {
    isZero(Number.NEGATIVE_INFINITY).should.equal(false);
  });

  // ''
  it(`isZero('') === false`, function () {
    isZero('').should.equal(false);
  });

  // '   '
  it(`isZero('   ') === false`, function () {
    isZero('   ').should.equal(false);
  });

  // null
  it(`isZero(null) === false`, function () {
    isZero(null).should.equal(false);
  });

  // undefined
  it(`isZero(undefined) === false`, function () {
    isZero(undefined).should.equal(false);
  });

  // Object(0)
  it(`isZero(Object(0)) === true`, function () {
    isZero(Object(0)).should.equal(true);
  });

  // Object('0')
  it(`isZero(Object('0')) === true`, function () {
    isZero(Object('0')).should.equal(true);
  });

  // Object(0)
  it(`isZero(Object(0), {isStrict: true}) === true`, function () {
    isZero(Object(0), {isStrict: true}).should.equal(true);
  });

  // Object('0')
  it(`isZero(Object('0'), {isStrict: true}) === false`, function () {
    isZero(Object('0'), {isStrict: true}).should.equal(false);
  });
});
