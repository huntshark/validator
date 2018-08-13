
const isUnNegativeNumber = require('../src/isUnNegativeNumber');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isUnNegativeNumber', function () {
  // .3
  it(`isUnNegativeNumber(.3) === true`, function () {
    isUnNegativeNumber(.3).should.equal(true);
  });

  // 0.3
  it(`isUnNegativeNumber(0.3) === true`, function () {
    isUnNegativeNumber(0.3).should.equal(true);
  });

  // 0.35
  it(`isUnNegativeNumber(0.35) === true`, function () {
    isUnNegativeNumber(0.35).should.equal(true);
  });

  // 0.356
  it(`isUnNegativeNumber(0.356) === true`, function () {
    isUnNegativeNumber(0.356).should.equal(true);
  });

  // '.3'
  it(`isUnNegativeNumber('.3') === true`, function () {
    isUnNegativeNumber('.3').should.equal(true);
  });

  // '0.3'
  it(`isUnNegativeNumber('0.3') === true`, function () {
    isUnNegativeNumber('0.3').should.equal(true);
  });

  // '0.35'
  it(`isUnNegativeNumber('0.35') === true`, function () {
    isUnNegativeNumber('0.35').should.equal(true);
  });

  // '0.356'
  it(`isUnNegativeNumber('0.356') === true`, function () {
    isUnNegativeNumber('0.356').should.equal(true);
  });

  // '00.356'
  it(`isUnNegativeNumber('00.356') === false`, function () {
    isUnNegativeNumber('00.356').should.equal(false);
  });

  // '0.3.56'
  it(`isUnNegativeNumber('0.3.56') === false`, function () {
    isUnNegativeNumber('0.3.56').should.equal(false);
  });

  // '0.356.'
  it(`isUnNegativeNumber('0.356.') === false`, function () {
    isUnNegativeNumber('0.356.').should.equal(false);
  });

  // .3
  it(`isUnNegativeNumber(.3, {isStrict: true}) === true`, function () {
    isUnNegativeNumber(.3, {isStrict: true}).should.equal(true);
  });

  // 0.3
  it(`isUnNegativeNumber(0.3, {isStrict: true}) === true`, function () {
    isUnNegativeNumber(0.3, {isStrict: true}).should.equal(true);
  });

  // 0.35
  it(`isUnNegativeNumber(0.35, {isStrict: true}) === true`, function () {
    isUnNegativeNumber(0.35, {isStrict: true}).should.equal(true);
  });

  // 0.356
  it(`isUnNegativeNumber(0.356, {isStrict: true}) === true`, function () {
    isUnNegativeNumber(0.356, {isStrict: true}).should.equal(true);
  });

  // '.3'
  it(`isUnNegativeNumber('.3', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('.3', {isStrict: true}).should.equal(false);
  });

  // '0.3'
  it(`isUnNegativeNumber('0.3', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('0.3', {isStrict: true}).should.equal(false);
  });

  // '0.35'
  it(`isUnNegativeNumber('0.35', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('0.35', {isStrict: true}).should.equal(false);
  });

  // '0.356'
  it(`isUnNegativeNumber('0.356', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('0.356', {isStrict: true}).should.equal(false);
  });

  // 3
  it(`isUnNegativeNumber(3) === true`, function () {
    isUnNegativeNumber(3).should.equal(true);
  });

  // 3.5
  it(`isUnNegativeNumber(3.5) === true`, function () {
    isUnNegativeNumber(3.5).should.equal(true);
  });

  // 3.56
  it(`isUnNegativeNumber(3.56) === true`, function () {
    isUnNegativeNumber(3.56).should.equal(true);
  });

  // 30.56
  it(`isUnNegativeNumber(30.56) === true`, function () {
    isUnNegativeNumber(30.56).should.equal(true);
  });

  // 30.
  it(`isUnNegativeNumber(30.) === true`, function () {
    isUnNegativeNumber(30.).should.equal(true);
  });

  // '3'
  it(`isUnNegativeNumber('3') === true`, function () {
    isUnNegativeNumber('3').should.equal(true);
  });

  // '3.5'
  it(`isUnNegativeNumber('3.5') === true`, function () {
    isUnNegativeNumber('3.5').should.equal(true);
  });

  // '3.56'
  it(`isUnNegativeNumber('3.56') === true`, function () {
    isUnNegativeNumber('3.56').should.equal(true);
  });

  // '30.56'
  it(`isUnNegativeNumber('30.56') === true`, function () {
    isUnNegativeNumber('30.56').should.equal(true);
  });

  // '30.'
  it(`isUnNegativeNumber('30.') === true`, function () {
    isUnNegativeNumber('30.').should.equal(true);
  });

  // '30.5.6'
  it(`isUnNegativeNumber('30.5.6') === false`, function () {
    isUnNegativeNumber('30.5.6').should.equal(false);
  });

  // '30.56.'
  it(`isUnNegativeNumber('30.56.') === false`, function () {
    isUnNegativeNumber('30.56.').should.equal(false);
  });

  // 3
  it(`isUnNegativeNumber(3, {isStrict: true}) === true`, function () {
    isUnNegativeNumber(3, {isStrict: true}).should.equal(true);
  });

  // 3.5
  it(`isUnNegativeNumber(3.5, {isStrict: true}) === true`, function () {
    isUnNegativeNumber(3.5, {isStrict: true}).should.equal(true);
  });

  // 3.56
  it(`isUnNegativeNumber(3.56, {isStrict: true}) === true`, function () {
    isUnNegativeNumber(3.56, {isStrict: true}).should.equal(true);
  });

  // 30.56
  it(`isUnNegativeNumber(30.56, {isStrict: true}) === true`, function () {
    isUnNegativeNumber(30.56, {isStrict: true}).should.equal(true);
  });

  // 30.
  it(`isUnNegativeNumber(30., {isStrict: true}) === true`, function () {
    isUnNegativeNumber(30., {isStrict: true}).should.equal(true);
  });

  // '3'
  it(`isUnNegativeNumber('3', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('3', {isStrict: true}).should.equal(false);
  });

  // '3.5'
  it(`isUnNegativeNumber('3.5', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('3.5', {isStrict: true}).should.equal(false);
  });

  // '3.56'
  it(`isUnNegativeNumber('3.56', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('3.56', {isStrict: true}).should.equal(false);
  });

  // '30.56'
  it(`isUnNegativeNumber('30.56', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('30.56', {isStrict: true}).should.equal(false);
  });

  // '30.'
  it(`isUnNegativeNumber('30.', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('30.', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isUnNegativeNumber(0) === true`, function () {
    isUnNegativeNumber(0).should.equal(true);
  });

  // +0
  it(`isUnNegativeNumber(+0) === true`, function () {
    isUnNegativeNumber(+0).should.equal(true);
  });

  // -0
  it(`isUnNegativeNumber(-0) === true`, function () {
    isUnNegativeNumber(-0).should.equal(true);
  });

  // 0.
  it(`isUnNegativeNumber(0.) === true`, function () {
    isUnNegativeNumber(0.).should.equal(true);
  });

  // .0
  it(`isUnNegativeNumber(.0) === true`, function () {
    isUnNegativeNumber(.0).should.equal(true);
  });

  // '0'
  it(`isUnNegativeNumber('0') === true`, function () {
    isUnNegativeNumber('0').should.equal(true);
  });

  // '+0'
  it(`isUnNegativeNumber('+0') === true`, function () {
    isUnNegativeNumber('+0').should.equal(true);
  });

  // '-0'
  it(`isUnNegativeNumber('-0') === true`, function () {
    isUnNegativeNumber('-0').should.equal(true);
  });

  // '0.'
  it(`isUnNegativeNumber('0.') === true`, function () {
    isUnNegativeNumber('0.').should.equal(true);
  });

  // '.'
  it(`isUnNegativeNumber('.') === false`, function () {
    isUnNegativeNumber('.').should.equal(false);
  });

  // '.0'
  it(`isUnNegativeNumber('.0') === true`, function () {
    isUnNegativeNumber('.0').should.equal(true);
  });

  // 0
  it(`isUnNegativeNumber(0, {isStrict: true}) === true`, function () {
    isUnNegativeNumber(0, {isStrict: true}).should.equal(true);
  });

  // '0'
  it(`isUnNegativeNumber('0', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('0', {isStrict: true}).should.equal(false);
  });

  // -.3
  it(`isUnNegativeNumber(-.3) === false`, function () {
    isUnNegativeNumber(-.3).should.equal(false);
  });

  // -0.3
  it(`isUnNegativeNumber(-0.3) === false`, function () {
    isUnNegativeNumber(-0.3).should.equal(false);
  });

  // -0.35
  it(`isUnNegativeNumber(-0.35) === false`, function () {
    isUnNegativeNumber(-0.35).should.equal(false);
  });

  // -0.356
  it(`isUnNegativeNumber(-0.356) === false`, function () {
    isUnNegativeNumber(-0.356).should.equal(false);
  });

  // '-.3'
  it(`isUnNegativeNumber('-.3') === false`, function () {
    isUnNegativeNumber('-.3').should.equal(false);
  });

  // '-0.3'
  it(`isUnNegativeNumber('-0.3') === false`, function () {
    isUnNegativeNumber('-0.3').should.equal(false);
  });

  // '-0.35'
  it(`isUnNegativeNumber('-0.35') === false`, function () {
    isUnNegativeNumber('-0.35').should.equal(false);
  });

  // '-0.356'
  it(`isUnNegativeNumber('-0.356') === false`, function () {
    isUnNegativeNumber('-0.356').should.equal(false);
  });

  // -.3
  it(`isUnNegativeNumber(-.3, {isStrict: true}) === false`, function () {
    isUnNegativeNumber(-.3, {isStrict: true}).should.equal(false);
  });

  // -0.3
  it(`isUnNegativeNumber(-0.3, {isStrict: true}) === false`, function () {
    isUnNegativeNumber(-0.3, {isStrict: true}).should.equal(false);
  });

  // -0.35
  it(`isUnNegativeNumber(-0.35, {isStrict: true}) === false`, function () {
    isUnNegativeNumber(-0.35, {isStrict: true}).should.equal(false);
  });

  // -0.356
  it(`isUnNegativeNumber(-0.356, {isStrict: true}) === false`, function () {
    isUnNegativeNumber(-0.356, {isStrict: true}).should.equal(false);
  });

  // '-.3'
  it(`isUnNegativeNumber('-.3', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('-.3', {isStrict: true}).should.equal(false);
  });

  // '-0.3'
  it(`isUnNegativeNumber('-0.3', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('-0.3', {isStrict: true}).should.equal(false);
  });

  // '-0.35'
  it(`isUnNegativeNumber('-0.35', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('-0.35', {isStrict: true}).should.equal(false);
  });

  // '-0.356'
  it(`isUnNegativeNumber('-0.356', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('-0.356', {isStrict: true}).should.equal(false);
  });

  // -3
  it(`isUnNegativeNumber(-3) === false`, function () {
    isUnNegativeNumber(-3).should.equal(false);
  });

  // -3.5
  it(`isUnNegativeNumber(-3.5) === false`, function () {
    isUnNegativeNumber(-3.5).should.equal(false);
  });

  // -3.56
  it(`isUnNegativeNumber(-3.56) === false`, function () {
    isUnNegativeNumber(-3.56).should.equal(false);
  });

  // -30.56
  it(`isUnNegativeNumber(-30.56) === false`, function () {
    isUnNegativeNumber(-30.56).should.equal(false);
  });

  // -30.
  it(`isUnNegativeNumber(-30.) === false`, function () {
    isUnNegativeNumber(-30.).should.equal(false);
  });

  // '-3'
  it(`isUnNegativeNumber('-3') === false`, function () {
    isUnNegativeNumber('-3').should.equal(false);
  });

  // '-3.5'
  it(`isUnNegativeNumber('-3.5') === false`, function () {
    isUnNegativeNumber('-3.5').should.equal(false);
  });

  // '-3.56'
  it(`isUnNegativeNumber('-3.56') === false`, function () {
    isUnNegativeNumber('-3.56').should.equal(false);
  });

  // '-30.56'
  it(`isUnNegativeNumber('-30.56') === false`, function () {
    isUnNegativeNumber('-30.56').should.equal(false);
  });

  // '-30.'
  it(`isUnNegativeNumber('-30.') === false`, function () {
    isUnNegativeNumber('-30.').should.equal(false);
  });

  // -3
  it(`isUnNegativeNumber(-3, {isStrict: true}) === false`, function () {
    isUnNegativeNumber(-3, {isStrict: true}).should.equal(false);
  });

  // -3.5
  it(`isUnNegativeNumber(-3.5, {isStrict: true}) === false`, function () {
    isUnNegativeNumber(-3.5, {isStrict: true}).should.equal(false);
  });

  // -3.56
  it(`isUnNegativeNumber(-3.56, {isStrict: true}) === false`, function () {
    isUnNegativeNumber(-3.56, {isStrict: true}).should.equal(false);
  });

  // -30.56
  it(`isUnNegativeNumber(-30.56, {isStrict: true}) === false`, function () {
    isUnNegativeNumber(-30.56, {isStrict: true}).should.equal(false);
  });

  // -30.
  it(`isUnNegativeNumber(-30., {isStrict: true}) === false`, function () {
    isUnNegativeNumber(-30., {isStrict: true}).should.equal(false);
  });

  // '-3'
  it(`isUnNegativeNumber('-3', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('-3', {isStrict: true}).should.equal(false);
  });

  // '-3.5'
  it(`isUnNegativeNumber('-3.5', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('-3.5', {isStrict: true}).should.equal(false);
  });

  // '-3.56'
  it(`isUnNegativeNumber('-3.56', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('-3.56', {isStrict: true}).should.equal(false);
  });

  // '-30.56'
  it(`isUnNegativeNumber('-30.56', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('-30.56', {isStrict: true}).should.equal(false);
  });

  // '-30.'
  it(`isUnNegativeNumber('-30.', {isStrict: true}) === false`, function () {
    isUnNegativeNumber('-30.', {isStrict: true}).should.equal(false);
  });

  // ''
  it(`isUnNegativeNumber('') === false`, function () {
    isUnNegativeNumber('').should.equal(false);
  });

  // '   '
  it(`isUnNegativeNumber('   ') === false`, function () {
    isUnNegativeNumber('   ').should.equal(false);
  });

  // null
  it(`isUnNegativeNumber(null) === false`, function () {
    isUnNegativeNumber(null).should.equal(false);
  });

  // undefined
  it(`isUnNegativeNumber(undefined) === false`, function () {
    isUnNegativeNumber(undefined).should.equal(false);
  });

  // NaN
  it(`isUnNegativeNumber(NaN) === false`, function () {
    isUnNegativeNumber(NaN).should.equal(false);
  });

  // Infinity
  it(`isUnNegativeNumber(Infinity) === false`, function () {
    isUnNegativeNumber(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // -Infinity
  it(`isUnNegativeNumber(-Infinity) === false`, function () {
    isUnNegativeNumber(Number.NEGATIVE_INFINITY).should.equal(false);
  });
});
