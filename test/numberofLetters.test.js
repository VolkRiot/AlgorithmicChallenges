const chai = require('chai');
const count_letters = require('../InterviewQuestion/numberofLetters');

const assert = chai.assert;

describe("Number of letters in string", () => {
  it("Should return all letters regardless of case", () => {
    assert.equal(count_letters('eEeE')['e'], 4);
  });
})
