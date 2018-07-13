
const isInteger = require('../src/isInteger');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isInteger test', function() {
  // 3
  it(`isInteger(3) === true`, function() {
    isInteger(3).should.equal(true);
  });

  // '3'
  it(`isInteger('3') === true`, function() {
    isInteger('3').should.equal(true);
  });

  // 3.3
  it(`isInteger(3.3) === false`, function() {
    isInteger(3.3).should.equal(false);
  });

  // '3.3'
  it(`isInteger('3.3') === false`, function() {
    isInteger('3.3').should.equal(false);
  });

  // -3
  it(`isInteger(-3) === true`, function() {
    isInteger(-3).should.equal(true);
  });

  // '-3'
  it(`isInteger('-3') === true`, function() {
    isInteger('-3').should.equal(true);
  });

  // -3.3
  it(`isInteger(-3.3) === false`, function() {
    isInteger(-3.3).should.equal(false);
  });

  // '-3.3'
  it(`isInteger('-3.3') === false`, function() {
    isInteger('-3.3').should.equal(false);
  });

  // '3'
  it(`isInteger('3', {isStrict: true}) === false`, function() {
    isInteger('3', {isStrict: true}).should.equal(false);
  });

  // '3.3'
  it(`isInteger('3.3', {isStrict: true}) === false`, function() {
    isInteger('3.3', {isStrict: true}).should.equal(false);
  });

  // '-3'
  it(`isInteger('-3', {isStrict: true}) === false`, function() {
    isInteger('-3', {isStrict: true}).should.equal(false);
  });

  // '-3.3'
  it(`isInteger('-3.3', {isStrict: true}) === false`, function() {
    isInteger('-3.3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isInteger(0) === true`, function() {
    isInteger(0).should.equal(true);
  });

  // '0'
  it(`isInteger('0') === true`, function() {
    isInteger('0').should.equal(true);
  });
});
