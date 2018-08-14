
const isUnPositiveInteger = require('../src/isUnPositiveInteger');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isUnPositiveInteger', function () {
  // .3
  it(`isUnPositiveInteger(.3) === false`, function () {
    isUnPositiveInteger(.3).should.equal(false);
  });

  // 3
  it(`isUnPositiveInteger(3) === false`, function () {
    isUnPositiveInteger(3).should.equal(false);
  });

  // 3.
  it(`isUnPositiveInteger(3.) === false`, function () {
    isUnPositiveInteger(3.).should.equal(false);
  });

  // 3.3
  it(`isUnPositiveInteger(3.3) === false`, function () {
    isUnPositiveInteger(3.3).should.equal(false);
  });

  // '.3'
  it(`isUnPositiveInteger('.3') === false`, function () {
    isUnPositiveInteger('.3').should.equal(false);
  });

  // '3'
  it(`isUnPositiveInteger('3') === false`, function () {
    isUnPositiveInteger('3').should.equal(false);
  });

  // '3.'
  it(`isUnPositiveInteger('3.') === false`, function () {
    isUnPositiveInteger('3.').should.equal(false);
  });

  // '3.3'
  it(`isUnPositiveInteger('3.3') === false`, function () {
    isUnPositiveInteger('3.3  ').should.equal(false);
  });

  // .3
  it(`isUnPositiveInteger(.3, {isStrict: true}) === false`, function () {
    isUnPositiveInteger(.3, {isStrict: true}).should.equal(false);
  });

  // 3
  it(`isUnPositiveInteger(3, {isStrict: true}) === false`, function () {
    isUnPositiveInteger(3, {isStrict: true}).should.equal(false);
  });

  // 3.
  it(`isUnPositiveInteger(3., {isStrict: true}) === false`, function () {
    isUnPositiveInteger(3., {isStrict: true}).should.equal(false);
  });

  // 3.3
  it(`isUnPositiveInteger(3.3, {isStrict: true}) === false`, function () {
    isUnPositiveInteger(3.3, {isStrict: true}).should.equal(false);
  });

  // '.3'
  it(`isUnPositiveInteger('.3', {isStrict: true}) === false`, function () {
    isUnPositiveInteger('.3', {isStrict: true}).should.equal(false);
  });

  // '3'
  it(`isUnPositiveInteger('3', {isStrict: true}) === false`, function () {
    isUnPositiveInteger('3', {isStrict: true}).should.equal(false);
  });

  // '3.'
  it(`isUnPositiveInteger('3.', {isStrict: true}) === false`, function () {
    isUnPositiveInteger('3.', {isStrict: true}).should.equal(false);
  });

  // '3.3'
  it(`isUnPositiveInteger('3.3', {isStrict: true}) === false`, function () {
    isUnPositiveInteger('3.3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isUnPositiveInteger(0) === true`, function () {
    isUnPositiveInteger(0).should.equal(true);
  });

  // 0.
  it(`isUnPositiveInteger(0.) === true`, function () {
    isUnPositiveInteger(0.).should.equal(true);
  });

  // .0
  it(`isUnPositiveInteger(.0) === true`, function () {
    isUnPositiveInteger(.0).should.equal(true);
  });

  // 0.0
  it(`isUnPositiveInteger(0.0) === true`, function () {
    isUnPositiveInteger(0.0).should.equal(true);
  });

  // '0'
  it(`isUnPositiveInteger('0') === true`, function () {
    isUnPositiveInteger('0').should.equal(true);
  });

  // '0.'
  it(`isUnPositiveInteger('0.') === false`, function () {
    isUnPositiveInteger('0.').should.equal(false);
  });

  // '.0'
  it(`isUnPositiveInteger('.0') === false`, function () {
    isUnPositiveInteger('.0').should.equal(false);
  });

  // '0.0'
  it(`isUnPositiveInteger('0.0') === false`, function () {
    isUnPositiveInteger('0.0').should.equal(false);
  });

  // '.'
  it(`isUnPositiveInteger('.') === false`, function () {
    isUnPositiveInteger('.').should.equal(false);
  });

  // 0
  it(`isUnPositiveInteger(0, {isStrict: true}) === true`, function () {
    isUnPositiveInteger(0, {isStrict: true}).should.equal(true);
  });

  // '0'
  it(`isUnPositiveInteger('0', {isStrict: true}) === false`, function () {
    isUnPositiveInteger('0', {isStrict: true}).should.equal(false);
  });

  // -.3
  it(`isUnPositiveInteger(-.3) === false`, function () {
    isUnPositiveInteger(-.3).should.equal(false);
  });

  // -3
  it(`isUnPositiveInteger(-3) === true`, function () {
    isUnPositiveInteger(-3).should.equal(true);
  });

  // -3.
  it(`isUnPositiveInteger(-3.) === true`, function () {
    isUnPositiveInteger(-3.).should.equal(true);
  });

  // -3.3
  it(`isUnPositiveInteger(-3.3) === false`, function () {
    isUnPositiveInteger(-3.3).should.equal(false);
  });

  // '-.3'
  it(`isUnPositiveInteger('-.3') === false`, function () {
    isUnPositiveInteger('-.3').should.equal(false);
  });

  // '-3'
  it(`isUnPositiveInteger('-3') === true`, function () {
    isUnPositiveInteger('-3').should.equal(true);
  });

  // '-3.'
  it(`isUnPositiveInteger('-3.') === false`, function () {
    isUnPositiveInteger('-3.').should.equal(false);
  });

  // '-3.3'
  it(`isUnPositiveInteger('-3.3') === false`, function () {
    isUnPositiveInteger('-3.3').should.equal(false);
  });

  // '--3'
  it(`isUnPositiveInteger('--3') === false`, function () {
    isUnPositiveInteger('--3').should.equal(false);
  });

  // '-3-3'
  it(`isUnPositiveInteger('-3-3') === false`, function () {
    isUnPositiveInteger('-3-3').should.equal(false);
  });

  // -.3
  it(`isUnPositiveInteger(-.3, {isStrict: true}) === false`, function () {
    isUnPositiveInteger(-.3, {isStrict: true}).should.equal(false);
  });

  // -3
  it(`isUnPositiveInteger(-3, {isStrict: true}) === true`, function () {
    isUnPositiveInteger(-3, {isStrict: true}).should.equal(true);
  });

  // -3.
  it(`isUnPositiveInteger(-3., {isStrict: true}) === true`, function () {
    isUnPositiveInteger(-3., {isStrict: true}).should.equal(true);
  });

  // -3.3
  it(`isUnPositiveInteger(-3.3, {isStrict: true}) === false`, function () {
    isUnPositiveInteger(-3.3, {isStrict: true}).should.equal(false);
  });

  // '-.3'
  it(`isUnPositiveInteger('-.3', {isStrict: true}) === false`, function () {
    isUnPositiveInteger('-.3', {isStrict: true}).should.equal(false);
  });

  // '-3'
  it(`isUnPositiveInteger('-3', {isStrict: true}) === false`, function () {
    isUnPositiveInteger('-3', {isStrict: true}).should.equal(false);
  });

  // '-3.'
  it(`isUnPositiveInteger('-3.', {isStrict: true}) === false`, function () {
    isUnPositiveInteger('-3.', {isStrict: true}).should.equal(false);
  });

  // '-3.3'
  it(`isUnPositiveInteger('-3.3', {isStrict: true}) === false`, function () {
    isUnPositiveInteger('-3.3', {isStrict: true}).should.equal(false);
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

  // Object(3)
  it(`isUnPositiveInteger(Object(3)) === false`, function () {
    isUnPositiveInteger(Object(3)).should.equal(false);
  });

  // Object('3')
  it(`isUnPositiveInteger(Object('3')) === false`, function () {
    isUnPositiveInteger(Object('3')).should.equal(false);
  });

  // Object(3)
  it(`isUnPositiveInteger(Object(3), {isStrict: true}) === false`, function () {
    isUnPositiveInteger(Object(3), {isStrict: true}).should.equal(false);
  });

  // Object('3')
  it(`isUnPositiveInteger(Object('3'), {isStrict: true}) === false`, function () {
    isUnPositiveInteger(Object('3'), {isStrict: true}).should.equal(false);
  });

  // Object(-3)
  it(`isUnPositiveInteger(Object(-3)) === true`, function () {
    isUnPositiveInteger(Object(-3)).should.equal(true);
  });

  // Object('-3')
  it(`isUnPositiveInteger(Object('-3')) === true`, function () {
    isUnPositiveInteger(Object('-3')).should.equal(true);
  });

  // Object(-3)
  it(`isUnPositiveInteger(Object(-3), {isStrict: true}) === true`, function () {
    isUnPositiveInteger(Object(-3), {isStrict: true}).should.equal(true);
  });

  // Object('-3')
  it(`isUnPositiveInteger(Object('-3'), {isStrict: true}) === false`, function () {
    isUnPositiveInteger(Object('-3'), {isStrict: true}).should.equal(false);
  });
});
