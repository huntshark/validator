
const expect = require('chai').expect;
const isBoolean = require('../src/isBoolean');

// Test
describe('isBoolean test', function() {
  // true
  it(`isBoolean(true) === true`, function() {
    expect(isBoolean(true)).to.be.equal(true);
  });

  // false
  it(`isBoolean(false) === true`, function() {
    expect(isBoolean(false)).to.be.equal(true);
  });

  // null
  it(`isBoolean(null) === false`, function() {
    expect(isBoolean(null)).to.be.equal(false);
  });

  // undefined
  it(`isBoolean(undefined) === false`, function() {
    expect(isBoolean(undefined)).to.be.equal(false);
  });

  // 0
  it(`isBoolean(0) === false`, function() {
    expect(isBoolean(0)).to.be.equal(false);
  });

  // ''
  it(`isBoolean('') === false`, function() {
    expect(isBoolean('')).to.be.equal(false);
  });

  // Boolean({})
  it(`isBoolean(Boolean({})) === true`, function() {
    expect(isBoolean(Boolean({}))).to.be.equal(true);
  });

  // new Boolean({})
  it(`isBoolean(new Boolean({})) === true`, function() {
    expect(isBoolean(new Boolean({}))).to.be.equal(true);
  });

  // {}
  it(`isBoolean({}) === false`, function() {
    expect(isBoolean({})).to.be.equal(false);
  });

  // Object(true)
  it(`isBoolean(Object(true)) === true`, function() {
    expect(isBoolean(Object(true))).to.be.equal(true);
  });
});
