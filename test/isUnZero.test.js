
const isUnZero = require('../src/isUnZero');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isUnZero', function () {
  // 3
  it(`isUnZero(3) === true`, function () {
    isUnZero(3).should.equal(true);
  });

  // -3
  it(`isUnZero(-3) === true`, function () {
    isUnZero(-3).should.equal(true);
  });

  // '3'
  it(`isUnZero('3') === true`, function () {
    isUnZero('3').should.equal(true);
  });

  // 3
  it(`isUnZero(3, {isStrict: true}) === true`, function () {
    isUnZero(3, {isStrict: true}).should.equal(true);
  });

  // -3
  it(`isUnZero(-3, {isStrict: true}) === true`, function () {
    isUnZero(-3, {isStrict: true}).should.equal(true);
  });

  // '3'
  it(`isUnZero('3', {isStrict: true}) === false`, function () {
    isUnZero('3', {isStrict: true}).should.equal(false);
  });

  it(`isUnZero(0) === false`, function () {
    isUnZero(0).should.equal(false);
  });

  it(`isUnZero('0') === false`, function () {
    isUnZero('0').should.equal(false);
  });

  it(`isUnZero(0, {isStrict: true}) === false`, function () {
    isUnZero(0, {isStrict: true}).should.equal(false);
  });

  it(`isUnZero('0', {isStrict: true}) === false`, function () {
    isUnZero('0', {isStrict: true}).should.equal(false);
  });

  // NaN
  it(`isUnZero(NaN) === false`, function () {
    isUnZero(NaN).should.equal(false);
  });

  // Infinity
  it(`isUnZero(Infinity) === false`, function () {
    isUnZero(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // -Infinity
  it(`isUnZero(-Infinity) === false`, function () {
    isUnZero(Number.NEGATIVE_INFINITY).should.equal(false);
  });

  // ''
  it(`isUnZero('') === false`, function () {
    isUnZero('').should.equal(false);
  });

  // '   '
  it(`isUnZero('   ') === false`, function () {
    isUnZero('   ').should.equal(false);
  });

  // null
  it(`isUnZero(null) === false`, function () {
    isUnZero(null).should.equal(false);
  });

  // undefined
  it(`isUnZero(undefined) === false`, function () {
    isUnZero(undefined).should.equal(false);
  });

  // Object(0)
  it(`isUnZero(Object(0)) === false`, function () {
    isUnZero(Object(0)).should.equal(false);
  });

  // Object('0')
  it(`isUnZero(Object('0')) === false`, function () {
    isUnZero(Object('0')).should.equal(false);
  });

  // Object(0)
  it(`isUnZero(Object(0), {isStrict: true}) === false`, function () {
    isUnZero(Object(0), {isStrict: true}).should.equal(false);
  });

  // Object('0')
  it(`isUnZero(Object('0'), {isStrict: true}) === false`, function () {
    isUnZero(Object('0'), {isStrict: true}).should.equal(false);
  });

  // Object(3)
  it(`isUnZero(Object(3)) === true`, function () {
    isUnZero(Object(3)).should.equal(true);
  });

  // Object('3')
  it(`isUnZero(Object('3')) === true`, function () {
    isUnZero(Object('3')).should.equal(true);
  });

  // Object(3)
  it(`isUnZero(Object(3), {isStrict: true}) === false`, function () {
    isUnZero(Object(3), {isStrict: true}).should.equal(true);
  });

  // Object('3')
  it(`isUnZero(Object('3'), {isStrict: true}) === false`, function () {
    isUnZero(Object('3'), {isStrict: true}).should.equal(false);
  });
});
