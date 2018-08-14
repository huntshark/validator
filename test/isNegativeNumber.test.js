
const isNegativeNumber = require('../src/isNegativeNumber');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isNegativeNumber', function () {
  // -.3
  it(`isNegativeNumber(-.3) === true`, function () {
    isNegativeNumber(-.3).should.equal(true);
  });

  // -0.3
  it(`isNegativeNumber(-0.3) === true`, function () {
    isNegativeNumber(-0.3).should.equal(true);
  });

  // -0.35
  it(`isNegativeNumber(-0.35) === true`, function () {
    isNegativeNumber(-0.35).should.equal(true);
  });

  // -0.356
  it(`isNegativeNumber(-0.356) === true`, function () {
    isNegativeNumber(-0.356).should.equal(true);
  });

  // '-.3'
  it(`isNegativeNumber('-.3') === true`, function () {
    isNegativeNumber('-.3').should.equal(true);
  });

  // '-0.3'
  it(`isPositiveNumber('-0.3') === true`, function () {
    isNegativeNumber('-0.3').should.equal(true);
  });

  // '-0.35'
  it(`isNegativeNumber('-0.35') === true`, function () {
    isNegativeNumber('-0.35').should.equal(true);
  });

  // '-0.356'
  it(`isNegativeNumber('-0.356') === true`, function () {
    isNegativeNumber('-0.356').should.equal(true);
  });

  // '-00.356'
  it(`isNegativeNumber('-00.356') === false`, function () {
    isNegativeNumber('-00.356').should.equal(false);
  });

  // '-0.3.56'
  it(`isNegativeNumber('-0.3.56') === false`, function () {
    isNegativeNumber('-0.3.56').should.equal(false);
  });

  // '-0.356.'
  it(`isNegativeNumber('-0.356.') === false`, function () {
    isNegativeNumber('-0.356.').should.equal(false);
  });

  // -.3
  it(`isNegativeNumber(-.3, {isStrict: true}) === true`, function () {
    isNegativeNumber(-.3, {isStrict: true}).should.equal(true);
  });

  // -0.3
  it(`isNegativeNumber(-0.3, {isStrict: true}) === true`, function () {
    isNegativeNumber(-0.3, {isStrict: true}).should.equal(true);
  });

  // -0.35
  it(`isNegativeNumber(-0.35, {isStrict: true}) === true`, function () {
    isNegativeNumber(-0.35, {isStrict: true}).should.equal(true);
  });

  // -0.356
  it(`isNegativeNumber(-0.356, {isStrict: true}) === true`, function () {
    isNegativeNumber(-0.356, {isStrict: true}).should.equal(true);
  });

  // '-.3'
  it(`isNegativeNumber('-.3', {isStrict: true}) === false`, function () {
    isNegativeNumber('-.3', {isStrict: true}).should.equal(false);
  });

  // '-0.3'
  it(`isNegativeNumber('-0.3', {isStrict: true}) === false`, function () {
    isNegativeNumber('-0.3', {isStrict: true}).should.equal(false);
  });

  // '-0.35'
  it(`isNegativeNumber('-0.35', {isStrict: true}) === false`, function () {
    isNegativeNumber('-0.35', {isStrict: true}).should.equal(false);
  });

  // '-0.356'
  it(`isNegativeNumber('-0.356', {isStrict: true}) === false`, function () {
    isNegativeNumber('-0.356', {isStrict: true}).should.equal(false);
  });

  // -3
  it(`isNegativeNumber(-3) === true`, function () {
    isNegativeNumber(-3).should.equal(true);
  });

  // -3.5
  it(`isNegativeNumber(-3.5) === true`, function () {
    isNegativeNumber(-3.5).should.equal(true);
  });

  // -3.56
  it(`isNegativeNumber(-3.56) === true`, function () {
    isNegativeNumber(-3.56).should.equal(true);
  });

  // -30.56
  it(`isNegativeNumber(-30.56) === true`, function () {
    isNegativeNumber(-30.56).should.equal(true);
  });

  // -30.
  it(`isNegativeNumber(-30.) === true`, function () {
    isNegativeNumber(-30.).should.equal(true);
  });

  // '-3'
  it(`isNegativeNumber('-3') === true`, function () {
    isNegativeNumber('-3').should.equal(true);
  });

  // '-3.5'
  it(`isNegativeNumber('-3.5') === true`, function () {
    isNegativeNumber('-3.5').should.equal(true);
  });

  // '-3.56'
  it(`isNegativeNumber('-3.56') === true`, function () {
    isNegativeNumber('-3.56').should.equal(true);
  });

  // '-30.56'
  it(`isNegativeNumber('-30.56') === true`, function () {
    isNegativeNumber('-30.56').should.equal(true);
  });

  // '-30.'
  it(`isNegativeNumber('-30.') === true`, function () {
    isNegativeNumber('-30.').should.equal(true);
  });

  // '-30.5.6'
  it(`isNegativeNumber('-30.5.6') === false`, function () {
    isNegativeNumber('-30.5.6').should.equal(false);
  });

  // '-30.56.'
  it(`isNegativeNumber('-30.56.') === false`, function () {
    isNegativeNumber('-30.56.').should.equal(false);
  });

  // -3
  it(`isNegativeNumber(-3, {isStrict: true}) === true`, function () {
    isNegativeNumber(-3, {isStrict: true}).should.equal(true);
  });

  // -3.5
  it(`isNegativeNumber(-3.5, {isStrict: true}) === true`, function () {
    isNegativeNumber(-3.5, {isStrict: true}).should.equal(true);
  });

  // -3.56
  it(`isNegativeNumber(-3.56, {isStrict: true}) === true`, function () {
    isNegativeNumber(-3.56, {isStrict: true}).should.equal(true);
  });

  // -30.56
  it(`isNegativeNumber(-30.56, {isStrict: true}) === true`, function () {
    isNegativeNumber(-30.56, {isStrict: true}).should.equal(true);
  });

  // -30.
  it(`isNegativeNumber(-30., {isStrict: true}) === true`, function () {
    isNegativeNumber(-30., {isStrict: true}).should.equal(true);
  });

  // '-3'
  it(`isNegativeNumber('-3', {isStrict: true}) === false`, function () {
    isNegativeNumber('-3', {isStrict: true}).should.equal(false);
  });

  // '-3.5'
  it(`isNegativeNumber('-3.5', {isStrict: true}) === false`, function () {
    isNegativeNumber('-3.5', {isStrict: true}).should.equal(false);
  });

  // '-3.56'
  it(`isNegativeNumber('-3.56', {isStrict: true}) === false`, function () {
    isNegativeNumber('-3.56', {isStrict: true}).should.equal(false);
  });

  // '-30.56'
  it(`isNegativeNumber('-30.56', {isStrict: true}) === false`, function () {
    isNegativeNumber('-30.56', {isStrict: true}).should.equal(false);
  });

  // '-30.'
  it(`isNegativeNumber('-30.', {isStrict: true}) === false`, function () {
    isNegativeNumber('-30.', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isNegativeNumber(0) === false`, function () {
    isNegativeNumber(0).should.equal(false);
  });

  // +0
  it(`isNegativeNumber(+0) === false`, function () {
    isNegativeNumber(+0).should.equal(false);
  });

  // -0
  it(`isNegativeNumber(-0) === false`, function () {
    isNegativeNumber(-0).should.equal(false);
  });

  // 0.
  it(`isNegativeNumber(0.) === false`, function () {
    isNegativeNumber(0.).should.equal(false);
  });

  // .0
  it(`isNegativeNumber(.0) === false`, function () {
    isNegativeNumber(.0).should.equal(false);
  });

  // '0'
  it(`isNegativeNumber('0') === false`, function () {
    isNegativeNumber('0').should.equal(false);
  });

  // '+0'
  it(`isNegativeNumber('+0') === false`, function () {
    isNegativeNumber('+0').should.equal(false);
  });

  // '-0'
  it(`isNegativeNumber('-0') === false`, function () {
    isNegativeNumber('-0').should.equal(false);
  });

  // '0.'
  it(`isNegativeNumber('0.') === false`, function () {
    isNegativeNumber('0.').should.equal(false);
  });

  // '.'
  it(`isNegativeNumber('.') === false`, function () {
    isNegativeNumber('.').should.equal(false);
  });

  // '.0'
  it(`isNegativeNumber('.0') === false`, function () {
    isNegativeNumber('.0').should.equal(false);
  });

  // 0
  it(`isNegativeNumber(0, {isStrict: true}) === false`, function () {
    isNegativeNumber(0, {isStrict: true}).should.equal(false);
  });

  // '0'
  it(`isNegativeNumber('0', {isStrict: true}) === false`, function () {
    isNegativeNumber('0', {isStrict: true}).should.equal(false);
  });

  // .3
  it(`isNegativeNumber(.3) === false`, function () {
    isNegativeNumber(.3).should.equal(false);
  });

  // 0.3
  it(`isNegativeNumber(0.3) === false`, function () {
    isNegativeNumber(0.3).should.equal(false);
  });

  // 0.35
  it(`isNegativeNumber(0.35) === false`, function () {
    isNegativeNumber(0.35).should.equal(false);
  });

  // 0.356
  it(`isNegativeNumber(0.356) === false`, function () {
    isNegativeNumber(0.356).should.equal(false);
  });

  // '.3'
  it(`isNegativeNumber('.3') === false`, function () {
    isNegativeNumber('.3').should.equal(false);
  });

  // '0.3'
  it(`isNegativeNumber('0.3') === false`, function () {
    isNegativeNumber('0.3').should.equal(false);
  });

  // '0.35'
  it(`isNegativeNumber('0.35') === false`, function () {
    isNegativeNumber('0.35').should.equal(false);
  });

  // '0.356'
  it(`isNegativeNumber('0.356') === false`, function () {
    isNegativeNumber('0.356').should.equal(false);
  });

  // .3
  it(`isNegativeNumber(.3, {isStrict: true}) === false`, function () {
    isNegativeNumber(.3, {isStrict: true}).should.equal(false);
  });

  // 0.3
  it(`isNegativeNumber(0.3, {isStrict: true}) === false`, function () {
    isNegativeNumber(0.3, {isStrict: true}).should.equal(false);
  });

  // 0.35
  it(`isNegativeNumber(0.35, {isStrict: true}) === false`, function () {
    isNegativeNumber(0.35, {isStrict: true}).should.equal(false);
  });

  // 0.356
  it(`isNegativeNumber(0.356, {isStrict: true}) === false`, function () {
    isNegativeNumber(0.356, {isStrict: true}).should.equal(false);
  });

  // '.3'
  it(`isNegativeNumber('.3', {isStrict: true}) === false`, function () {
    isNegativeNumber('.3', {isStrict: true}).should.equal(false);
  });

  // '0.3'
  it(`isNegativeNumber('0.3', {isStrict: true}) === false`, function () {
    isNegativeNumber('0.3', {isStrict: true}).should.equal(false);
  });

  // '0.35'
  it(`isNegativeNumber('0.35', {isStrict: true}) === false`, function () {
    isNegativeNumber('0.35', {isStrict: true}).should.equal(false);
  });

  // '0.356'
  it(`isNegativeNumber('0.356', {isStrict: true}) === false`, function () {
    isNegativeNumber('0.356', {isStrict: true}).should.equal(false);
  });

  // 3
  it(`isNegativeNumber(3) === false`, function () {
    isNegativeNumber(3).should.equal(false);
  });

  // 3.5
  it(`isNegativeNumber(3.5) === false`, function () {
    isNegativeNumber(3.5).should.equal(false);
  });

  // 3.56
  it(`isNegativeNumber(3.56) === false`, function () {
    isNegativeNumber(3.56).should.equal(false);
  });

  // 30.56
  it(`isNegativeNumber(30.56) === false`, function () {
    isNegativeNumber(30.56).should.equal(false);
  });

  // 30.
  it(`isNegativeNumber(30.) === false`, function () {
    isNegativeNumber(30.).should.equal(false);
  });

  // '3'
  it(`isNegativeNumber('3') === false`, function () {
    isNegativeNumber('3').should.equal(false);
  });

  // '3.5'
  it(`isNegativeNumber('3.5') === false`, function () {
    isNegativeNumber('3.5').should.equal(false);
  });

  // '3.56'
  it(`isNegativeNumber('3.56') === false`, function () {
    isNegativeNumber('3.56').should.equal(false);
  });

  // '30.56'
  it(`v('30.56') === false`, function () {
    isNegativeNumber('30.56').should.equal(false);
  });

  // '30.'
  it(`isNegativeNumber('30.') === false`, function () {
    isNegativeNumber('30.').should.equal(false);
  });

  // 3
  it(`isNegativeNumber(3, {isStrict: true}) === false`, function () {
    isNegativeNumber(3, {isStrict: true}).should.equal(false);
  });

  // 3.5
  it(`isNegativeNumber(3.5, {isStrict: true}) === false`, function () {
    isNegativeNumber(3.5, {isStrict: true}).should.equal(false);
  });

  // 3.56
  it(`isNegativeNumber(3.56, {isStrict: true}) === false`, function () {
    isNegativeNumber(3.56, {isStrict: true}).should.equal(false);
  });

  // 30.56
  it(`isNegativeNumber(30.56, {isStrict: true}) === false`, function () {
    isNegativeNumber(30.56, {isStrict: true}).should.equal(false);
  });

  // 30.
  it(`isNegativeNumber(30., {isStrict: true}) === false`, function () {
    isNegativeNumber(30., {isStrict: true}).should.equal(false);
  });

  // '3'
  it(`isNegativeNumber('3', {isStrict: true}) === false`, function () {
    isNegativeNumber('3', {isStrict: true}).should.equal(false);
  });

  // '3.5'
  it(`isNegativeNumber('3.5', {isStrict: true}) === false`, function () {
    isNegativeNumber('3.5', {isStrict: true}).should.equal(false);
  });

  // '3.56'
  it(`isNegativeNumber('3.56', {isStrict: true}) === false`, function () {
    isNegativeNumber('3.56', {isStrict: true}).should.equal(false);
  });

  // '30.56'
  it(`isNegativeNumber('30.56', {isStrict: true}) === false`, function () {
    isNegativeNumber('30.56', {isStrict: true}).should.equal(false);
  });

  // '30.'
  it(`isNegativeNumber('30.', {isStrict: true}) === false`, function () {
    isNegativeNumber('30.', {isStrict: true}).should.equal(false);
  });

  // ''
  it(`isNegativeNumber('') === false`, function () {
    isNegativeNumber('').should.equal(false);
  });

  // '   '
  it(`isNegativeNumber('   ') === false`, function () {
    isNegativeNumber('   ').should.equal(false);
  });

  // null
  it(`isNegativeNumber(null) === false`, function () {
    isNegativeNumber(null).should.equal(false);
  });

  // undefined
  it(`isNegativeNumber(undefined) === false`, function () {
    isNegativeNumber(undefined).should.equal(false);
  });

  // NaN
  it(`isNegativeNumber(NaN) === false`, function () {
    isNegativeNumber(NaN).should.equal(false);
  });

  // Infinity
  it(`isNegativeNumber(Infinity) === false`, function () {
    isNegativeNumber(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // -Infinity
  it(`isNegativeNumber(-Infinity) === false`, function () {
    isNegativeNumber(Number.NEGATIVE_INFINITY).should.equal(false);
  });

  // Object(-3.56)
  it(`isNegativeNumber(Object(-3.56)) === true`, function () {
    isNegativeNumber(Object(-3.56)).should.equal(true);
  });

  // Object('-3.56')
  it(`isNegativeNumber(Object('-3.56')) === true`, function () {
    isNegativeNumber(Object('-3.56')).should.equal(true);
  });

  // Object(-3.56)
  it(`isNegativeNumber(Object(-3.56), {isStrict: true}) === true`, function () {
    isNegativeNumber(Object(-3.56), {isStrict: true}).should.equal(true);
  });

  // Object('-3.56')
  it(`isNegativeNumber(Object('-3.56'), {isStrict: true}) === false`, function () {
    isNegativeNumber(Object('-3.56'), {isStrict: true}).should.equal(false);
  });
});
