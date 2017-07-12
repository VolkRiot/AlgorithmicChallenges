const chai = require('chai');
const count_letters = require('../InterviewQuestion/numberofLetters');

const assert = chai.assert;

describe("Number of letters in string", () => {
  it("Should return all letters regardless of case", () => {
    assert.equal(count_letters('eEeE')['e'], 4);
  });
  it("Should return number of letters using either case in object", () => {
    assert.equal(count_letters('AAaaA')['A'], 5);
  });
})
