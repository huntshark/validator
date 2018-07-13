
const expect = require('chai').expect;
const _isNaN = require('../src/isNaN');

// Test
describe('isNaN test', function() {
  // NaN
  it(`isNaN(NaN) === true`, function() {
    expect(_isNaN(NaN)).to.be.equal(true);
  });

  // null
  it(`isNaN(null) === false`, function() {
    expect(_isNaN(null)).to.be.equal(false);
  });

  // undefined
  it(`isNaN(undefined) === false`, function() {
    expect(_isNaN(undefined)).to.be.equal(false);
  });

  // ''
  it(`isNaN('') === false`, function() {
    expect(_isNaN('')).to.be.equal(false);
  });

  // 3
  it(`isNaN(3) === false`, function() {
    expect(_isNaN('3')).to.be.equal(false);
  });

  // {}
  it(`isNaN({}) === false`, function() {
    expect(_isNaN({})).to.be.equal(false);
  });

  // Number('foo')
  it(`isNaN(Number('foo')) === true`, function() {
    expect(_isNaN(Number('foo'))).to.be.equal(true);
  });

  // Number('3')
  it(`isNaN(Number('3')) === false`, function() {
    expect(_isNaN(Number('3'))).to.be.equal(false);
  });
});
