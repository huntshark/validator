
const isEmail = require('../src/isEmail');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isEmail', function () {
  // '575099329@qq.com'
  it(`isEmail('575099329@qq.com') === true`, function () {
    isEmail('575099329@qq.com').should.equal(true);
  });

  // '575099329qq.com'
  it(`isEmail('575099329qq.com') === false`, function () {
    isEmail('575099329qq.com').should.equal(false);
  });

  // '575099329@qq'
  it(`isEmail('575099329@qq') === false`, function () {
    isEmail('575099329@qq').should.equal(false);
  });

  // 'dotx575099329@gmail.com
  it(`isEmail('dotx575099329@gmail.com') === true`, function () {
    isEmail('dotx575099329@gmail.com').should.equal(true);
  });

  // 'dotx575099329@163.com'
  it(`isEmail('dotx575099329@163.com') === true`, function () {
    isEmail('dotx575099329@163.com').should.equal(true);
  });

  // 'dotx575099329@qingniu.co'
  it(`isEmail('dotx575099329@qingniu.co') === true`, function () {
    isEmail('dotx575099329@qingniu.co').should.equal(true);
  });

  // 333
  it(`isEmail(333) === false`, function () {
    isEmail(333).should.equal(false);
  });
});
