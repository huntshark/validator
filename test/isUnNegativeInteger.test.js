
const isUnNegativeInteger = require('../src/isUnNegativeInteger');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isUnNegativeInteger test', function () {
  // 3
  it(`isUnNegativeInteger(3) === true`, function () {
    isUnNegativeInteger(3).should.equal(true);
  });

  // '3'
  it(`isUnNegativeInteger('3') === true`, function () {
    isUnNegativeInteger('3').should.equal(true);
  });

  // 3
  it(`isUnNegativeInteger(3, {isStrict: true}) === true`, function () {
    isUnNegativeInteger(3, {isStrict: true}).should.equal(true);
  });

  // '3'
  it(`isUnNegativeInteger('3', {isStrict: true}) === false`, function () {
    isUnNegativeInteger('3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isUnNegativeInteger(0) === true`, function () {
    isUnNegativeInteger(0).should.equal(true);
  });

  // '0'
  it(`isUnNegativeInteger('0') === true`, function () {
    isUnNegativeInteger('0').should.equal(true);
  });

  // 0
  it(`isUnNegativeInteger(0, {isStrict: true}) === true`, function () {
    isUnNegativeInteger(0, {isStrict: true}).should.equal(true);
  });

  // '0'
  it(`isUnNegativeInteger('0', {isStrict: true}) === false`, function () {
    isUnNegativeInteger('0', {isStrict: true}).should.equal(false);
  });

  // -3
  it(`isUnNegativeInteger(-3) === false`, function () {
    isUnNegativeInteger(-3).should.equal(false);
  });

  // '-3'
  it(`isUnNegativeInteger('-3') === false`, function () {
    isUnNegativeInteger('-3').should.equal(false);
  });

  // -3
  it(`isUnNegativeInteger(-3, {isStrict: true}) === false`, function () {
    isUnNegativeInteger(-3, {isStrict: true}).should.equal(false);
  });

  // '-3'
  it(`isUnNegativeInteger('-3', {isStrict: true}) === false`, function () {
    isUnNegativeInteger('-3', {isStrict: true}).should.equal(false);
  });

  // 3.3
  it(`isUnNegativeInteger(3.3) === false`, function () {
    isUnNegativeInteger(3.3).should.equal(false);
  });

  // '3.3'
  it(`isUnNegativeInteger('3.3') === false`, function () {
    isUnNegativeInteger('3.3').should.equal(false);
  });

  // 3.3
  it(`isUnNegativeInteger(3.3, {isStrict: true}) === false`, function () {
    isUnNegativeInteger(3.3, {isStrict: true}).should.equal(false);
  });

  // '3.3'
  it(`isUnNegativeInteger('3.3', {isStrict: true}) === false`, function () {
    isUnNegativeInteger('3.3', {isStrict: true}).should.equal(false);
  });

  // -3.3
  it(`isUnNegativeInteger(-3.3) === false`, function () {
    isUnNegativeInteger(-3.3).should.equal(false);
  });

  // '-3.3'
  it(`isUnNegativeInteger('-3.3') === false`, function () {
    isUnNegativeInteger('-3.3').should.equal(false);
  });

  // -3.3
  it(`isUnNegativeInteger(-3.3, {isStrict: true}) === false`, function () {
    isUnNegativeInteger(-3.3, {isStrict: true}).should.equal(false);
  });

  // '-3.3'
  it(`isUnNegativeInteger('-3.3', {isStrict: true}) === false`, function () {
    isUnNegativeInteger('-3.3', {isStrict: true}).should.equal(false);
  });

  // Number.POSITIVE_INFINITY
  it(`isUnNegativeInteger(Number.POSITIVE_INFINITY) === false`, function () {
    isUnNegativeInteger(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // Number.POSITIVE_INFINITY
  it(`isUnNegativeInteger(Number.POSITIVE_INFINITY, {isStrict: true}) === false`, function () {
    isUnNegativeInteger(Number.POSITIVE_INFINITY, {isStrict: true}).should.equal(false);
  });

  // ''
  it(`isUnNegativeInteger('') === false`, function () {
    isUnNegativeInteger('').should.equal(false);
  });

  // '   '
  it(`isUnNegativeInteger('   ') === false`, function () {
    isUnNegativeInteger('   ').should.equal(false);
  });

  // null
  it(`isUnNegativeInteger(null) === false`, function () {
    isUnNegativeInteger(null).should.equal(false);
  });

  // undefined
  it(`isUnNegativeInteger(undefined) === false`, function () {
    isUnNegativeInteger(undefined).should.equal(false);
  });

  // NaN
  it(`isUnNegativeInteger(NaN) === false`, function () {
    isUnNegativeInteger(NaN).should.equal(false);
  });

  // Infinity
  it(`isUnNegativeInteger(Infinity) === false`, function () {
    isUnNegativeInteger(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // -Infinity
  it(`isUnNegativeInteger(-Infinity) === false`, function () {
    isUnNegativeInteger(Number.NEGATIVE_INFINITY).should.equal(false);
  });
});
