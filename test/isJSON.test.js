
const expect = require('chai').expect;
const isJSON = require('../src/isJSON');

// 测试
describe('isJSON 测试集合', function() {
  // '{"a": 3}'
  it(`isJSON('{"a": 3}') 等于 true`, function() {
    expect(isJSON('{"a": 3}')).to.be.equal(true);
  });

  // '[3, 4]'
  it(`isJSON('[3, 4]') 等于 false`, function() {
    expect(isJSON('[3, 4]')).to.be.equal(false);
  });

  // '3'
  it(`isJSON('3') 等于 false`, function() {
    expect(isJSON('3')).to.be.equal(false);
  });

  // null
  it(`isJSON(null) 等于 false`, function() {
    expect(isJSON(null)).to.be.equal(false);
  });

  // {}
  it(`isJSON({}) 等于 false`, function() {
    expect(isJSON({})).to.be.equal(false);
  });
});
