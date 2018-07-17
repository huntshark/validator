
const isNil = require('../src/isNil');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isNil test', function () {
  // null
  it(`isNil(null) === true`, function () {
    isNil(null).should.equal(true);
  });

  // undefined
  it(`isNil(undefined) === true`, function () {
    isNil(undefined).should.equal(true);
  });

  // 0
  it(`isNil(0) === false`, function () {
    isNil(0).should.equal(false);
  });

  // ''
  it(`isNil('') === false`, function () {
    isNil('').should.equal(false);
  });

  // 'null'
  it(`isNil('null') === false`, function () {
    isNil('null').should.equal(false);
  });

  // 'undefined'
  it(`isNil('undefined') === false`, function () {
    isNil('undefined').should.equal(false);
  });
});
