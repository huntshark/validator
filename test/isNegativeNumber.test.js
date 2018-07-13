
const isNegativeNumber = require('../src/isNegativeNumber');
const chai = require('chai');
const {should} = chai;

chai.use(require('chai-things'));
should();

// Test
describe('isNegativeNumber test', function() {
  // -3
  it(`isNegativeNumber(-3) === true`, function() {
    isNegativeNumber(-3).should.equal(true);
  });

  // '-3'
  it(`isNegativeNumber('-3') === true`, function() {
    isNegativeNumber('-3').should.equal(true);
  });

  // '-3'
  it(`isNegativeNumber('-3', {isStrict: true}) === false`, function() {
    isNegativeNumber('-3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isNegativeNumber(0) === false`, function() {
    isNegativeNumber(0).should.equal(false);
  });

  // '0'
  it(`isNegativeNumber('0') === false`, function() {
    isNegativeNumber('0').should.equal(false);
  });

  // 3
  it(`isNegativeNumber(3) === false`, function() {
    isNegativeNumber(3).should.equal(false);
  });

  // '3'
  it(`isNegativeNumber('3') === false`, function() {
    isNegativeNumber('3').should.equal(false);
  });
});
