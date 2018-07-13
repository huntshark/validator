
const isNull = require('../src/isNull');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isNull test', function() {
  // null
  it(`isNull(null) === true`, function() {
    isNull(null).should.equal(true);
  });

  // undefined
  it(`isNull(undefined) === false`, function() {
    isNull(undefined).should.equal(false);
  });

  // 0
  it(`isNull(0) === false`, function() {
    isNull(0).should.equal(false);
  });

  // ''
  it(`isNull('') === false`, function() {
    isNull('').should.equal(false);
  });

  // 'null'
  it(`isNull('null') === false`, function() {
    isNull('null').should.equal(false);
  });
});
