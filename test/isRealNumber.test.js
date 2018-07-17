
const isRealNumber = require('../src/isRealNumber');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isRealNumber test', function () {
  // 3
  it(`isRealNumber(3) === true`, function () {
    isRealNumber(3).should.equal(true);
  });

  // '3'
  it(`isRealNumber('3') === true`, function () {
    isRealNumber('3').should.equal(true);
  });

  // 3
  it(`isRealNumber(3, {isStrict: true}) === true`, function () {
    isRealNumber(3, {isStrict: true}).should.equal(true);
  });

  // '3'
  it(`isRealNumber('3', {isStrict: true}) === false`, function () {
    isRealNumber('3', {isStrict: true}).should.equal(false);
  });

  // '3a'
  it(`isRealNumber('3a') === false`, function () {
    isRealNumber('3a').should.equal(false);
  });

  // NaN
  it(`isRealNumber(NaN) === false`, function () {
    isRealNumber(NaN).should.equal(false);
  });

  // Infinity
  it(`isRealNumber(Infinity) === true`, function () {
    isRealNumber(Number.POSITIVE_INFINITY).should.equal(true);
  });

  // -Infinity
  it(`isRealNumber(-Infinity) === true`, function () {
    isRealNumber(Number.NEGATIVE_INFINITY).should.equal(true);
  });

  // ''
  it(`isRealNumber('') === false`, function () {
    isRealNumber('').should.equal(false);
  });

  // '   '
  it(`isRealNumber('   ') === false`, function () {
    isRealNumber('   ').should.equal(false);
  });

  // null
  it(`isRealNumber(null) === false`, function () {
    isRealNumber(null).should.equal(false);
  });

  // undefined
  it(`isRealNumber(undefined) === false`, function () {
    isRealNumber(undefined).should.equal(false);
  });

  // Number(3)
  it(`isRealNumber(Number(3)) === true`, function () {
    isRealNumber(Number(3)).should.equal(true);
  });

  // new Number(3)
  it(`isRealNumber(new Number(3)) === true`, function () {
    isRealNumber(new Number(3)).should.equal(true);
  });

  // {}
  it(`isRealNumber({}) === false`, function () {
    isRealNumber({}).should.equal(false);
  });

  // Object(3)
  it(`isRealNumber(Object(3)) === true`, function () {
    isRealNumber(Object(3)).should.equal(true);
  });

  // Object('3')
  it(`isRealNumber(Object('3')) === true`, function () {
    isRealNumber(Object('3')).should.equal(true);
  });

  // Object('3')
  it(`isRealNumber(Object('3'), {isStrict: true}) === false`, function () {
    isRealNumber(Object('3'), {isStrict: true}).should.equal(false);
  });
});
