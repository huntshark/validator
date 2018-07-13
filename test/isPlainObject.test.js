
const expect = require('chai').expect;
const isPlainObject = require('../src/isPlainObject');

// Test
describe('isPlainObject test', function() {
  // {}
  it(`isPlainObject({}) === true`, function() {
    expect(isPlainObject({})).to.be.equal(true);
  });

  // []
  it(`isPlainObject([]) === false`, function() {
    expect(isPlainObject([])).to.be.equal(false);
  });

  // function
  it(`isPlainObject(parseInt) === false`, function() {
    expect(isPlainObject(parseInt)).to.be.equal(false);
  });

  // new Date
  it(`isPlainObject(new Date()) === false`, function() {
    expect(isPlainObject(new Date())).to.be.equal(false);
  });

  // Object({})
  it(`isPlainObject(Object({})) === true`, function() {
    expect(isPlainObject(Object({}))).to.be.equal(true);
  });

  // Object('3')
  it(`isPlainObject(Object('3')) === false`, function() {
    expect(isPlainObject(Object('3'))).to.be.equal(false);
  });

  // new Object('3')
  it(`isPlainObject(new Object('3')) === false`, function() {
    expect(isPlainObject(new Object('3'))).to.be.equal(false);
  });

  // null
  it(`isPlainObject(null) === false`, function() {
    expect(isPlainObject(null)).to.be.equal(false);
  });

  // Object.create(null)
  it(`isPlainObject(Object.create(null)) === true`, function() {
    expect(isPlainObject(Object.create(null))).to.be.equal(true);
  });
});
