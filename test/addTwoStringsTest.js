const expect = require('chai').expect;
const addTwoStrings = require('../addTwoStrings/addTwoStringSecond.js');

describe('Anagram Detection', () => {
  it('should add two strings', () => {
    expect(addTwoStrings('1234', '5436890')).to.equal(String(1234 + 5436890));
  });

  it('should add two strings of same length', () => {
    expect(addTwoStrings('3452', '5436')).to.equal(String(3452 + 5436));
  });

  it('should add decimals', () => {
    expect(addTwoStrings('55255.5', '50125')).to.equal(String(55255.5 + 50125));
  });

  it('should add decimals', () => {
    expect(addTwoStrings('55255.5', '50125.4536700000')).to.equal(String(55255.5 + 50125.4536700000));
  });
});
