const chai = require('chai');
const isPalindrome = require('../InterviewQuestion/isPalindrome');

const assert = chai.assert;

describe("Palindrome checker", () => {
  it("Should be case insensitive return true", () => {
    assert.equal(isPalindrome('raceCar'), true);
  })
});

// let asnw1 = isPalindrome('raceCar') // true
// let asnw2 = isPalindrome('David is cool') // false
// let asnw3 = isPalindrome('Race!car?') // true
//
// console.log(asnw1)
// console.log(asnw2)
// console.log(asnw3)
