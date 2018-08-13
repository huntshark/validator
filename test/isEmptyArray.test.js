
const isEmptyArray = require('../src/isEmptyArray');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isEmptyArray', function () {
  // []
  it(`isEmptyArray([]) === true`, function () {
    isEmptyArray([]).should.equal(true);
  });

  // [1]
  it(`isEmptyArray([1]) === false`, function () {
    isEmptyArray([1]).should.equal(false);
  });

  // {}
  it(`isEmptyArray({}) === false`, function () {
    isEmptyArray({}).should.equal(false);
  });

  // Object({})
  it(`isEmptyArray(Object({})) === false`, function () {
    isEmptyArray(Object({})).should.equal(false);
  });

  // Object([])
  it(`isEmptyArray(Object([])) === true`, function () {
    isEmptyArray(Object([])).should.equal(true);
  });

  // Object([1])
  it(`isEmptyArray(Object([1])) === false`, function () {
    isEmptyArray(Object([1])).should.equal(false);
  });
});
