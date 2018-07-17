
const isUnPositiveInteger = require('../src/isUnPositiveInteger');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isUnPositiveInteger test', function () {
  // 3
  it(`isUnPositiveInteger(3) === false`, function () {
    isUnPositiveInteger(3).should.equal(false);
  });

  // '3'
  it(`isUnPositiveInteger('3') === false`, function () {
    isUnPositiveInteger('3').should.equal(false);
  });

  // 3
  it(`isUnPositiveInteger(3, {isStrict: true}) === false`, function () {
    isUnPositiveInteger(3, {isStrict: true}).should.equal(false);
  });

  // '3'
  it(`isUnPositiveInteger('3', {isStrict: true}) === false`, function () {
    isUnPositiveInteger('3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isUnPositiveInteger(0) === true`, function () {
    isUnPositiveInteger(0).should.equal(true);
  });

  // '0'
  it(`isUnPositiveInteger('0') === true`, function () {
    isUnPositiveInteger('0').should.equal(true);
  });

  // 0
  it(`isUnPositiveInteger(0, {isStrict: true}) === true`, function () {
    isUnPositiveInteger(0, {isStrict: true}).should.equal(true);
  });

  // '0'
  it(`isUnPositiveInteger('0', {isStrict: true}) === false`, function () {
    isUnPositiveInteger('0', {isStrict: true}).should.equal(false);
  });

  // -3
  it(`isUnPositiveInteger(-3) === true`, function () {
    isUnPositiveInteger(-3).should.equal(true);
  });

  // '-3'
  it(`isUnPositiveInteger('-3') === true`, function () {
    isUnPositiveInteger('-3').should.equal(true);
  });

  // -3
  it(`isUnPositiveInteger(-3, {isStrict: true}) === true`, function () {
    isUnPositiveInteger(-3, {isStrict: true}).should.equal(true);
  });

  // '-3'
  it(`isUnPositiveInteger('-3', {isStrict: true}) === false`, function () {
    isUnPositiveInteger('-3', {isStrict: true}).should.equal(false);
  });

  // 3.3
  it(`isUnPositiveInteger(3.3) === false`, function () {
    isUnPositiveInteger(3.3).should.equal(false);
  });

  // '3.3'
  it(`isUnPositiveInteger('3.3') === false`, function () {
    isUnPositiveInteger('3.3').should.equal(false);
  });

  // 3.3
  it(`isUnPositiveInteger(3.3, {isStrict: true}) === false`, function () {
    isUnPositiveInteger(3.3, {isStrict: true}).should.equal(false);
  });

  // '3.3'
  it(`isUnPositiveInteger('3.3', {isStrict: true}) === false`, function () {
    isUnPositiveInteger('3.3', {isStrict: true}).should.equal(false);
  });

  // -3.3
  it(`isUnPositiveInteger(-3.3) === false`, function () {
    isUnPositiveInteger(-3.3).should.equal(false);
  });

  // '-3.3'
  it(`isUnPositiveInteger('-3.3') === false`, function () {
    isUnPositiveInteger('-3.3').should.equal(false);
  });

  // -3.3
  it(`isUnPositiveInteger(-3.3, {isStrict: true}) === false`, function () {
    isUnPositiveInteger(-3.3, {isStrict: true}).should.equal(false);
  });

  // '-3.3'
  it(`isUnPositiveInteger('-3.3', {isStrict: true}) === false`, function () {
    isUnPositiveInteger('-3.3', {isStrict: true}).should.equal(false);
  });

  // Number.POSITIVE_INFINITY
  it(`isUnPositiveInteger(Number.POSITIVE_INFINITY) === false`, function () {
    isUnPositiveInteger(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // Number.POSITIVE_INFINITY
  it(`isUnPositiveInteger(Number.POSITIVE_INFINITY, {isStrict: true}) === false`, function () {
    isUnPositiveInteger(Number.POSITIVE_INFINITY, {isStrict: true}).should.equal(false);
  });

  // ''
  it(`isUnPositiveInteger('') === false`, function () {
    isUnPositiveInteger('').should.equal(false);
  });

  // '   '
  it(`isUnPositiveInteger('   ') === false`, function () {
    isUnPositiveInteger('   ').should.equal(false);
  });

  // null
  it(`isUnPositiveInteger(null) === false`, function () {
    isUnPositiveInteger(null).should.equal(false);
  });

  // undefined
  it(`isUnPositiveInteger(undefined) === false`, function () {
    isUnPositiveInteger(undefined).should.equal(false);
  });

  // NaN
  it(`isUnPositiveInteger(NaN) === false`, function () {
    isUnPositiveInteger(NaN).should.equal(false);
  });

  // Infinity
  it(`isUnPositiveInteger(Infinity) === false`, function () {
    isUnPositiveInteger(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // -Infinity
  it(`isUnPositiveInteger(-Infinity) === false`, function () {
    isUnPositiveInteger(Number.NEGATIVE_INFINITY).should.equal(false);
  });
});
