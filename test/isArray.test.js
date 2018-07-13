
const isArray = require('../src/isArray');
const chai = require('chai');
const {should} = chai;

chai.use(require('chai-things'));
should();

// Test
describe('isArray test', function() {
  // []
  it(`isArray([]) === true`, function() {
    isArray([]).should.equal(true);
  });

  // {}
  it(`isArray({}) === false`, function() {
    isArray({}).should.equal(false);
  });

  // function
  it(`isArray(parseInt) === false`, function() {
    isArray(parseInt).should.equal(false);
  });

  // new Date
  it(`isArray(new Date()) === false`, function() {
    isArray(new Date()).should.equal(false);
  });

  // null
  it(`isArray(null) === false`, function() {
    isArray(null).should.equal(false);
  });

  // Object({})
  it(`isArray(Object({})) === false`, function() {
    isArray(Object({})).should.equal(false);
  });

  // Object([])
  it(`isArray(Object([])) === true`, function() {
    isArray(Object([])).should.equal(true);
  });

  // new Object([])
  it(`isArray(new Object([])) === true`, function() {
    isArray(new Object([])).should.equal(true);
  });
});
