const chai = require('chai');
const {
  largestMultiple,
  largestMultipleSmarter
} = require('../InterviewQuestion/largestProduct');

const assert = chai.assert;
let array = [1, 3, 5, 10];

describe("Biggest Product", () => {

  it("Should return the largest positive product", () => {
    assert.equal(largestMultiple(array), 50)
  });

  it("Should return largest product", () => {
    array = [-100, 2, 42, 100];
    assert.equal(largestMultipleSmarter(array), 4200);
  });

  it("Should return the highest product of two negative numbers", () => {
    array = [-100, 2, 9, 42, -100];
    assert.equal(largestMultipleSmarter(array), 10000);
  });

});
