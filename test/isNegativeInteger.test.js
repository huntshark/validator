
const isNegativeInteger = require('../src/isNegativeInteger');
const chai = require('chai');
const {should} = chai;

chai.use(require('chai-things'));
should();

// Test
describe('isNegativeInteger test', function() {
  // 3
  it(`isNegativeInteger(3) === false`, function() {
    isNegativeInteger(3).should.equal(false);
  });

  // '3'
  it(`isNegativeInteger('3') === false`, function() {
    isNegativeInteger('3').should.equal(false);
  });

  // 3.3
  it(`isNegativeInteger(3.3) === false`, function() {
    isNegativeInteger(3.3).should.equal(false);
  });

  // '3.3'
  it(`isNegativeInteger('3.3') === false`, function() {
    isNegativeInteger('3.3').should.equal(false);
  });

  // -3
  it(`isNegativeInteger(-3) === true`, function() {
    isNegativeInteger(-3).should.equal(true);
  });

  // '-3'
  it(`isNegativeInteger('-3') === true`, function() {
    isNegativeInteger('-3').should.equal(true);
  });

  // -3.3
  it(`isNegativeInteger(-3.3) === false`, function() {
    isNegativeInteger(-3.3).should.equal(false);
  });

  // '-3.3'
  it(`isNegativeInteger('-3.3') === false`, function() {
    isNegativeInteger('-3.3').should.equal(false);
  });

  // '3'
  it(`isNegativeInteger('3', {isStrict: true}) === false`, function() {
    isNegativeInteger('3', {isStrict: true}).should.equal(false);
  });

  // '3.3'
  it(`isNegativeInteger('3.3', {isStrict: true}) === false`, function() {
    isNegativeInteger('3.3', {isStrict: true}).should.equal(false);
  });

  // '-3'
  it(`isNegativeInteger('-3', {isStrict: true}) === false`, function() {
    isNegativeInteger('-3', {isStrict: true}).should.equal(false);
  });

  // '-3.3'
  it(`isNegativeInteger('-3.3', {isStrict: true}) === false`, function() {
    isNegativeInteger('-3.3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isNegativeInteger(0) === false`, function() {
    isNegativeInteger(0).should.equal(false);
  });

  // '0'
  it(`isNegativeInteger('0') === false`, function() {
    isNegativeInteger('0').should.equal(false);
  });
});
