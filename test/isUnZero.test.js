
const isUnZero = require('../src/isUnZero');
const chai = require('chai');
const {should} = chai;

chai.use(require('chai-things'));
should();

// Test
describe('isZero test', function() {
  // 3
  it(`isUnZero(3) === true`, function() {
    isUnZero(3).should.equal(true);
  });

  // '3'
  it(`isUnZero('3') === true`, function() {
    isUnZero('3').should.equal(true);
  });

  // '3'
  it(`isUnZero('3', {isStrict: true}) === false`, function() {
    isUnZero('3', {isStrict: true}).should.equal(false);
  });

  it(`isUnZero(0) === false`, function() {
    isUnZero(0).should.equal(false);
  });

  it(`isUnZero('0') === false`, function() {
    isUnZero('0').should.equal(false);
  });

  it(`isUnZero('0', {isStrict: true}) === false`, function() {
    isUnZero('0', {isStrict: true}).should.equal(false);
  });

  // NaN
  it(`isUnZero(NaN) === false`, function() {
    isUnZero(NaN).should.equal(false);
  });

  // Infinity
  it(`isUnZero(Infinity) === false`, function() {
    isUnZero(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // -Infinity
  it(`isUnZero(-Infinity) === false`, function() {
    isUnZero(Number.NEGATIVE_INFINITY).should.equal(false);
  });

  // ''
  it(`isUnZero('') === false`, function() {
    isUnZero('').should.equal(false);
  });

  // null
  it(`isUnZero(null) === false`, function() {
    isUnZero(null).should.equal(false);
  });

  // undefined
  it(`isUnZero(undefined) === false`, function() {
    isUnZero(undefined).should.equal(false);
  });

  // Number(0)
  it(`isUnZero(Number(0)) === false`, function() {
    isUnZero(Number(0)).should.equal(false);
  });

  // Number(3)
  it(`isUnZero(Number(3)) === true`, function() {
    isUnZero(Number(3)).should.equal(true);
  });

  // new Number(0)
  it(`isUnZero(new Number(0)) === false`, function() {
    isUnZero(new Number(0)).should.equal(false);
  });

  // new Number('0')
  it(`isUnZero(new Number(0)) === false`, function() {
    isUnZero(new Number('0')).should.equal(false);
  });

  // new Number(3)
  it(`isUnZero(new Number(3)) === true`, function() {
    isUnZero(new Number(3)).should.equal(true);
  });

  // Object(3)
  it(`isUnZero(Object(3)) === true`, function() {
    isUnZero(Object(3)).should.equal(true);
  });

  // Object('3')
  it(`isUnZero(Object('3')) === true`, function() {
    isUnZero(Object('3')).should.equal(true);
  });

  // Object('3')
  it(`isUnZero(Object('3'), {isStrict: true}) === false`, function() {
    isUnZero(Object('3'), {isStrict: true}).should.equal(false);
  });
});
