
const expect = require('chai').expect;
const isNil = require('../src/isNil');

// Test
describe('isNil test', function() {
  // null
  it(`isNil(null) === true`, function() {
    expect(isNil(null)).to.be.equal(true);
  });

  // undefined
  it(`isNil(undefined) === true`, function() {
    expect(isNil(undefined)).to.be.equal(true);
  });

  // 0
  it(`isNil(0) === false`, function() {
    expect(isNil(0)).to.be.equal(false);
  });

  // ''
  it(`isNil('') === false`, function() {
    expect(isNil('')).to.be.equal(false);
  });

  // 'null'
  it(`isNil('null') === false`, function() {
    expect(isNil('null')).to.be.equal(false);
  });

  // 'undefined'
  it(`isNil('undefined') === false`, function() {
    expect(isNil('undefined')).to.be.equal(false);
  });
});
