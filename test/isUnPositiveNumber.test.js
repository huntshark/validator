
const isUnPositiveNumber = require('../src/isUnPositiveNumber');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isUnPositiveNumber', function () {
  // -.3
  it(`isUnPositiveNumber(-.3) === true`, function () {
    isUnPositiveNumber(-.3).should.equal(true);
  });

  // -0.3
  it(`isUnPositiveNumber(-0.3) === true`, function () {
    isUnPositiveNumber(-0.3).should.equal(true);
  });

  // -0.35
  it(`isUnPositiveNumber(-0.35) === true`, function () {
    isUnPositiveNumber(-0.35).should.equal(true);
  });

  // -0.356
  it(`isUnPositiveNumber(-0.356) === true`, function () {
    isUnPositiveNumber(-0.356).should.equal(true);
  });

  // '-.3'
  it(`isUnPositiveNumber('-.3') === true`, function () {
    isUnPositiveNumber('-.3').should.equal(true);
  });

  // '-0.3'
  it(`isPositiveNumber('-0.3') === true`, function () {
    isUnPositiveNumber('-0.3').should.equal(true);
  });

  // '-0.35'
  it(`isUnPositiveNumber('-0.35') === true`, function () {
    isUnPositiveNumber('-0.35').should.equal(true);
  });

  // '-0.356'
  it(`isUnPositiveNumber('-0.356') === true`, function () {
    isUnPositiveNumber('-0.356').should.equal(true);
  });

  // '-00.356'
  it(`isUnPositiveNumber('-00.356') === false`, function () {
    isUnPositiveNumber('-00.356').should.equal(false);
  });

  // '-0.3.56'
  it(`isUnPositiveNumber('-0.3.56') === false`, function () {
    isUnPositiveNumber('-0.3.56').should.equal(false);
  });

  // '-0.356.'
  it(`isUnPositiveNumber('-0.356.') === false`, function () {
    isUnPositiveNumber('-0.356.').should.equal(false);
  });

  // -.3
  it(`isUnPositiveNumber(-.3, {isStrict: true}) === true`, function () {
    isUnPositiveNumber(-.3, {isStrict: true}).should.equal(true);
  });

  // -0.3
  it(`isUnPositiveNumber(-0.3, {isStrict: true}) === true`, function () {
    isUnPositiveNumber(-0.3, {isStrict: true}).should.equal(true);
  });

  // -0.35
  it(`isUnPositiveNumber(-0.35, {isStrict: true}) === true`, function () {
    isUnPositiveNumber(-0.35, {isStrict: true}).should.equal(true);
  });

  // -0.356
  it(`isUnPositiveNumber(-0.356, {isStrict: true}) === true`, function () {
    isUnPositiveNumber(-0.356, {isStrict: true}).should.equal(true);
  });

  // '-.3'
  it(`isUnPositiveNumber('-.3', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('-.3', {isStrict: true}).should.equal(false);
  });

  // '-0.3'
  it(`isUnPositiveNumber('-0.3', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('-0.3', {isStrict: true}).should.equal(false);
  });

  // '-0.35'
  it(`isUnPositiveNumber('-0.35', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('-0.35', {isStrict: true}).should.equal(false);
  });

  // '-0.356'
  it(`isUnPositiveNumber('-0.356', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('-0.356', {isStrict: true}).should.equal(false);
  });

  // -3
  it(`isUnPositiveNumber(-3) === true`, function () {
    isUnPositiveNumber(-3).should.equal(true);
  });

  // -3.5
  it(`isUnPositiveNumber(-3.5) === true`, function () {
    isUnPositiveNumber(-3.5).should.equal(true);
  });

  // -3.56
  it(`isUnPositiveNumber(-3.56) === true`, function () {
    isUnPositiveNumber(-3.56).should.equal(true);
  });

  // -30.56
  it(`isUnPositiveNumber(-30.56) === true`, function () {
    isUnPositiveNumber(-30.56).should.equal(true);
  });

  // -30.
  it(`isUnPositiveNumber(-30.) === true`, function () {
    isUnPositiveNumber(-30.).should.equal(true);
  });

  // '-3'
  it(`isUnPositiveNumber('-3') === true`, function () {
    isUnPositiveNumber('-3').should.equal(true);
  });

  // '-3.5'
  it(`isUnPositiveNumber('-3.5') === true`, function () {
    isUnPositiveNumber('-3.5').should.equal(true);
  });

  // '-3.56'
  it(`isUnPositiveNumber('-3.56') === true`, function () {
    isUnPositiveNumber('-3.56').should.equal(true);
  });

  // '-30.56'
  it(`isUnPositiveNumber('-30.56') === true`, function () {
    isUnPositiveNumber('-30.56').should.equal(true);
  });

  // '-30.'
  it(`isUnPositiveNumber('-30.') === true`, function () {
    isUnPositiveNumber('-30.').should.equal(true);
  });

  // '-30.5.6'
  it(`isUnPositiveNumber('-30.5.6') === false`, function () {
    isUnPositiveNumber('-30.5.6').should.equal(false);
  });

  // '-30.56.'
  it(`isUnPositiveNumber('-30.56.') === false`, function () {
    isUnPositiveNumber('-30.56.').should.equal(false);
  });

  // -3
  it(`isUnPositiveNumber(-3, {isStrict: true}) === true`, function () {
    isUnPositiveNumber(-3, {isStrict: true}).should.equal(true);
  });

  // -3.5
  it(`isUnPositiveNumber(-3.5, {isStrict: true}) === true`, function () {
    isUnPositiveNumber(-3.5, {isStrict: true}).should.equal(true);
  });

  // -3.56
  it(`isUnPositiveNumber(-3.56, {isStrict: true}) === true`, function () {
    isUnPositiveNumber(-3.56, {isStrict: true}).should.equal(true);
  });

  // -30.56
  it(`isUnPositiveNumber(-30.56, {isStrict: true}) === true`, function () {
    isUnPositiveNumber(-30.56, {isStrict: true}).should.equal(true);
  });

  // -30.
  it(`isUnPositiveNumber(-30., {isStrict: true}) === true`, function () {
    isUnPositiveNumber(-30., {isStrict: true}).should.equal(true);
  });

  // '-3'
  it(`isUnPositiveNumber('-3', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('-3', {isStrict: true}).should.equal(false);
  });

  // '-3.5'
  it(`isUnPositiveNumber('-3.5', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('-3.5', {isStrict: true}).should.equal(false);
  });

  // '-3.56'
  it(`isUnPositiveNumber('-3.56', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('-3.56', {isStrict: true}).should.equal(false);
  });

  // '-30.56'
  it(`isUnPositiveNumber('-30.56', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('-30.56', {isStrict: true}).should.equal(false);
  });

  // '-30.'
  it(`isUnPositiveNumber('-30.', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('-30.', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isUnPositiveNumber(0) === true`, function () {
    isUnPositiveNumber(0).should.equal(true);
  });

  // +0
  it(`isUnPositiveNumber(+0) === true`, function () {
    isUnPositiveNumber(+0).should.equal(true);
  });

  // -0
  it(`isUnPositiveNumber(-0) === true`, function () {
    isUnPositiveNumber(-0).should.equal(true);
  });

  // 0.
  it(`isUnPositiveNumber(0.) === true`, function () {
    isUnPositiveNumber(0.).should.equal(true);
  });

  // .0
  it(`isUnPositiveNumber(.0) === true`, function () {
    isUnPositiveNumber(.0).should.equal(true);
  });

  // '0'
  it(`isUnPositiveNumber('0') === true`, function () {
    isUnPositiveNumber('0').should.equal(true);
  });

  // '+0'
  it(`isUnPositiveNumber('+0') === true`, function () {
    isUnPositiveNumber('+0').should.equal(true);
  });

  // '-0'
  it(`isUnPositiveNumber('-0') === true`, function () {
    isUnPositiveNumber('-0').should.equal(true);
  });

  // '0.'
  it(`isUnPositiveNumber('0.') === true`, function () {
    isUnPositiveNumber('0.').should.equal(true);
  });

  // '.'
  it(`isUnPositiveNumber('.') === false`, function () {
    isUnPositiveNumber('.').should.equal(false);
  });

  // '.0'
  it(`isUnPositiveNumber('.0') === true`, function () {
    isUnPositiveNumber('.0').should.equal(true);
  });

  // 0
  it(`isUnPositiveNumber(0, {isStrict: true}) === true`, function () {
    isUnPositiveNumber(0, {isStrict: true}).should.equal(true);
  });

  // '0'
  it(`isUnPositiveNumber('0', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('0', {isStrict: true}).should.equal(false);
  });

  // .3
  it(`isUnPositiveNumber(.3) === false`, function () {
    isUnPositiveNumber(.3).should.equal(false);
  });

  // 0.3
  it(`isUnPositiveNumber(0.3) === false`, function () {
    isUnPositiveNumber(0.3).should.equal(false);
  });

  // 0.35
  it(`isUnPositiveNumber(0.35) === false`, function () {
    isUnPositiveNumber(0.35).should.equal(false);
  });

  // 0.356
  it(`isUnPositiveNumber(0.356) === false`, function () {
    isUnPositiveNumber(0.356).should.equal(false);
  });

  // '.3'
  it(`isUnPositiveNumber('.3') === false`, function () {
    isUnPositiveNumber('.3').should.equal(false);
  });

  // '0.3'
  it(`isUnPositiveNumber('0.3') === false`, function () {
    isUnPositiveNumber('0.3').should.equal(false);
  });

  // '0.35'
  it(`isUnPositiveNumber('0.35') === false`, function () {
    isUnPositiveNumber('0.35').should.equal(false);
  });

  // '0.356'
  it(`isUnPositiveNumber('0.356') === false`, function () {
    isUnPositiveNumber('0.356').should.equal(false);
  });

  // .3
  it(`isUnPositiveNumber(.3, {isStrict: true}) === false`, function () {
    isUnPositiveNumber(.3, {isStrict: true}).should.equal(false);
  });

  // 0.3
  it(`isUnPositiveNumber(0.3, {isStrict: true}) === false`, function () {
    isUnPositiveNumber(0.3, {isStrict: true}).should.equal(false);
  });

  // 0.35
  it(`isUnPositiveNumber(0.35, {isStrict: true}) === false`, function () {
    isUnPositiveNumber(0.35, {isStrict: true}).should.equal(false);
  });

  // 0.356
  it(`isUnPositiveNumber(0.356, {isStrict: true}) === false`, function () {
    isUnPositiveNumber(0.356, {isStrict: true}).should.equal(false);
  });

  // '.3'
  it(`isUnPositiveNumber('.3', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('.3', {isStrict: true}).should.equal(false);
  });

  // '0.3'
  it(`isUnPositiveNumber('0.3', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('0.3', {isStrict: true}).should.equal(false);
  });

  // '0.35'
  it(`isUnPositiveNumber('0.35', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('0.35', {isStrict: true}).should.equal(false);
  });

  // '0.356'
  it(`isUnPositiveNumber('0.356', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('0.356', {isStrict: true}).should.equal(false);
  });

  // 3
  it(`isUnPositiveNumber(3) === false`, function () {
    isUnPositiveNumber(3).should.equal(false);
  });

  // 3.5
  it(`isUnPositiveNumber(3.5) === false`, function () {
    isUnPositiveNumber(3.5).should.equal(false);
  });

  // 3.56
  it(`isUnPositiveNumber(3.56) === false`, function () {
    isUnPositiveNumber(3.56).should.equal(false);
  });

  // 30.56
  it(`isUnPositiveNumber(30.56) === false`, function () {
    isUnPositiveNumber(30.56).should.equal(false);
  });

  // 30.
  it(`isUnPositiveNumber(30.) === false`, function () {
    isUnPositiveNumber(30.).should.equal(false);
  });

  // '3'
  it(`isUnPositiveNumber('3') === false`, function () {
    isUnPositiveNumber('3').should.equal(false);
  });

  // '3.5'
  it(`isUnPositiveNumber('3.5') === false`, function () {
    isUnPositiveNumber('3.5').should.equal(false);
  });

  // '3.56'
  it(`isUnPositiveNumber('3.56') === false`, function () {
    isUnPositiveNumber('3.56').should.equal(false);
  });

  // '30.56'
  it(`isUnPositiveNumber('30.56') === false`, function () {
    isUnPositiveNumber('30.56').should.equal(false);
  });

  // '30.'
  it(`isUnPositiveNumber('30.') === false`, function () {
    isUnPositiveNumber('30.').should.equal(false);
  });

  // 3
  it(`isUnPositiveNumber(3, {isStrict: true}) === false`, function () {
    isUnPositiveNumber(3, {isStrict: true}).should.equal(false);
  });

  // 3.5
  it(`isUnPositiveNumber(3.5, {isStrict: true}) === false`, function () {
    isUnPositiveNumber(3.5, {isStrict: true}).should.equal(false);
  });

  // 3.56
  it(`isUnPositiveNumber(3.56, {isStrict: true}) === false`, function () {
    isUnPositiveNumber(3.56, {isStrict: true}).should.equal(false);
  });

  // 30.56
  it(`isUnPositiveNumber(30.56, {isStrict: true}) === false`, function () {
    isUnPositiveNumber(30.56, {isStrict: true}).should.equal(false);
  });

  // 30.
  it(`isUnPositiveNumber(30., {isStrict: true}) === false`, function () {
    isUnPositiveNumber(30., {isStrict: true}).should.equal(false);
  });

  // '3'
  it(`isUnPositiveNumber('3', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('3', {isStrict: true}).should.equal(false);
  });

  // '3.5'
  it(`isUnPositiveNumber('3.5', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('3.5', {isStrict: true}).should.equal(false);
  });

  // '3.56'
  it(`isUnPositiveNumber('3.56', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('3.56', {isStrict: true}).should.equal(false);
  });

  // '30.56'
  it(`isUnPositiveNumber('30.56', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('30.56', {isStrict: true}).should.equal(false);
  });

  // '30.'
  it(`isUnPositiveNumber('30.', {isStrict: true}) === false`, function () {
    isUnPositiveNumber('30.', {isStrict: true}).should.equal(false);
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
