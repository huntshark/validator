
const isPositiveNumber = require('../src/isPositiveNumber');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isPositiveNumber', function () {
  // .3
  it(`isPositiveNumber(.3) === true`, function () {
    isPositiveNumber(.3).should.equal(true);
  });

  // 0.3
  it(`isPositiveNumber(0.3) === true`, function () {
    isPositiveNumber(0.3).should.equal(true);
  });

  // 0.35
  it(`isPositiveNumber(0.35) === true`, function () {
    isPositiveNumber(0.35).should.equal(true);
  });

  // 0.356
  it(`isPositiveNumber(0.356) === true`, function () {
    isPositiveNumber(0.356).should.equal(true);
  });

  // '.3'
  it(`isPositiveNumber('.3') === true`, function () {
    isPositiveNumber('.3').should.equal(true);
  });

  // '0.3'
  it(`isPositiveNumber('0.3') === true`, function () {
    isPositiveNumber('0.3').should.equal(true);
  });

  // '0.35'
  it(`isPositiveNumber('0.35') === true`, function () {
    isPositiveNumber('0.35').should.equal(true);
  });

  // '0.356'
  it(`isPositiveNumber('0.356') === true`, function () {
    isPositiveNumber('0.356').should.equal(true);
  });

  // '00.356'
  it(`isPositiveNumber('00.356') === false`, function () {
    isPositiveNumber('00.356').should.equal(false);
  });

  // '0.3.56'
  it(`isPositiveNumber('0.3.56') === false`, function () {
    isPositiveNumber('0.3.56').should.equal(false);
  });

  // '0.356.'
  it(`isPositiveNumber('0.356.') === false`, function () {
    isPositiveNumber('0.356.').should.equal(false);
  });

  // .3
  it(`isPositiveNumber(.3, {isStrict: true}) === true`, function () {
    isPositiveNumber(.3, {isStrict: true}).should.equal(true);
  });

  // 0.3
  it(`isPositiveNumber(0.3, {isStrict: true}) === true`, function () {
    isPositiveNumber(0.3, {isStrict: true}).should.equal(true);
  });

  // 0.35
  it(`isPositiveNumber(0.35, {isStrict: true}) === true`, function () {
    isPositiveNumber(0.35, {isStrict: true}).should.equal(true);
  });

  // 0.356
  it(`isPositiveNumber(0.356, {isStrict: true}) === true`, function () {
    isPositiveNumber(0.356, {isStrict: true}).should.equal(true);
  });

  // '.3'
  it(`isPositiveNumber('.3', {isStrict: true}) === false`, function () {
    isPositiveNumber('.3', {isStrict: true}).should.equal(false);
  });

  // '0.3'
  it(`isPositiveNumber('0.3', {isStrict: true}) === false`, function () {
    isPositiveNumber('0.3', {isStrict: true}).should.equal(false);
  });

  // '0.35'
  it(`isPositiveNumber('0.35', {isStrict: true}) === false`, function () {
    isPositiveNumber('0.35', {isStrict: true}).should.equal(false);
  });

  // '0.356'
  it(`isPositiveNumber('0.356', {isStrict: true}) === false`, function () {
    isPositiveNumber('0.356', {isStrict: true}).should.equal(false);
  });

  // 3
  it(`isPositiveNumber(3) === true`, function () {
    isPositiveNumber(3).should.equal(true);
  });

  // 3.5
  it(`isPositiveNumber(3.5) === true`, function () {
    isPositiveNumber(3.5).should.equal(true);
  });

  // 3.56
  it(`isPositiveNumber(3.56) === true`, function () {
    isPositiveNumber(3.56).should.equal(true);
  });

  // 30.56
  it(`isPositiveNumber(30.56) === true`, function () {
    isPositiveNumber(30.56).should.equal(true);
  });

  // 30.
  it(`isPositiveNumber(30.) === true`, function () {
    isPositiveNumber(30.).should.equal(true);
  });

  // '3'
  it(`isPositiveNumber('3') === true`, function () {
    isPositiveNumber('3').should.equal(true);
  });

  // '3.5'
  it(`isPositiveNumber('3.5') === true`, function () {
    isPositiveNumber('3.5').should.equal(true);
  });

  // '3.56'
  it(`isPositiveNumber('3.56') === true`, function () {
    isPositiveNumber('3.56').should.equal(true);
  });

  // '30.56'
  it(`isPositiveNumber('30.56') === true`, function () {
    isPositiveNumber('30.56').should.equal(true);
  });

  // '30.'
  it(`isPositiveNumber('30.') === true`, function () {
    isPositiveNumber('30.').should.equal(true);
  });

  // '30.5.6'
  it(`isPositiveNumber('30.5.6') === false`, function () {
    isPositiveNumber('30.5.6').should.equal(false);
  });

  // '30.56.'
  it(`isPositiveNumber('30.56.') === false`, function () {
    isPositiveNumber('30.56.').should.equal(false);
  });

  // 3
  it(`isPositiveNumber(3, {isStrict: true}) === true`, function () {
    isPositiveNumber(3, {isStrict: true}).should.equal(true);
  });

  // 3.5
  it(`isPositiveNumber(3.5, {isStrict: true}) === true`, function () {
    isPositiveNumber(3.5, {isStrict: true}).should.equal(true);
  });

  // 3.56
  it(`isPositiveNumber(3.56, {isStrict: true}) === true`, function () {
    isPositiveNumber(3.56, {isStrict: true}).should.equal(true);
  });

  // 30.56
  it(`isPositiveNumber(30.56, {isStrict: true}) === true`, function () {
    isPositiveNumber(30.56, {isStrict: true}).should.equal(true);
  });

  // 30.
  it(`isPositiveNumber(30., {isStrict: true}) === true`, function () {
    isPositiveNumber(30., {isStrict: true}).should.equal(true);
  });

  // '3'
  it(`isPositiveNumber('3', {isStrict: true}) === false`, function () {
    isPositiveNumber('3', {isStrict: true}).should.equal(false);
  });

  // '3.5'
  it(`isPositiveNumber('3.5', {isStrict: true}) === false`, function () {
    isPositiveNumber('3.5', {isStrict: true}).should.equal(false);
  });

  // '3.56'
  it(`isPositiveNumber('3.56', {isStrict: true}) === false`, function () {
    isPositiveNumber('3.56', {isStrict: true}).should.equal(false);
  });

  // '30.56'
  it(`isPositiveNumber('30.56', {isStrict: true}) === false`, function () {
    isPositiveNumber('30.56', {isStrict: true}).should.equal(false);
  });

  // '30.'
  it(`isPositiveNumber('30.', {isStrict: true}) === false`, function () {
    isPositiveNumber('30.', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isPositiveNumber(0) === false`, function () {
    isPositiveNumber(0).should.equal(false);
  });

  // +0
  it(`isPositiveNumber(+0) === false`, function () {
    isPositiveNumber(+0).should.equal(false);
  });

  // -0
  it(`isPositiveNumber(-0) === false`, function () {
    isPositiveNumber(-0).should.equal(false);
  });

  // 0.
  it(`isPositiveNumber(0.) === false`, function () {
    isPositiveNumber(0.).should.equal(false);
  });

  // .0
  it(`isPositiveNumber(.0) === false`, function () {
    isPositiveNumber(.0).should.equal(false);
  });

  // '0'
  it(`isPositiveNumber('0') === false`, function () {
    isPositiveNumber('0').should.equal(false);
  });

  // '+0'
  it(`isPositiveNumber('+0') === false`, function () {
    isPositiveNumber('+0').should.equal(false);
  });

  // '-0'
  it(`isPositiveNumber('-0') === false`, function () {
    isPositiveNumber('-0').should.equal(false);
  });

  // '0.'
  it(`isPositiveNumber('0.') === false`, function () {
    isPositiveNumber('0.').should.equal(false);
  });

  // '.'
  it(`isPositiveNumber('.') === false`, function () {
    isPositiveNumber('.').should.equal(false);
  });

  // '.0'
  it(`isPositiveNumber('.0') === false`, function () {
    isPositiveNumber('.0').should.equal(false);
  });

  // 0
  it(`isPositiveNumber(0, {isStrict: true}) === false`, function () {
    isPositiveNumber(0, {isStrict: true}).should.equal(false);
  });

  // '0'
  it(`isPositiveNumber('0', {isStrict: true}) === false`, function () {
    isPositiveNumber('0', {isStrict: true}).should.equal(false);
  });

  // -.3
  it(`isPositiveNumber(-.3) === false`, function () {
    isPositiveNumber(-.3).should.equal(false);
  });

  // -0.3
  it(`isPositiveNumber(-0.3) === false`, function () {
    isPositiveNumber(-0.3).should.equal(false);
  });

  // -0.35
  it(`isPositiveNumber(-0.35) === false`, function () {
    isPositiveNumber(-0.35).should.equal(false);
  });

  // -0.356
  it(`isPositiveNumber(-0.356) === false`, function () {
    isPositiveNumber(-0.356).should.equal(false);
  });

  // '-.3'
  it(`isPositiveNumber('-.3') === false`, function () {
    isPositiveNumber('-.3').should.equal(false);
  });

  // '-0.3'
  it(`isPositiveNumber('-0.3') === false`, function () {
    isPositiveNumber('-0.3').should.equal(false);
  });

  // '-0.35'
  it(`isPositiveNumber('-0.35') === false`, function () {
    isPositiveNumber('-0.35').should.equal(false);
  });

  // '-0.356'
  it(`isPositiveNumber('-0.356') === false`, function () {
    isPositiveNumber('-0.356').should.equal(false);
  });

  // -.3
  it(`isPositiveNumber(-.3, {isStrict: true}) === false`, function () {
    isPositiveNumber(-.3, {isStrict: true}).should.equal(false);
  });

  // -0.3
  it(`isPositiveNumber(-0.3, {isStrict: true}) === false`, function () {
    isPositiveNumber(-0.3, {isStrict: true}).should.equal(false);
  });

  // -0.35
  it(`isPositiveNumber(-0.35, {isStrict: true}) === false`, function () {
    isPositiveNumber(-0.35, {isStrict: true}).should.equal(false);
  });

  // -0.356
  it(`isPositiveNumber(-0.356, {isStrict: true}) === false`, function () {
    isPositiveNumber(-0.356, {isStrict: true}).should.equal(false);
  });

  // '-.3'
  it(`isPositiveNumber('-.3', {isStrict: true}) === false`, function () {
    isPositiveNumber('-.3', {isStrict: true}).should.equal(false);
  });

  // '-0.3'
  it(`isPositiveNumber('-0.3', {isStrict: true}) === false`, function () {
    isPositiveNumber('-0.3', {isStrict: true}).should.equal(false);
  });

  // '-0.35'
  it(`isPositiveNumber('-0.35', {isStrict: true}) === false`, function () {
    isPositiveNumber('-0.35', {isStrict: true}).should.equal(false);
  });

  // '-0.356'
  it(`isPositiveNumber('-0.356', {isStrict: true}) === false`, function () {
    isPositiveNumber('-0.356', {isStrict: true}).should.equal(false);
  });

  // -3
  it(`isPositiveNumber(-3) === false`, function () {
    isPositiveNumber(-3).should.equal(false);
  });

  // -3.5
  it(`isPositiveNumber(-3.5) === false`, function () {
    isPositiveNumber(-3.5).should.equal(false);
  });

  // -3.56
  it(`isPositiveNumber(-3.56) === false`, function () {
    isPositiveNumber(-3.56).should.equal(false);
  });

  // -30.56
  it(`isPositiveNumber(-30.56) === false`, function () {
    isPositiveNumber(-30.56).should.equal(false);
  });

  // -30.
  it(`isPositiveNumber(-30.) === false`, function () {
    isPositiveNumber(-30.).should.equal(false);
  });

  // '-3'
  it(`isPositiveNumber('-3') === false`, function () {
    isPositiveNumber('-3').should.equal(false);
  });

  // '-3.5'
  it(`isPositiveNumber('-3.5') === false`, function () {
    isPositiveNumber('-3.5').should.equal(false);
  });

  // '-3.56'
  it(`isPositiveNumber('-3.56') === false`, function () {
    isPositiveNumber('-3.56').should.equal(false);
  });

  // '-30.56'
  it(`isPositiveNumber('-30.56') === false`, function () {
    isPositiveNumber('-30.56').should.equal(false);
  });

  // '-30.'
  it(`isPositiveNumber('-30.') === false`, function () {
    isPositiveNumber('-30.').should.equal(false);
  });

  // -3
  it(`isPositiveNumber(-3, {isStrict: true}) === false`, function () {
    isPositiveNumber(-3, {isStrict: true}).should.equal(false);
  });

  // -3.5
  it(`isPositiveNumber(-3.5, {isStrict: true}) === false`, function () {
    isPositiveNumber(-3.5, {isStrict: true}).should.equal(false);
  });

  // -3.56
  it(`isPositiveNumber(-3.56, {isStrict: true}) === false`, function () {
    isPositiveNumber(-3.56, {isStrict: true}).should.equal(false);
  });

  // -30.56
  it(`isPositiveNumber(-30.56, {isStrict: true}) === false`, function () {
    isPositiveNumber(-30.56, {isStrict: true}).should.equal(false);
  });

  // -30.
  it(`isPositiveNumber(-30., {isStrict: true}) === false`, function () {
    isPositiveNumber(-30., {isStrict: true}).should.equal(false);
  });

  // '-3'
  it(`isPositiveNumber('-3', {isStrict: true}) === false`, function () {
    isPositiveNumber('-3', {isStrict: true}).should.equal(false);
  });

  // '-3.5'
  it(`isPositiveNumber('-3.5', {isStrict: true}) === false`, function () {
    isPositiveNumber('-3.5', {isStrict: true}).should.equal(false);
  });

  // '-3.56'
  it(`isPositiveNumber('-3.56', {isStrict: true}) === false`, function () {
    isPositiveNumber('-3.56', {isStrict: true}).should.equal(false);
  });

  // '-30.56'
  it(`isPositiveNumber('-30.56', {isStrict: true}) === false`, function () {
    isPositiveNumber('-30.56', {isStrict: true}).should.equal(false);
  });

  // '-30.'
  it(`isPositiveNumber('-30.', {isStrict: true}) === false`, function () {
    isPositiveNumber('-30.', {isStrict: true}).should.equal(false);
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

  // Object(3.56)
  it(`isPositiveNumber(Object(3.56)) === true`, function () {
    isPositiveNumber(Object(3.56)).should.equal(true);
  });

  // Object('3.56')
  it(`isPositiveNumber(Object('3.56')) === true`, function () {
    isPositiveNumber(Object('3.56')).should.equal(true);
  });

  // Object(3.56)
  it(`isPositiveNumber(Object(3.56), {isStrict: true}) === true`, function () {
    isPositiveNumber(Object(3.56), {isStrict: true}).should.equal(true);
  });

  // Object('3.56')
  it(`isPositiveNumber(Object('3.56'), {isStrict: true}) === false`, function () {
    isPositiveNumber(Object('3.56'), {isStrict: true}).should.equal(false);
  });
});
