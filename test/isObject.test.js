
const expect = require('chai').expect;
const isObject = require('../src/isObject');

// Test
describe('isObject test', function() {
  // {}
  it(`isObject({}) === true`, function() {
    expect(isObject({})).to.be.equal(true);
  });

  // []
  it(`isObject([]) === false`, function() {
    expect(isObject([])).to.be.equal(false);
  });

  // function
  it(`isObject(parseInt) === false`, function() {
    expect(isObject(parseInt)).to.be.equal(false);
  });

  // new Date
  it(`isObject(new Date()) === false`, function() {
    expect(isObject(new Date())).to.be.equal(false);
  });

  // Object({})
  it(`isObject(Object({})) === true`, function() {
    expect(isObject(Object({}))).to.be.equal(true);
  });

  // Object('3')
  it(`isObject(Object('3')) === false`, function() {
    expect(isObject(Object('3'))).to.be.equal(false);
  });

  // new Object('3')
  it(`isObject(new Object('3')) === false`, function() {
    expect(isObject(new Object('3'))).to.be.equal(false);
  });

  // null
  it(`isObject(null) === false`, function() {
    expect(isObject(null)).to.be.equal(false);
  });

  // Object.create(null)
  it(`isObject(Object.create(null)) === true`, function() {
    expect(isObject(Object.create(null))).to.be.equal(true);
  });

  // new Class()
  function Class() {};
  it(`isObject(new Class()) === true`, function() {
    expect(isObject(new Class())).to.be.equal(true);
  });
});
