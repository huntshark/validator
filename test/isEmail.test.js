
const expect = require('chai').expect;
const isEmail = require('../src/isEmail');

// Test
describe('isEmail test', function() {
  // '575099329@qq.com'
  it(`isEmail('575099329@qq.com') === true`, function() {
    expect(isEmail('575099329@qq.com')).to.be.equal(true);
  });

  // '575099329qq.com'
  it(`isEmail('575099329qq.com') === false`, function() {
    expect(isEmail('575099329qq.com')).to.be.equal(false);
  });

  // '575099329@qq'
  it(`isEmail('575099329@qq') === false`, function() {
    expect(isEmail('575099329@qq')).to.be.equal(false);
  });

  // 'dotx575099329@gmail.com
  it(`isEmail('dotx575099329@gmail.com') === true`, function() {
    expect(isEmail('dotx575099329@gmail.com')).to.be.equal(true);
  });

  // 'dotx575099329@163.com'
  it(`isEmail('dotx575099329@163.com') === true`, function() {
    expect(isEmail('dotx575099329@163.com')).to.be.equal(true);
  });

  // 'dotx575099329@qingniu.co'
  it(`isEmail('dotx575099329@qingniu.co') === true`, function() {
    expect(isEmail('dotx575099329@qingniu.co')).to.be.equal(true);
  });
});
