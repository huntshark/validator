
const expect = require('chai').expect;
const isUnNegativeInteger = require('../src/isUnNegativeInteger');

// Test
describe('isUnNegativeInteger test', function() {
  // 3
  it(`isUnNegativeInteger(3) === true`, function() {
    expect(isUnNegativeInteger(3)).to.be.equal(true);
  });

  // '3'
  it(`isUnNegativeInteger('3') === true`, function() {
    expect(isUnNegativeInteger('3')).to.be.equal(true);
  });

  // 3.3
  it(`isUnNegativeInteger(3.3) === false`, function() {
    expect(isUnNegativeInteger(3.3)).to.be.equal(false);
  });

  // '3.3'
  it(`isUnNegativeInteger('3.3') === false`, function() {
    expect(isUnNegativeInteger('3.3')).to.be.equal(false);
  });

  // -3
  it(`isUnNegativeInteger(-3) === false`, function() {
    expect(isUnNegativeInteger(-3)).to.be.equal(false);
  });

  // '-3'
  it(`isUnNegativeInteger('-3') === false`, function() {
    expect(isUnNegativeInteger('-3')).to.be.equal(false);
  });

  // -3.3
  it(`isUnNegativeInteger(-3.3) === false`, function() {
    expect(isUnNegativeInteger(-3.3)).to.be.equal(false);
  });

  // '-3.3'
  it(`isUnNegativeInteger('-3.3') === false`, function() {
    expect(isUnNegativeInteger('-3.3')).to.be.equal(false);
  });

  // '3'
  it(`isUnNegativeInteger('3', {isStrict: true}) === false`, function() {
    expect(isUnNegativeInteger('3', {isStrict: true})).to.be.equal(false);
  });

  // '3.3'
  it(`isUnNegativeInteger('3.3', {isStrict: true}) === false`, function() {
    expect(isUnNegativeInteger('3.3', {isStrict: true})).to.be.equal(false);
  });

  // '-3'
  it(`isUnNegativeInteger('-3', {isStrict: true}) === false`, function() {
    expect(isUnNegativeInteger('-3', {isStrict: true})).to.be.equal(false);
  });

  // '-3.3'
  it(`isUnNegativeInteger('-3.3', {isStrict: true}) === false`, function() {
    expect(isUnNegativeInteger('-3.3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isUnNegativeInteger(0) === true`, function() {
    expect(isUnNegativeInteger(0)).to.be.equal(true);
  });

  // '0'
  it(`isUnNegativeInteger('0') === true`, function() {
    expect(isUnNegativeInteger('0')).to.be.equal(true);
  });
});
