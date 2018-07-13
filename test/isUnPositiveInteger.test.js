
const expect = require('chai').expect;
const isUnPositiveInteger = require('../src/isUnPositiveInteger');

// Test
describe('isUnPositiveInteger test', function() {
  // 3
  it(`isUnPositiveInteger(3) === false`, function() {
    expect(isUnPositiveInteger(3)).to.be.equal(false);
  });

  // '3'
  it(`isUnPositiveInteger('3') === false`, function() {
    expect(isUnPositiveInteger('3')).to.be.equal(false);
  });

  // 3.3
  it(`isUnPositiveInteger(3.3) === false`, function() {
    expect(isUnPositiveInteger(3.3)).to.be.equal(false);
  });

  // '3.3'
  it(`isUnPositiveInteger('3.3') === false`, function() {
    expect(isUnPositiveInteger('3.3')).to.be.equal(false);
  });

  // -3
  it(`isUnPositiveInteger(-3) === true`, function() {
    expect(isUnPositiveInteger(-3)).to.be.equal(true);
  });

  // '-3'
  it(`isUnPositiveInteger('-3') === true`, function() {
    expect(isUnPositiveInteger('-3')).to.be.equal(true);
  });

  // -3.3
  it(`isUnPositiveInteger(-3.3) === false`, function() {
    expect(isUnPositiveInteger(-3.3)).to.be.equal(false);
  });

  // '-3.3'
  it(`isUnPositiveInteger('-3.3') === false`, function() {
    expect(isUnPositiveInteger('-3.3')).to.be.equal(false);
  });

  // '3'
  it(`isUnPositiveInteger('3', {isStrict: true}) === false`, function() {
    expect(isUnPositiveInteger('3', {isStrict: true})).to.be.equal(false);
  });

  // '3.3'
  it(`isUnPositiveInteger('3.3', {isStrict: true}) === false`, function() {
    expect(isUnPositiveInteger('3.3', {isStrict: true})).to.be.equal(false);
  });

  // '-3'
  it(`isUnPositiveInteger('-3', {isStrict: true}) === false`, function() {
    expect(isUnPositiveInteger('-3', {isStrict: true})).to.be.equal(false);
  });

  // '-3.3'
  it(`isUnPositiveInteger('-3.3', {isStrict: true}) === false`, function() {
    expect(isUnPositiveInteger('-3.3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isUnPositiveInteger(0) === true`, function() {
    expect(isUnPositiveInteger(0)).to.be.equal(true);
  });

  // '0'
  it(`isUnPositiveInteger('0') === true`, function() {
    expect(isUnPositiveInteger('0')).to.be.equal(true);
  });
});
