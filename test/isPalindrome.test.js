const chai = require('chai');
const isPalindrome = require('../InterviewQuestion/isPalindrome');

const assert = chai.assert;

describe("Palindrome checker", () => {
  it("Should be case insensitive return true", () => {
    assert.equal(isPalindrome('raceCar'), true);
  })

  it('Should return false for none palindromes', () => {
    assert.equal(isPalindrome('David is cool'), false);
  });

  it('Should ignore non alpha chars', () => {
    assert.equal(isPalindrome('Race#%!car?'), true);
  });
});
