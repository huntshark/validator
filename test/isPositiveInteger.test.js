
const isPositiveInteger = require('../src/isPositiveInteger');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isPositiveInteger test', function() {
  // 3
  it(`isPositiveInteger(3) === true`, function() {
    isPositiveInteger(3).should.equal(true);
  });

  // '3'
  it(`isPositiveInteger('3') === true`, function() {
    isPositiveInteger('3').should.equal(true);
  });

  // 3.3
  it(`isPositiveInteger(3.3) === false`, function() {
    isPositiveInteger(3.3).should.equal(false);
  });

  // '3.3'
  it(`isPositiveInteger('3.3') === false`, function() {
    isPositiveInteger('3.3').should.to.be.equal(false);
  });

  // -3
  it(`isPositiveInteger(-3) === false`, function() {
    isPositiveInteger(-3).should.equal(false);
  });

  // '-3'
  it(`isPositiveInteger('-3') === false`, function() {
    isPositiveInteger('-3').should.equal(false);
  });

  // -3.3
  it(`isPositiveInteger(-3.3) === false`, function() {
    isPositiveInteger(-3.3).should.equal(false);
  });

  // '-3.3'
  it(`isPositiveInteger('-3.3') === false`, function() {
    isPositiveInteger('-3.3').should.equal(false);
  });

  // '3'
  it(`isPositiveInteger('3', {isStrict: true}) === false`, function() {
    isPositiveInteger('3', {isStrict: true}).should.equal(false);
  });

  // '3.3'
  it(`isPositiveInteger('3.3', {isStrict: true}) === false`, function() {
    isPositiveInteger('3.3', {isStrict: true}).should.equal(false);
  });

  // '-3'
  it(`isPositiveInteger('-3', {isStrict: true}) === false`, function() {
    isPositiveInteger('-3', {isStrict: true}).should.equal(false);
  });

  // '-3.3'
  it(`isPositiveInteger('-3.3', {isStrict: true}) === false`, function() {
    isPositiveInteger('-3.3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isPositiveInteger(0) === false`, function() {
    isPositiveInteger(0).should.equal(false);
  });

  // '0'
  it(`isPositiveInteger('0') === false`, function() {
    isPositiveInteger('0').should.equal(false);
  });
});
