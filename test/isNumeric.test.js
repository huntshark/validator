
const isNumeric = require('../src/isNumeric');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isNumeric', function () {
  // 3
  it(`isNumeric(3) === true`, function () {
    isNumeric(3).should.equal(true);
  });

  // '3'
  it(`isNumeric('3') === true`, function () {
    isNumeric('3').should.equal(true);
  });

  // 3
  it(`isNumeric(3, {isStrict: true}) === true`, function () {
    isNumeric(3, {isStrict: true}).should.equal(true);
  });

  // '3'
  it(`isNumeric('3', {isStrict: true}) === false`, function () {
    isNumeric('3', {isStrict: true}).should.equal(false);
  });

  // '3a'
  it(`isNumeric('3a') === false`, function () {
    isNumeric('3a').should.equal(false);
  });

  // '3a'
  it(`isNumeric('3a', {isStrict: true}) === false`, function () {
    isNumeric('3a', {isStrict: true}).should.equal(false);
  });

  // NaN
  it(`isNumeric(NaN) === false`, function () {
    isNumeric(NaN).should.equal(false);
  });

  // Infinity
  it(`isNumeric(Infinity) === false`, function () {
    isNumeric(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // -Infinity
  it(`isNumeric(-Infinity) === false`, function () {
    isNumeric(Number.NEGATIVE_INFINITY).should.equal(false);
  });

  // MAX_SAFE_INTEGER
  it(`isNumeric(Number.MAX_SAFE_INTEGER) === true`, function () {
    isNumeric(Number.MAX_SAFE_INTEGER).should.equal(true);
  });

  // MIN_SAFE_INTEGER
  it(`isNumeric(Number.MIN_SAFE_INTEGER) === true`, function () {
    isNumeric(Number.MIN_SAFE_INTEGER).should.equal(true);
  });

  // ''
  it(`isNumeric('') === false`, function () {
    isNumeric('').should.equal(false);
  });

  // '   '
  it(`isNumeric('   ') === false`, function () {
    isNumeric('   ').should.equal(false);
  });

  // null
  it(`isNumeric(null) === false`, function () {
    isNumeric(null).should.equal(false);
  });

  // undefined
  it(`isNumeric(undefined) === false`, function () {
    isNumeric(undefined).should.equal(false);
  });

  // {}
  it(`isNumeric({}) === false`, function () {
    isNumeric({}).should.equal(false);
  });

  // Object(3)
  it(`isNumeric(Object(3)) === true`, function () {
    isNumeric(Object(3)).should.equal(true);
  });

  // Object('3')
  it(`isNumeric(Object('3')) === true`, function () {
    isNumeric(Object('3')).should.equal(true);
  });

  // Object(3)
  it(`isNumeric(Object(3), {isStrict: true}) === true`, function () {
    isNumeric(Object(3), {isStrict: true}).should.equal(true);
  });

  // Object('3')
  it(`isNumeric(Object('3'), {isStrict: true}) === false`, function () {
    isNumeric(Object('3'), {isStrict: true}).should.equal(false);
  });
});
