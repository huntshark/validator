
const isUnPositiveNumber = require('../src/isUnPositiveNumber');
const chai = require('chai');
const {should} = chai;

chai.use(require('chai-things'));
should();

// Test
describe('isUnPositiveNumber test', function() {
  // -3
  it(`isUnPositiveNumber(-3) === true`, function() {
    isUnPositiveNumber(-3).should.equal(true);
  });

  // '-3'
  it(`isUnPositiveNumber('-3') === true`, function() {
    isUnPositiveNumber('-3').should.equal(true);
  });

  // '-3'
  it(`isUnPositiveNumber('-3', {isStrict: true}) === false`, function() {
    isUnPositiveNumber('-3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isUnPositiveNumber(0) === true`, function() {
    isUnPositiveNumber(0).should.equal(true);
  });

  // '0'
  it(`isUnPositiveNumber('0') === true`, function() {
    isUnPositiveNumber('0').should.equal(true);
  });

  // 3
  it(`isUnPositiveNumber(3) === false`, function() {
    isUnPositiveNumber(3).should.equal(false);
  });

  // '3'
  it(`isUnPositiveNumber('3') === false`, function() {
    isUnPositiveNumber('3').should.equal(false);
  });
});
