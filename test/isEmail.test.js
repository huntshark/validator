
const expect = require('chai').expect;
const isEmail = require('../src/isEmail');

// 测试
describe('isEmail 测试集合', function() {
  // '575099329@qq.com'
  it(`isEmail('575099329@qq.com') 等于 true`, function() {
    expect(isEmail('575099329@qq.com')).to.be.equal(true);
  });

  // '575099329qq.com'
  it(`isEmail('575099329qq.com') 等于 false`, function() {
    expect(isEmail('575099329qq.com')).to.be.equal(false);
  });

  // '575099329@qq'
  it(`isEmail('575099329@qq') 等于 false`, function() {
    expect(isEmail('575099329@qq')).to.be.equal(false);
  });

  // 'dotx575099329@gmail.com
  it(`isEmail('dotx575099329@gmail.com') 等于 true`, function() {
    expect(isEmail('dotx575099329@gmail.com')).to.be.equal(true);
  });

  // 'dotx575099329@163.com'
  it(`isEmail('dotx575099329@163.com') 等于 true`, function() {
    expect(isEmail('dotx575099329@163.com')).to.be.equal(true);
  });

  // 'dotx575099329@qingniu.co'
  it(`isEmail('dotx575099329@qingniu.co') 等于 true`, function() {
    expect(isEmail('dotx575099329@qingniu.co')).to.be.equal(true);
  });
});
