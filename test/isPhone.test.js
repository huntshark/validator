
const isPhone = require('../src/isPhone');
const chai = require('chai');
const {should} = chai;

chai.use(require('chai-things'));
should();

// Test
describe('isPhone test', function() {
  // '18505505933'
  it(`isPhone('18505505933') === true`, function() {
    isPhone('18505505933').should.equal(true);
  });

  // '28505505933'
  it(`isPhone('28505505933') === false`, function() {
    isPhone('28505505933').should.equal(false);
  });

  // '185055059334'
  it(`isPhone('185055059334') === false`, function() {
    isPhone('185055059334').should.equal(false);
  });

  // '1850550593'
  it(`isPhone('1850550593') === false`, function() {
    isPhone('1850550593').should.equal(false);
  });

  // '18505505933'
  it(`isPhone('1850550 933') === false`, function() {
    isPhone('1850550 933').should.equal(false);
  });

  // '18505505933'
  it(`isPhone('1850550-933') === false`, function() {
    isPhone('1850550-933').should.equal(false);
  });

  // '7632614'
  it(`isPhone('7632614') === true`, function() {
    isPhone('7632614').should.equal(true);
  });

  // '0550-7632614'
  it(`isPhone('0550-7632614') === true`, function() {
    isPhone('0550-7632614').should.equal(true);
  });

  // '185055059334'
  it(`isPhone('185055059334') === false`, function() {
    isPhone('185055059334').should.equal(false);
  });
});
