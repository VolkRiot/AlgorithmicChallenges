const chai = require('chai');
const getPrimes = require('../InterviewQuestion/getPrimes');

const assert = chai.assert;

describe("Prime Number checker", () => {
  it("Should return all primes under/including 10", () => {
    assert.deepEqual(getPrimes(10), [ 2, 3, 5, 7 ]);
  });
});
