
const isUnPositiveInteger = require('../src/isUnPositiveInteger');
const chai = require('chai');
const {should} = chai;

chai.use(require('chai-things'));
should();

// Test
describe('isUnPositiveInteger test', function() {
  // 3
  it(`isUnPositiveInteger(3) === false`, function() {
    isUnPositiveInteger(3).should.equal(false);
  });

  // '3'
  it(`isUnPositiveInteger('3') === false`, function() {
    isUnPositiveInteger('3').should.equal(false);
  });

  // 3.3
  it(`isUnPositiveInteger(3.3) === false`, function() {
    isUnPositiveInteger(3.3).should.equal(false);
  });

  // '3.3'
  it(`isUnPositiveInteger('3.3') === false`, function() {
    isUnPositiveInteger('3.3').should.equal(false);
  });

  // -3
  it(`isUnPositiveInteger(-3) === true`, function() {
    isUnPositiveInteger(-3).should.equal(true);
  });

  // '-3'
  it(`isUnPositiveInteger('-3') === true`, function() {
    isUnPositiveInteger('-3').should.equal(true);
  });

  // -3.3
  it(`isUnPositiveInteger(-3.3) === false`, function() {
    isUnPositiveInteger(-3.3).should.equal(false);
  });

  // '-3.3'
  it(`isUnPositiveInteger('-3.3') === false`, function() {
    isUnPositiveInteger('-3.3').should.equal(false);
  });

  // '3'
  it(`isUnPositiveInteger('3', {isStrict: true}) === false`, function() {
    isUnPositiveInteger('3', {isStrict: true}).should.equal(false);
  });

  // '3.3'
  it(`isUnPositiveInteger('3.3', {isStrict: true}) === false`, function() {
    isUnPositiveInteger('3.3', {isStrict: true}).should.equal(false);
  });

  // '-3'
  it(`isUnPositiveInteger('-3', {isStrict: true}) === false`, function() {
    isUnPositiveInteger('-3', {isStrict: true}).should.equal(false);
  });

  // '-3.3'
  it(`isUnPositiveInteger('-3.3', {isStrict: true}) === false`, function() {
    isUnPositiveInteger('-3.3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isUnPositiveInteger(0) === true`, function() {
    isUnPositiveInteger(0).should.equal(true);
  });

  // '0'
  it(`isUnPositiveInteger('0') === true`, function() {
    isUnPositiveInteger('0').should.equal(true);
  });
});
