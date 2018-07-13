
const isObject = require('../src/isObject');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isObject test', function() {
  // {}
  it(`isObject({}) === true`, function() {
    isObject({}).should.equal(true);
  });

  // []
  it(`isObject([]) === false`, function() {
    isObject([]).should.equal(false);
  });

  // function
  it(`isObject(parseInt) === false`, function() {
    isObject(parseInt).should.equal(false);
  });

  // new Date
  it(`isObject(new Date()) === false`, function() {
    isObject(new Date()).should.equal(false);
  });

  // Object({})
  it(`isObject(Object({})) === true`, function() {
    isObject(Object({})).should.equal(true);
  });

  // Object('3')
  it(`isObject(Object('3')) === false`, function() {
    isObject(Object('3')).should.equal(false);
  });

  // new Object('3')
  it(`isObject(new Object('3')) === false`, function() {
    isObject(new Object('3')).should.equal(false);
  });

  // null
  it(`isObject(null) === false`, function() {
    isObject(null).should.equal(false);
  });

  // Object.create(null)
  it(`isObject(Object.create(null)) === true`, function() {
    isObject(Object.create(null)).should.equal(true);
  });

  // new Class()
  function Class() {};
  it(`isObject(new Class()) === true`, function() {
    isObject(new Class()).should.equal(true);
  });
});
