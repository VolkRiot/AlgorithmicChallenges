const { shuffledArr } = require('../Helpers/RandArrayMaker');
const performance = require('performance-now');

function difference(arr) {
  let smallest = Number.POSITIVE_INFINITY;
  let smlIndex = undefined;
  let largest = Number.NEGATIVE_INFINITY;
  let lrgIndex = undefined;

  for (let i = 0; i < arr.length; i++) {
    largest = Math.max(largest, arr[i]);
    smallest = Math.min(smallest, arr[i]);
  }

  return largest - smallest;
}

function deviation(arr, dev) {
  if (arr.length <= 1) {
    return 0;
  }

  var maxDiff = Number.NEGATIVE_INFINITY;

  for (let i = 0; i <= arr.length - dev; i++) {
    maxDiff = Math.max(difference(arr.slice(i, i + dev)));
  }

  return maxDiff;
}

let randArr = shuffledArr(100000);

let start = performance();
console.log(deviation(randArr, 1000));
let end = performance();

console.log(
  `Algo for deviation finished in ${((end - start) / 1000).toFixed(3)} seconds`
);
