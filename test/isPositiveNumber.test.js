
const isPositiveNumber = require('../src/isPositiveNumber');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isPositiveNumber test', function() {
  // 3
  it(`isPositiveNumber(3) === true`, function() {
    isPositiveNumber(3).should.equal(true);
  });

  // '3'
  it(`isPositiveNumber('3') === true`, function() {
    isPositiveNumber('3').should.equal(true);
  });

  // '3'
  it(`isPositiveNumber('3', {isStrict: true}) === false`, function() {
    isPositiveNumber('3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isPositiveNumber(0) === false`, function() {
    isPositiveNumber(0).should.equal(false);
  });

  // '0'
  it(`isPositiveNumber('0') === false`, function() {
    isPositiveNumber('0').should.equal(false);
  });

  // -3
  it(`isPositiveNumber(-3) === false`, function() {
    isPositiveNumber(-3).should.equal(false);
  });

  // '-3'
  it(`isPositiveNumber('-3') === false`, function() {
    isPositiveNumber('-3').should.equal(false);
  });
});
