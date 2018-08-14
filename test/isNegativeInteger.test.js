
const isNegativeInteger = require('../src/isNegativeInteger');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isNegativeInteger', function () {
  // .3
  it(`isNegativeInteger(.3) === false`, function () {
    isNegativeInteger(.3).should.equal(false);
  });

  // 3
  it(`isNegativeInteger(3) === false`, function () {
    isNegativeInteger(3).should.equal(false);
  });

  // 3.
  it(`isNegativeInteger(3.) === false`, function () {
    isNegativeInteger(3.).should.equal(false);
  });

  // 3.3
  it(`isNegativeInteger(3.3) === false`, function () {
    isNegativeInteger(3.3).should.equal(false);
  });

  // '.3'
  it(`isNegativeInteger('.3') === false`, function () {
    isNegativeInteger('.3').should.equal(false);
  });

  // '3'
  it(`isNegativeInteger('3') === false`, function () {
    isNegativeInteger('3').should.equal(false);
  });

  // '3.'
  it(`isNegativeInteger('3.') === false`, function () {
    isNegativeInteger('3.').should.equal(false);
  });

  // '3.3'
  it(`isNegativeInteger('3.3') === false`, function () {
    isNegativeInteger('3.3  ').should.equal(false);
  });

  // .3
  it(`isNegativeInteger(.3, {isStrict: true}) === false`, function () {
    isNegativeInteger(.3, {isStrict: true}).should.equal(false);
  });

  // 3
  it(`isNegativeInteger(3, {isStrict: true}) === false`, function () {
    isNegativeInteger(3, {isStrict: true}).should.equal(false);
  });

  // 3.
  it(`isNegativeInteger(3., {isStrict: true}) === false`, function () {
    isNegativeInteger(3., {isStrict: true}).should.equal(false);
  });

  // 3.3
  it(`isNegativeInteger(3.3, {isStrict: true}) === false`, function () {
    isNegativeInteger(3.3, {isStrict: true}).should.equal(false);
  });

  // '.3'
  it(`isNegativeInteger('.3', {isStrict: true}) === false`, function () {
    isNegativeInteger('.3', {isStrict: true}).should.equal(false);
  });

  // '3'
  it(`isNegativeInteger('3', {isStrict: true}) === false`, function () {
    isNegativeInteger('3', {isStrict: true}).should.equal(false);
  });

  // '3.'
  it(`isNegativeInteger('3.', {isStrict: true}) === false`, function () {
    isNegativeInteger('3.', {isStrict: true}).should.equal(false);
  });

  // '3.3'
  it(`isNegativeInteger('3.3', {isStrict: true}) === false`, function () {
    isNegativeInteger('3.3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isNegativeInteger(0) === false`, function () {
    isNegativeInteger(0).should.equal(false);
  });

  // 0.
  it(`isNegativeInteger(0.) === false`, function () {
    isNegativeInteger(0.).should.equal(false);
  });

  // .0
  it(`isNegativeInteger(.0) === false`, function () {
    isNegativeInteger(.0).should.equal(false);
  });

  // 0.0
  it(`isNegativeInteger(0.0) === false`, function () {
    isNegativeInteger(0.0).should.equal(false);
  });

  // '0'
  it(`isNegativeInteger('0') === false`, function () {
    isNegativeInteger('0').should.equal(false);
  });

  // '0.'
  it(`isNegativeInteger('0.') === false`, function () {
    isNegativeInteger('0.').should.equal(false);
  });

  // '.0'
  it(`isNegativeInteger('.0') === false`, function () {
    isNegativeInteger('.0').should.equal(false);
  });

  // '0.0'
  it(`isNegativeInteger('0.0') === false`, function () {
    isNegativeInteger('0.0').should.equal(false);
  });

  // '.'
  it(`isNegativeInteger('.') === false`, function () {
    isNegativeInteger('.').should.equal(false);
  });

  // 0
  it(`isNegativeInteger(0, {isStrict: true}) === false`, function () {
    isNegativeInteger(0, {isStrict: true}).should.equal(false);
  });

  // '0'
  it(`isNegativeInteger('0', {isStrict: true}) === false`, function () {
    isNegativeInteger('0', {isStrict: true}).should.equal(false);
  });

  // -.3
  it(`isNegativeInteger(-.3) === false`, function () {
    isNegativeInteger(-.3).should.equal(false);
  });

  // -3
  it(`isNegativeInteger(-3) === true`, function () {
    isNegativeInteger(-3).should.equal(true);
  });

  // -3.
  it(`isNegativeInteger(-3.) === true`, function () {
    isNegativeInteger(-3.).should.equal(true);
  });

  // -3.3
  it(`isNegativeInteger(-3.3) === false`, function () {
    isNegativeInteger(-3.3).should.equal(false);
  });

  // '-.3'
  it(`isNegativeInteger('-.3') === false`, function () {
    isNegativeInteger('-.3').should.equal(false);
  });

  // '-3'
  it(`isNegativeInteger('-3') === true`, function () {
    isNegativeInteger('-3').should.equal(true);
  });

  // '-3.'
  it(`isNegativeInteger('-3.') === false`, function () {
    isNegativeInteger('-3.').should.equal(false);
  });

  // '-3.3'
  it(`isNegativeInteger('-3.3') === false`, function () {
    isNegativeInteger('-3.3').should.equal(false);
  });

  // '--3'
  it(`isNegativeInteger('--3') === false`, function () {
    isNegativeInteger('--3').should.equal(false);
  });

  // '-3-3'
  it(`isNegativeInteger('-3-3') === false`, function () {
    isNegativeInteger('-3-3').should.equal(false);
  });

  // -.3
  it(`isNegativeInteger(-.3, {isStrict: true}) === false`, function () {
    isNegativeInteger(-.3, {isStrict: true}).should.equal(false);
  });

  // -3
  it(`isNegativeInteger(-3, {isStrict: true}) === true`, function () {
    isNegativeInteger(-3, {isStrict: true}).should.equal(true);
  });

  // -3.
  it(`isNegativeInteger(-3., {isStrict: true}) === true`, function () {
    isNegativeInteger(-3., {isStrict: true}).should.equal(true);
  });

  // -3.3
  it(`isNegativeInteger(-3.3, {isStrict: true}) === false`, function () {
    isNegativeInteger(-3.3, {isStrict: true}).should.equal(false);
  });

  // '-.3'
  it(`isNegativeInteger('-.3', {isStrict: true}) === false`, function () {
    isNegativeInteger('-.3', {isStrict: true}).should.equal(false);
  });

  // '-3'
  it(`isNegativeInteger('-3', {isStrict: true}) === false`, function () {
    isNegativeInteger('-3', {isStrict: true}).should.equal(false);
  });

  // '-3.'
  it(`isNegativeInteger('-3.', {isStrict: true}) === false`, function () {
    isNegativeInteger('-3.', {isStrict: true}).should.equal(false);
  });

  // '-3.3'
  it(`isNegativeInteger('-3.3', {isStrict: true}) === false`, function () {
    isNegativeInteger('-3.3', {isStrict: true}).should.equal(false);
  });

  // ''
  it(`isNegativeInteger('') === false`, function () {
    isNegativeInteger('').should.equal(false);
  });

  // '   '
  it(`isNegativeInteger('   ') === false`, function () {
    isNegativeInteger('   ').should.equal(false);
  });

  // null
  it(`isNegativeInteger(null) === false`, function () {
    isNegativeInteger(null).should.equal(false);
  });

  // undefined
  it(`isNegativeInteger(undefined) === false`, function () {
    isNegativeInteger(undefined).should.equal(false);
  });

  // NaN
  it(`isNegativeInteger(NaN) === false`, function () {
    isNegativeInteger(NaN).should.equal(false);
  });

  // Infinity
  it(`isNegativeInteger(Infinity) === false`, function () {
    isNegativeInteger(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // -Infinity
  it(`isNegativeInteger(-Infinity) === false`, function () {
    isNegativeInteger(Number.NEGATIVE_INFINITY).should.equal(false);
  });

  // Object(3)
  it(`isNegativeInteger(Object(3)) === false`, function () {
    isNegativeInteger(Object(3)).should.equal(false);
  });

  // Object('3')
  it(`isNegativeInteger(Object('3')) === false`, function () {
    isNegativeInteger(Object('3')).should.equal(false);
  });

  // Object(3)
  it(`isNegativeInteger(Object(3), {isStrict: true}) === false`, function () {
    isNegativeInteger(Object(3), {isStrict: true}).should.equal(false);
  });

  // Object('3')
  it(`isNegativeInteger(Object('3'), {isStrict: true}) === false`, function () {
    isNegativeInteger(Object('3'), {isStrict: true}).should.equal(false);
  });

  // Object(-3)
  it(`isNegativeInteger(Object(-3)) === true`, function () {
    isNegativeInteger(Object(-3)).should.equal(true);
  });

  // Object('-3')
  it(`isNegativeInteger(Object('-3')) === true`, function () {
    isNegativeInteger(Object('-3')).should.equal(true);
  });

  // Object(-3)
  it(`isNegativeInteger(Object(-3), {isStrict: true}) === true`, function () {
    isNegativeInteger(Object(-3), {isStrict: true}).should.equal(true);
  });

  // Object('-3')
  it(`isNegativeInteger(Object('-3'), {isStrict: true}) === false`, function () {
    isNegativeInteger(Object('-3'), {isStrict: true}).should.equal(false);
  });
});
