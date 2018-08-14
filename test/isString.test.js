
const isString = require('../src/isString');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isString', function () {
  // ''
  it(`isString('') === true`, function () {
    isString('').should.equal(true);
  });

  // ' '
  it(`isString(' ') === true`, function () {
    isString(' ').should.equal(true);
  });

  // '3'
  it(`isString('3') === true`, function () {
    isString('3').should.equal(true);
  });

  // 3
  it(`isString(3) === false`, function () {
    isString(3).should.equal(false);
  });

  // null
  it(`isString(null) === false`, function () {
    isString(null).should.equal(false);
  });

  // undefined
  it(`isString(undefined) === false`, function () {
    isString(undefined).should.equal(false);
  });

  // true
  it(`isString(true) === false`, function () {
    isString(true).should.equal(false);
  });

  // false
  it(`isString(false) === false`, function () {
    isString(false).should.equal(false);
  });

  // {}
  it(`isString({}) === false`, function () {
    isString({}).should.equal(false);
  });

  // []
  it(`isString([]) === false`, function () {
    isString([]).should.equal(false);
  });

  // Object(3)
  it(`isString(Object(3)) === false`, function () {
    isString(Object(3)).should.equal(false);
  });

  // Object('3')
  it(`isString(Object('3')) === true`, function () {
    isString(Object('3')).should.equal(true);
  });
});
