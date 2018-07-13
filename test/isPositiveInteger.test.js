
const expect = require('chai').expect;
const isPositiveInteger = require('../src/isPositiveInteger');

// Test
describe('isPositiveInteger test', function() {
  // 3
  it(`isPositiveInteger(3) === true`, function() {
    expect(isPositiveInteger(3)).to.be.equal(true);
  });

  // '3'
  it(`isPositiveInteger('3') === true`, function() {
    expect(isPositiveInteger('3')).to.be.equal(true);
  });

  // 3.3
  it(`isPositiveInteger(3.3) === false`, function() {
    expect(isPositiveInteger(3.3)).to.be.equal(false);
  });

  // '3.3'
  it(`isPositiveInteger('3.3') === false`, function() {
    expect(isPositiveInteger('3.3')).to.be.equal(false);
  });

  // -3
  it(`isPositiveInteger(-3) === false`, function() {
    expect(isPositiveInteger(-3)).to.be.equal(false);
  });

  // '-3'
  it(`isPositiveInteger('-3') === false`, function() {
    expect(isPositiveInteger('-3')).to.be.equal(false);
  });

  // -3.3
  it(`isPositiveInteger(-3.3) === false`, function() {
    expect(isPositiveInteger(-3.3)).to.be.equal(false);
  });

  // '-3.3'
  it(`isPositiveInteger('-3.3') === false`, function() {
    expect(isPositiveInteger('-3.3')).to.be.equal(false);
  });

  // '3'
  it(`isPositiveInteger('3', {isStrict: true}) === false`, function() {
    expect(isPositiveInteger('3', {isStrict: true})).to.be.equal(false);
  });

  // '3.3'
  it(`isPositiveInteger('3.3', {isStrict: true}) === false`, function() {
    expect(isPositiveInteger('3.3', {isStrict: true})).to.be.equal(false);
  });

  // '-3'
  it(`isPositiveInteger('-3', {isStrict: true}) === false`, function() {
    expect(isPositiveInteger('-3', {isStrict: true})).to.be.equal(false);
  });

  // '-3.3'
  it(`isPositiveInteger('-3.3', {isStrict: true}) === false`, function() {
    expect(isPositiveInteger('-3.3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isPositiveInteger(0) === false`, function() {
    expect(isPositiveInteger(0)).to.be.equal(false);
  });

  // '0'
  it(`isPositiveInteger('0') === false`, function() {
    expect(isPositiveInteger('0')).to.be.equal(false);
  });
});
