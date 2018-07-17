
const isTelephone = require('../src/isTelephone');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isTelephone test', function () {
  // '7632614'
  it(`isTelephone('7632614') === true`, function () {
    isTelephone('7632614').should.equal(true);
  });

  // '0550-7632614'
  it(`isTelephone('0550-7632614') === true`, function () {
    isTelephone('0550-7632614').should.equal(true);
  });

  // '185055059334'
  it(`isTelephone('185055059334') === false`, function () {
    isTelephone('185055059334').should.equal(false);
  });

  // 7632614
  it(`isTelephone(7632614) === false`, function () {
    isTelephone(7632614).should.equal(false);
  });

  // '7632614'
  it(`isTelephone('7632614', 'en-US') === false`, function () {
    isTelephone('7632614', 'en-US').should.equal(false);
  });
});
