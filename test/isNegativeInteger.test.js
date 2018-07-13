
const expect = require('chai').expect;
const isNegativeInteger = require('../src/isNegativeInteger');

// Test
describe('isNegativeInteger test', function() {
  // 3
  it(`isNegativeInteger(3) === false`, function() {
    expect(isNegativeInteger(3)).to.be.equal(false);
  });

  // '3'
  it(`isNegativeInteger('3') === false`, function() {
    expect(isNegativeInteger('3')).to.be.equal(false);
  });

  // 3.3
  it(`isNegativeInteger(3.3) === false`, function() {
    expect(isNegativeInteger(3.3)).to.be.equal(false);
  });

  // '3.3'
  it(`isNegativeInteger('3.3') === false`, function() {
    expect(isNegativeInteger('3.3')).to.be.equal(false);
  });

  // -3
  it(`isNegativeInteger(-3) === true`, function() {
    expect(isNegativeInteger(-3)).to.be.equal(true);
  });

  // '-3'
  it(`isNegativeInteger('-3') === true`, function() {
    expect(isNegativeInteger('-3')).to.be.equal(true);
  });

  // -3.3
  it(`isNegativeInteger(-3.3) === false`, function() {
    expect(isNegativeInteger(-3.3)).to.be.equal(false);
  });

  // '-3.3'
  it(`isNegativeInteger('-3.3') === false`, function() {
    expect(isNegativeInteger('-3.3')).to.be.equal(false);
  });

  // '3'
  it(`isNegativeInteger('3', {isStrict: true}) === false`, function() {
    expect(isNegativeInteger('3', {isStrict: true})).to.be.equal(false);
  });

  // '3.3'
  it(`isNegativeInteger('3.3', {isStrict: true}) === false`, function() {
    expect(isNegativeInteger('3.3', {isStrict: true})).to.be.equal(false);
  });

  // '-3'
  it(`isNegativeInteger('-3', {isStrict: true}) === false`, function() {
    expect(isNegativeInteger('-3', {isStrict: true})).to.be.equal(false);
  });

  // '-3.3'
  it(`isNegativeInteger('-3.3', {isStrict: true}) === false`, function() {
    expect(isNegativeInteger('-3.3', {isStrict: true})).to.be.equal(false);
  });

  // 0
  it(`isNegativeInteger(0) === false`, function() {
    expect(isNegativeInteger(0)).to.be.equal(false);
  });

  // '0'
  it(`isNegativeInteger('0') === false`, function() {
    expect(isNegativeInteger('0')).to.be.equal(false);
  });
});
