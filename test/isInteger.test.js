
const expect = require('chai').expect;
const isInteger = require('../src/isInteger');

// Test
describe('isInteger test', function() {
  // 3
  it(`isInteger(3) === true`, function() {
    expect(isInteger(3)).to.be.equal(true);
  });

  // '3'
  it(`isInteger('3') === true`, function() {
    expect(isInteger('3')).to.be.equal(true);
  });

  // 3.3
  it(`isInteger(3.3) === false`, function() {
    expect(isInteger(3.3)).to.be.equal(false);
  });

  // '3.3'
  it(`isInteger('3.3') === false`, function() {
    expect(isInteger('3.3')).to.be.equal(false);
  });

  // -3
  it(`isInteger(-3) === true`, function() {
    expect(isInteger(-3)).to.be.equal(true);
  });

  // '-3'
  it(`isInteger('-3') === true`, function() {
    expect(isInteger('-3')).to.be.equal(true);
  });

  // -3.3
  it(`isInteger(-3.3) === false`, function() {
    expect(isInteger(-3.3)).to.be.equal(false);
  });

  // '-3.3'
  it(`isInteger('-3.3') === false`, function() {
    expect(isInteger('-3.3')).to.be.equal(false);
  });

  // '3'
  it(`isInteger('3', {isStrict: true}) === false`, function() {
    expect(isInteger('3', {isStrict: true})).to.be.equal(false);
  });

  // '3.3'
  it(`isInteger('3.3', {isStrict: true}) === false`, function() {
    expect(isInteger('3.3', {isStrict: true})).to.be.equal(false);
  });

  // '-3'
  it(`isInteger('-3', {isStrict: true}) === false`, function() {
    expect(isInteger('-3', {isStrict: true})).to.be.equal(false);
  });

  // '-3.3'
  it(`isInteger('-3.3', {isStrict: true}) === false`, function() {
    expect(isInteger('-3.3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isInteger(0) === true`, function() {
    expect(isInteger(0)).to.be.equal(true);
  });

  // '0'
  it(`isInteger('0') === true`, function() {
    expect(isInteger('0')).to.be.equal(true);
  });
});
