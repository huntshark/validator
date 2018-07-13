
const isBoolean = require('../src/isBoolean');
const chai = require('chai');
const {should} = chai;

chai.use(require('chai-things'));
should();

// Test
describe('isBoolean test', function() {
  // true
  it(`isBoolean(true) === true`, function() {
    isBoolean(true).should.equal(true);
  });

  // false
  it(`isBoolean(false) === true`, function() {
    isBoolean(false).should.equal(true);
  });

  // null
  it(`isBoolean(null) === false`, function() {
    isBoolean(null).should.equal(false);
  });

  // undefined
  it(`isBoolean(undefined) === false`, function() {
    isBoolean(undefined).should.equal(false);
  });

  // 0
  it(`isBoolean(0) === false`, function() {
    isBoolean(0).should.equal(false);
  });

  // ''
  it(`isBoolean('') === false`, function() {
    isBoolean('').should.equal(false);
  });

  // Boolean({})
  it(`isBoolean(Boolean({})) === true`, function() {
    isBoolean(Boolean({})).should.equal(true);
  });

  // new Boolean({})
  it(`isBoolean(new Boolean({})) === true`, function() {
    isBoolean(new Boolean({})).should.equal(true);
  });

  // {}
  it(`isBoolean({}) === false`, function() {
    isBoolean({}).should.equal(false);
  });

  // Object(true)
  it(`isBoolean(Object(true)) === true`, function() {
    isBoolean(Object(true)).should.equal(true);
  });
});
