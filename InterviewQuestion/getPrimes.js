/* Write a function that returns all the prime numbers up to and including the input number.

For example:

```getPrimes(10) // [1, 2, 3, 5, 7]

getPrimes(31) // [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]```*/

function isPrime(n) {
  let start = 2;

  while (start < n) {
    if ((n % start) === 0) {
      return false
    }
    start++;
  }

  return true;

}

function getPrimes(val) {
  let start = 1;
  let final = [];

  while (start <= val) {
    if (isPrime(start)) {
      final.push(start);
    }

    start++;
  }

  return final;
}

console.log(getPrimes(31))
