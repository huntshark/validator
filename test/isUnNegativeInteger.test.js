
const isUnNegativeInteger = require('../src/isUnNegativeInteger');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isUnNegativeInteger test', function() {
  // 3
  it(`isUnNegativeInteger(3) === true`, function() {
    isUnNegativeInteger(3).should.equal(true);
  });

  // '3'
  it(`isUnNegativeInteger('3') === true`, function() {
    isUnNegativeInteger('3').should.equal(true);
  });

  // 3.3
  it(`isUnNegativeInteger(3.3) === false`, function() {
    isUnNegativeInteger(3.3).should.equal(false);
  });

  // '3.3'
  it(`isUnNegativeInteger('3.3') === false`, function() {
    isUnNegativeInteger('3.3').should.equal(false);
  });

  // -3
  it(`isUnNegativeInteger(-3) === false`, function() {
    isUnNegativeInteger(-3).should.equal(false);
  });

  // '-3'
  it(`isUnNegativeInteger('-3') === false`, function() {
    isUnNegativeInteger('-3').should.equal(false);
  });

  // -3.3
  it(`isUnNegativeInteger(-3.3) === false`, function() {
    isUnNegativeInteger(-3.3).should.equal(false);
  });

  // '-3.3'
  it(`isUnNegativeInteger('-3.3') === false`, function() {
    isUnNegativeInteger('-3.3').should.equal(false);
  });

  // '3'
  it(`isUnNegativeInteger('3', {isStrict: true}) === false`, function() {
    isUnNegativeInteger('3', {isStrict: true}).should.equal(false);
  });

  // '3.3'
  it(`isUnNegativeInteger('3.3', {isStrict: true}) === false`, function() {
    isUnNegativeInteger('3.3', {isStrict: true}).should.equal(false);
  });

  // '-3'
  it(`isUnNegativeInteger('-3', {isStrict: true}) === false`, function() {
    isUnNegativeInteger('-3', {isStrict: true}).should.equal(false);
  });

  // '-3.3'
  it(`isUnNegativeInteger('-3.3', {isStrict: true}) === false`, function() {
    isUnNegativeInteger('-3.3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isUnNegativeInteger(0) === true`, function() {
    isUnNegativeInteger(0).should.equal(true);
  });

  // '0'
  it(`isUnNegativeInteger('0') === true`, function() {
    isUnNegativeInteger('0').should.equal(true);
  });
});
