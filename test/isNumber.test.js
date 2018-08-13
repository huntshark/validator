
const isNumber = require('../src/isNumber');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isNumber', function () {
  // 3
  it(`isNumber(3) === true`, function () {
    isNumber(3).should.equal(true);
  });

  // '3'
  it(`isNumber('3') === false`, function () {
    isNumber('3').should.equal(false);
  });

  // NaN
  it(`isNumber(NaN) === true`, function () {
    isNumber(NaN).should.equal(true);
  });

  // Infinity
  it(`isNumber(Infinity) === true`, function () {
    isNumber(Number.POSITIVE_INFINITY).should.equal(true);
  });

  // -Infinity
  it(`isNumber(-Infinity) === true`, function () {
    isNumber(Number.NEGATIVE_INFINITY).should.equal(true);
  });

  // ''
  it(`isNumber('') === false`, function () {
    isNumber('').should.equal(false);
  });

  // true
  it(`isNumber(true) === false`, function () {
    isNumber(true).should.equal(false);
  });

  // false
  it(`isNumber(false) === false`, function () {
    isNumber(false).should.equal(false);
  });

  // null
  it(`isNumber(null) === false`, function () {
    isNumber(null).should.equal(false);
  });

  // undefined
  it(`isNumber(undefined) === false`, function () {
    isNumber(undefined).should.equal(false);
  });

  // {}
  it(`isNumber({}) === false`, function () {
    isNumber({}).should.equal(false);
  });

  // Object(3)
  it(`isNumber(Object(3)) === true`, function () {
    isNumber(Object(3)).should.equal(true);
  });

  // Object('3')
  it(`isNumber(Object('3')) === false`, function () {
    isNumber(Object('3')).should.equal(false);
  });

  // Object('')
  it(`isNumber(Object('')) === false`, function () {
    isNumber(Object('')).should.equal(false);
  });

  // Object(true)
  it(`isNumber(Object(true)) === false`, function () {
    isNumber(Object(true)).should.equal(false);
  });

  // Object(false)
  it(`isNumber(Object(false)) === false`, function () {
    isNumber(Object(false)).should.equal(false);
  });

  // Object(null)
  it(`isNumber(Object(null)) === false`, function () {
    isNumber(Object(null)).should.equal(false);
  });

  // Object(undefined)
  it(`isNumber(Object(undefined)) === false`, function () {
    isNumber(Object(undefined)).should.equal(false);
  });
});
