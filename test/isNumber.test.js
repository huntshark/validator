
const isNumber = require('../src/isNumber');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isNumber test', function () {
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

  // null
  it(`isNumber(null) === false`, function () {
    isNumber(null).should.equal(false);
  });

  // undefined
  it(`isNumber(undefined) === false`, function () {
    isNumber(undefined).should.equal(false);
  });

  // Number(3)
  it(`isNumber(Number(3)) === true`, function () {
    isNumber(Number(3)).should.equal(true);
  });

  // new Number(3)
  it(`isNumber(new Number(3)) === true`, function () {
    isNumber(new Number(3)).should.equal(true);
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
});
