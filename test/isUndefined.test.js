
const isUndefined = require('../src/isUndefined');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isUndefined test', function() {
  // undefined
  it(`isUndefined(undefined) === true`, function() {
    isUndefined(undefined).should.equal(true);
  });

  // null
  it(`isUndefined(null) === false`, function() {
    isUndefined(null).should.equal(false);
  });

  // 0
  it(`isUndefined(0) === false`, function() {
    isUndefined(0).should.equal(false);
  });

  // ''
  it(`isUndefined('') === false`, function() {
    isUndefined('').should.equal(false);
  });

  // 'undefined'
  it(`isUndefined('undefined') === false`, function() {
    isUndefined('undefined').should.equal(false);
  });
});
