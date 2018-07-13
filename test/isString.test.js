
const isString = require('../src/isString');
const chai = require('chai');
const {should} = chai;

chai.use(require('chai-things'));
should();

// Test
describe('isString test', function() {
  // ''
  it(`isString('') === true`, function() {
    isString('').should.equal(true);
  });

  // '   '
  it(`isString('   ') === true`, function() {
    isString('   ').should.equal(true);
  });

  // '3'
  it(`isString('3') === true`, function() {
    isString('3').should.equal(true);
  });

  // 3
  it(`isString(3) === false`, function() {
    isString(3).should.equal(false);
  });

  // null
  it(`isString(null) === false`, function() {
    isString(null).should.equal(false);
  });

  // undefined
  it(`isString(undefined) === false`, function() {
    isString(undefined).should.equal(false);
  });

  // true
  it(`isString(true) === false`, function() {
    isString(true).should.equal(false);
  });

  // String('3')
  it(`isString(String('3')) === true`, function() {
    isString(String('3')).should.equal(true);
  });

  // new String('3')
  it(`isString(new String('3')) === true`, function() {
    isString(new String('3')).should.equal(true);
  });

  // {}
  it(`isString({}) === false`, function() {
    isString({}).should.equal(false);
  });

  // Object('3')
  it(`isString(Object('3')) === true`, function() {
    isString(Object('3')).should.equal(true);
  });

  // Object(3)
  it(`isString(Object(3)) === false`, function() {
    isString(Object(3)).should.equal(false);
  });
});
