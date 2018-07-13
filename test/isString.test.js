
const expect = require('chai').expect;
const isString = require('../src/isString');

// Test
describe('isString test', function() {
  // ''
  it(`isString('') === true`, function() {
    expect(isString('')).to.be.equal(true);
  });

  // '   '
  it(`isString('   ') === true`, function() {
    expect(isString('   ')).to.be.equal(true);
  });

  // '3'
  it(`isString('3') === true`, function() {
    expect(isString('3')).to.be.equal(true);
  });

  // 3
  it(`isString(3) === false`, function() {
    expect(isString(3)).to.be.equal(false);
  });

  // null
  it(`isString(null) === false`, function() {
    expect(isString(null)).to.be.equal(false);
  });

  // undefined
  it(`isString(undefined) === false`, function() {
    expect(isString(undefined)).to.be.equal(false);
  });

  // true
  it(`isString(true) === false`, function() {
    expect(isString(true)).to.be.equal(false);
  });

  // String('3')
  it(`isString(String('3')) === true`, function() {
    expect(isString(String('3'))).to.be.equal(true);
  });

  // new String('3')
  it(`isString(new String('3')) === true`, function() {
    expect(isString(new String('3'))).to.be.equal(true);
  });

  // {}
  it(`isString({}) === false`, function() {
    expect(isString({})).to.be.equal(false);
  });

  // Object('3')
  it(`isString(Object('3')) === true`, function() {
    expect(isString(Object('3'))).to.be.equal(true);
  });

  // Object(3)
  it(`isString(Object(3)) === false`, function() {
    expect(isString(Object(3))).to.be.equal(false);
  });
});
