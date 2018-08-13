
const isBoolean = require('../src/isBoolean');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isBoolean', function () {
  // true
  it(`isBoolean(true) === true`, function () {
    isBoolean(true).should.equal(true);
  });

  // false
  it(`isBoolean(false) === true`, function () {
    isBoolean(false).should.equal(true);
  });

  // null
  it(`isBoolean(null) === false`, function () {
    isBoolean(null).should.equal(false);
  });

  // undefined
  it(`isBoolean(undefined) === false`, function () {
    isBoolean(undefined).should.equal(false);
  });

  // 0
  it(`isBoolean(0) === false`, function () {
    isBoolean(0).should.equal(false);
  });

  // ''
  it(`isBoolean('') === false`, function () {
    isBoolean('').should.equal(false);
  });

  // {}
  it(`isBoolean({}) === false`, function () {
    isBoolean({}).should.equal(false);
  });

  // Object(true)
  it(`isBoolean(Object(true)) === true`, function () {
    isBoolean(Object(true)).should.equal(true);
  });

  // Object(false)
  it(`isBoolean(Object(false)) === true`, function () {
    isBoolean(Object(false)).should.equal(true);
  });

  // Object(null)
  it(`isBoolean(Object(null)) === false`, function () {
    isBoolean(Object(null)).should.equal(false);
  });

  // Object(undefined)
  it(`isBoolean(Object(undefined)) === false`, function () {
    isBoolean(Object(undefined)).should.equal(false);
  });

  // Object(0)
  it(`isBoolean(Object(0)) === false`, function () {
    isBoolean(Object(0)).should.equal(false);
  });

  // Object('')
  it(`isBoolean(Object('')) === false`, function () {
    isBoolean(Object('')).should.equal(false);
  });
});
