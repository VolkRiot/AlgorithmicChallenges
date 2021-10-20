// Javascript implementation of an insertion sort;
const arrayFunctions = require('../../Helpers/RandArrayMaker.js');
const performance = require('performance-now');
const totalsize = 1000000;

let array = arrayFunctions.shuffle(arrayFunctions.returnArray(totalsize));

function insertionSort(arr) {
  for (let index = 0; index < arr.length; index++) {
    let j = index;

    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return arr;
}

let start = performance();
insertionSort(array);
let end = performance();

console.log(
  `Insertion sort of ${totalsize} random intergers took ${(end - start).toFixed(
    3
  )} milliseconds`
);
