
const isUnNegativeNumber = require('../src/isUnNegativeNumber');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isUnNegativeNumber test', function() {
  // 3
  it(`isUnNegativeNumber(3) === true`, function() {
    isUnNegativeNumber(3).should.equal(true);
  });

  // '3'
  it(`isUnNegativeNumber('3') === true`, function() {
    isUnNegativeNumber('3').should.equal(true);
  });

  // '3'
  it(`isUnNegativeNumber('3', {isStrict: true}) === false`, function() {
    isUnNegativeNumber('3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isUnNegativeNumber(0) === false`, function() {
    isUnNegativeNumber(0).should.equal(true);
  });

  // '0'
  it(`isUnNegativeNumber('0') === false`, function() {
    isUnNegativeNumber('0').should.equal(true);
  });

  // -3
  it(`isUnNegativeNumber(-3) === false`, function() {
    isUnNegativeNumber(-3).should.equal(false);
  });

  // '-3'
  it(`isUnNegativeNumber('-3') === false`, function() {
    isUnNegativeNumber('-3').should.equal(false);
  });
});
