
const isIpv4 = require('../src/isIpv4');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

// Test
describe('isIpv4 test', function() {
  // '192.168.1.1'
  it(`isIpv4('192.168.1.1') === true`, function() {
    isIpv4('192.168.1.1').should.equal(true);
  });

  // '0.0.0.0'
  it(`isIpv4('0.0.0.0') === true`, function() {
    isIpv4('0.0.0.0').should.equal(true);
  });

  // '0.0.0.1'
  it(`isIpv4('0.0.0.1') === true`, function() {
    isIpv4('0.0.0.1').should.equal(true);
  });

  // '01.1.1.1'
  it(`isIpv4('01.1.1.1') === true`, function() {
    isIpv4('01.1.1.1').should.equal(true);
  });

  // '255.255.255.255'
  it(`isIpv4('255.255.255.255') === true`, function() {
    isIpv4('255.255.255.255').should.equal(true);
  });

  // '127.0.0.1'
  it(`isIpv4('127.0.0.1') === true`, function() {
    isIpv4('127.0.0.1').should.equal(true);
  });

  // '127.0.0'
  it(`isIpv4('127.0.0') === false`, function() {
    isIpv4('127.0.0').should.equal(false);
  });

  // '127.a.0.1'
  it(`isIpv4('127.a.0.1') === false`, function() {
    isIpv4('127.a.0.1').should.equal(false);
  });

  // '127..0.1'
  it(`isIpv4('127..0.1') === false`, function() {
    isIpv4('127..0.1').should.equal(false);
  });

  // '111.111.111.256'
  it(`isIpv4('111.111.111.256') === false`, function() {
    isIpv4('111.111.111.256').should.equal(false);
  });

  // 192
  it(`isIpv4(192) === false`, function() {
    isIpv4(192).should.equal(false);
  });
});
