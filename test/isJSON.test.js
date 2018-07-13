
const isJSON = require('../src/isJSON');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isJSON test', function() {
  // '{"a": 3}'
  it(`isJSON('{"a": 3}') === true`, function() {
    isJSON('{"a": 3}').should.equal(true);
  });

  // '[3, 4]'
  it(`isJSON('[3, 4]') === false`, function() {
    isJSON('[3, 4]').should.equal(false);
  });

  // '3'
  it(`isJSON('3') === false`, function() {
    isJSON('3').should.equal(false);
  });

  // null
  it(`isJSON(null) === false`, function() {
    isJSON(null).should.equal(false);
  });

  // {}
  it(`isJSON({}) === false`, function() {
    isJSON({}).should.equal(false);
  });
});
