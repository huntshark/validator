
const _isNaN = require('../src/isNaN');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isNaN test', function() {
  // NaN
  it(`isNaN(NaN) === true`, function() {
    _isNaN(NaN).should.equal(true);
  });

  // null
  it(`isNaN(null) === false`, function() {
    _isNaN(null).should.equal(false);
  });

  // undefined
  it(`isNaN(undefined) === false`, function() {
    _isNaN(undefined).should.equal(false);
  });

  // ''
  it(`isNaN('') === false`, function() {
    _isNaN('').should.equal(false);
  });

  // 3
  it(`isNaN(3) === false`, function() {
    _isNaN('3').should.equal(false);
  });

  // {}
  it(`isNaN({}) === false`, function() {
    _isNaN({}).should.equal(false);
  });

  // Number('foo')
  it(`isNaN(Number('foo')) === true`, function() {
    _isNaN(Number('foo')).should.equal(true);
  });

  // Number('3')
  it(`isNaN(Number('3')) === false`, function() {
    _isNaN(Number('3')).should.equal(false);
  });
});
