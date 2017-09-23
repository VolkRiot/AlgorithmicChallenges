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

function deviationBetter(arr, dev) {
  let queue = [];
  let smallest = Number.POSITIVE_INFINITY;
  let smlIndex = undefined;
  let largest = Number.NEGATIVE_INFINITY;
  let lrgIndex = undefined;
  let maxDiff = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < dev; i++) {
    let val = arr[i];

    if (val < smallest) {
      smallest = val;
      smlIndex = i;
    }

    if (val > largest) {
      largest = val;
      lrgIndex = i;
    }

    maxDiff = Math.max(maxDiff, largest - smallest);

    queue.push(val);
  }

  for (let i = 1; i <= arr.length - dev; i++) {
    console.log('Once');
    let newEndIndex = i + dev;
    let newVal = arr[newEndIndex];

    // maxDiff = difference(arr.slice(i, i + dev));

    if (newVal > largest || lrgIndex < i) {
      largest = newVal;
      lrgIndex = newEndIndex;

      //   if (!(i > smlIndex)) {
      //     maxDiff = Math.max(maxDiff, largest - smallest);
      //   } else {
      //     for (let x = i; x < dev; x++) {
      //       if (arr[x] < smallest) {
      //         smallest = arr[x];
      //         smlIndex = x;
      //       }
      //     }
      //
      maxDiff = difference(arr.slice(i, i + dev));
    } else if (newVal < smallest || smlIndex < i) {
      smallest = newVal;
      smlIndex = newEndIndex;

      // if (!(i > lrgIndex)) {
      //   maxDiff = Math.max(maxDiff, largest - smallest);
      // } else {
      //   for (let x = i; x < dev; x++) {
      //     if (arr[x] > largest) {
      //       largest = arr[x];
      //       lrgIndex = x;
      //     }
      //   }

      maxDiff = difference(arr.slice(i, i + dev));
    }

    console.log('Highest: ' + largest + ' Smallest: ' + smallest);
  }

  return maxDiff;
}

console.log(deviationBetter([6, 9, 4, 7, 4, 1], 3));

// var randArr = shuffledArr(100000);
//
// let start = performance();
// console.log(deviation(randArr, 1000));
// let end = performance();
//
// console.log(
//   `Algo for deviation finished in ${((end - start) / 1000).toFixed(3)} seconds`
// );
