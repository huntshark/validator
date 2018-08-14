
const isInteger = require('../src/isInteger');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isInteger', function () {
  // .3
  it(`isInteger(.3) === false`, function () {
    isInteger(.3).should.equal(false);
  });

  // 3
  it(`isInteger(3) === true`, function () {
    isInteger(3).should.equal(true);
  });

  // 3.
  it(`isInteger(3.) === true`, function () {
    isInteger(3.).should.equal(true);
  });

  // 3.3
  it(`isInteger(3.3) === false`, function () {
    isInteger(3.3).should.equal(false);
  });

  // '.3'
  it(`isInteger('.3') === false`, function () {
    isInteger('.3').should.equal(false);
  });

  // '3'
  it(`isInteger('3') === true`, function () {
    isInteger('3').should.equal(true);
  });

  // '3.'
  it(`isInteger('3.') === false`, function () {
    isInteger('3.').should.equal(false);
  });

  // '3.3'
  it(`isInteger('3.3') === false`, function () {
    isInteger('3.3  ').should.equal(false);
  });

  // .3
  it(`isInteger(.3, {isStrict: true}) === false`, function () {
    isInteger(.3, {isStrict: true}).should.equal(false);
  });

  // 3
  it(`isInteger(3, {isStrict: true}) === true`, function () {
    isInteger(3, {isStrict: true}).should.equal(true);
  });

  // 3.
  it(`isInteger(3., {isStrict: true}) === true`, function () {
    isInteger(3., {isStrict: true}).should.equal(true);
  });

  // 3.3
  it(`isInteger(3.3, {isStrict: true}) === false`, function () {
    isInteger(3.3, {isStrict: true}).should.equal(false);
  });

  // '.3'
  it(`isInteger('.3', {isStrict: true}) === false`, function () {
    isInteger('.3', {isStrict: true}).should.equal(false);
  });

  // '3'
  it(`isInteger('3', {isStrict: true}) === false`, function () {
    isInteger('3', {isStrict: true}).should.equal(false);
  });

  // '3.'
  it(`isInteger('3.', {isStrict: true}) === false`, function () {
    isInteger('3.', {isStrict: true}).should.equal(false);
  });

  // '3.3'
  it(`isInteger('3.3', {isStrict: true}) === false`, function () {
    isInteger('3.3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isInteger(0) === true`, function () {
    isInteger(0).should.equal(true);
  });

  // 0.
  it(`isInteger(0.) === true`, function () {
    isInteger(0.).should.equal(true);
  });

  // .0
  it(`isInteger(.0) === true`, function () {
    isInteger(.0).should.equal(true);
  });

  // 0.0
  it(`isInteger(0.0) === true`, function () {
    isInteger(0.0).should.equal(true);
  });

  // '0'
  it(`isInteger('0') === true`, function () {
    isInteger('0').should.equal(true);
  });

  // '0.'
  it(`isInteger('0.') === false`, function () {
    isInteger('0.').should.equal(false);
  });

  // '.0'
  it(`isInteger('.0') === false`, function () {
    isInteger('.0').should.equal(false);
  });

  // '0.0'
  it(`isInteger('0.0') === false`, function () {
    isInteger('0.0').should.equal(false);
  });

  // '.'
  it(`isInteger('.') === false`, function () {
    isInteger('.').should.equal(false);
  });

  // 0
  it(`isInteger(0, {isStrict: true}) === true`, function () {
    isInteger(0, {isStrict: true}).should.equal(true);
  });

  // '0'
  it(`isInteger('0', {isStrict: true}) === false`, function () {
    isInteger('0', {isStrict: true}).should.equal(false);
  });

  // -.3
  it(`isInteger(-.3) === false`, function () {
    isInteger(-.3).should.equal(false);
  });

  // -3
  it(`isInteger(-3) === true`, function () {
    isInteger(-3).should.equal(true);
  });

  // -3.
  it(`isInteger(-3.) === true`, function () {
    isInteger(-3.).should.equal(true);
  });

  // -3.3
  it(`isInteger(-3.3) === false`, function () {
    isInteger(-3.3).should.equal(false);
  });

  // '-.3'
  it(`isInteger('-.3') === false`, function () {
    isInteger('-.3').should.equal(false);
  });

  // '-3'
  it(`isInteger('-3') === true`, function () {
    isInteger('-3').should.equal(true);
  });

  // '-3.'
  it(`isInteger('-3.') === false`, function () {
    isInteger('-3.').should.equal(false);
  });

  // '-3.3'
  it(`isInteger('-3.3') === false`, function () {
    isInteger('-3.3').should.equal(false);
  });

  // '--3'
  it(`isInteger('--3') === false`, function () {
    isInteger('--3').should.equal(false);
  });

  // '-3-3'
  it(`isInteger('-3-3') === false`, function () {
    isInteger('-3-3').should.equal(false);
  });

  // -.3
  it(`isInteger(-.3, {isStrict: true}) === false`, function () {
    isInteger(-.3, {isStrict: true}).should.equal(false);
  });

  // -3
  it(`isInteger(-3, {isStrict: true}) === true`, function () {
    isInteger(-3, {isStrict: true}).should.equal(true);
  });

  // -3.
  it(`isInteger(-3., {isStrict: true}) === true`, function () {
    isInteger(-3., {isStrict: true}).should.equal(true);
  });

  // -3.3
  it(`isInteger(-3.3, {isStrict: true}) === false`, function () {
    isInteger(-3.3, {isStrict: true}).should.equal(false);
  });

  // '-.3'
  it(`isInteger('-.3', {isStrict: true}) === false`, function () {
    isInteger('-.3', {isStrict: true}).should.equal(false);
  });

  // '-3'
  it(`isInteger('-3', {isStrict: true}) === false`, function () {
    isInteger('-3', {isStrict: true}).should.equal(false);
  });

  // '-3.'
  it(`isInteger('-3.', {isStrict: true}) === false`, function () {
    isInteger('-3.', {isStrict: true}).should.equal(false);
  });

  // '-3.3'
  it(`isInteger('-3.3', {isStrict: true}) === false`, function () {
    isInteger('-3.3', {isStrict: true}).should.equal(false);
  });

  // ''
  it(`isInteger('') === false`, function () {
    isInteger('').should.equal(false);
  });

  // '   '
  it(`isInteger('   ') === false`, function () {
    isInteger('   ').should.equal(false);
  });

  // null
  it(`isInteger(null) === false`, function () {
    isInteger(null).should.equal(false);
  });

  // undefined
  it(`isInteger(undefined) === false`, function () {
    isInteger(undefined).should.equal(false);
  });

  // NaN
  it(`isInteger(NaN) === false`, function () {
    isInteger(NaN).should.equal(false);
  });

  // Infinity
  it(`isInteger(Infinity) === false`, function () {
    isInteger(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // -Infinity
  it(`isInteger(-Infinity) === false`, function () {
    isInteger(Number.NEGATIVE_INFINITY).should.equal(false);
  });

  // Object(3)
  it(`isInteger(Object(3)) === true`, function () {
    isInteger(Object(3)).should.equal(true);
  });

  // Object('3')
  it(`isInteger(Object('3')) === true`, function () {
    isInteger(Object('3')).should.equal(true);
  });

  // Object(3)
  it(`isInteger(Object(3), {isStrict: true}) === true`, function () {
    isInteger(Object(3), {isStrict: true}).should.equal(true);
  });

  // Object('3')
  it(`isInteger(Object('3'), {isStrict: true}) === false`, function () {
    isInteger(Object('3'), {isStrict: true}).should.equal(false);
  });

  // Object(-3)
  it(`isInteger(Object(-3)) === true`, function () {
    isInteger(Object(-3)).should.equal(true);
  });

  // Object('-3')
  it(`isInteger(Object('-3')) === true`, function () {
    isInteger(Object('-3')).should.equal(true);
  });

  // Object(-3)
  it(`isInteger(Object(-3), {isStrict: true}) === true`, function () {
    isInteger(Object(-3), {isStrict: true}).should.equal(true);
  });

  // Object('-3')
  it(`isInteger(Object('-3'), {isStrict: true}) === false`, function () {
    isInteger(Object('-3'), {isStrict: true}).should.equal(false);
  });
});
