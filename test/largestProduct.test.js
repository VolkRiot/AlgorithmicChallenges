const {assert, expect} = require('chai');
const {
  largestMultiple,
  largestMultipleSmarter
} = require('../InterviewQuestion/largestProduct');
const RandArrayMaker = require('../Helpers/RandArrayMaker');

let array = [1, 3, 5, 10];
let bigNegArray = RandArrayMaker.returnArray(0, -1000000);
let lrgProduct = RandArrayMaker.shuffle(largestMultipleSmarter(bigNegArray));

describe("Biggest Product", () => {

  it("Naive: Should return the largest positive product", () => {
    assert.equal(largestMultiple(array), 50)
  });

  it("Smart: Should return largest product", () => {
    array = [-100, 2, 42, 100];
    assert.equal(largestMultipleSmarter(array), 4200);
  });

  it("Smart: Should return the highest product of two negative numbers", () => {
    array = [-100, 2, 9, 42, -100];
    assert.equal(largestMultipleSmarter(array), 10000);
  });

  it("Smart: Should run effectively even on large neg datasets", () => {
    assert.equal(largestMultipleSmarter(bigNegArray), 999999000000)
  });

});
