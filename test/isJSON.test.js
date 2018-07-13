
const expect = require('chai').expect;
const isJSON = require('../src/isJSON');

// Test
describe('isJSON test', function() {
  // '{"a": 3}'
  it(`isJSON('{"a": 3}') === true`, function() {
    expect(isJSON('{"a": 3}')).to.be.equal(true);
  });

  // '[3, 4]'
  it(`isJSON('[3, 4]') === false`, function() {
    expect(isJSON('[3, 4]')).to.be.equal(false);
  });

  // '3'
  it(`isJSON('3') === false`, function() {
    expect(isJSON('3')).to.be.equal(false);
  });

  // null
  it(`isJSON(null) === false`, function() {
    expect(isJSON(null)).to.be.equal(false);
  });

  // {}
  it(`isJSON({}) === false`, function() {
    expect(isJSON({})).to.be.equal(false);
  });
});
