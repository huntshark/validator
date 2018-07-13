
const expect = require('chai').expect;
const isNull = require('../src/isNull');

// Test
describe('isNull test', function() {
  // null
  it(`isNull(null) === true`, function() {
    expect(isNull(null)).to.be.equal(true);
  });

  // undefined
  it(`isNull(undefined) === false`, function() {
    expect(isNull(undefined)).to.be.equal(false);
  });

  // 0
  it(`isNull(0) === false`, function() {
    expect(isNull(0)).to.be.equal(false);
  });

  // ''
  it(`isNull('') === false`, function() {
    expect(isNull('')).to.be.equal(false);
  });

  // 'null'
  it(`isNull('null') === false`, function() {
    expect(isNull('null')).to.be.equal(false);
  });
});
