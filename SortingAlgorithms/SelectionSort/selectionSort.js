// Javascript implementation of a selection sort;
const arrayFunctions = require('../../Helpers/RandArrayMaker.js');
const performance = require('performance-now');
const totalsize = 1000;

let array = arrayFunctions.shuffle(arrayFunctions.returnArray(totalsize));

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function selectionSort(arr) {
  let lowestIndx = 0;
  // Loop through our array
  for (let i = 0; i < arr.length - 1; i++) {
    // Assign the first value to be the assumed lowerst to start.
    lowestIndx = i;
    // Loop throught the remaining array and select smallest value
    for (let x = i + 1; x < arr.length; x++) {
      if (arr[lowestIndx] > arr[x]) {
        lowestIndx = x;
      }
    }
    // Completion of one pass push the lowest value;
    swap(arr, i, lowestIndx);
  }
  return arr;
}

// Performance benchmark
let start = performance();
selectionSort(array);
let end = performance();

console.log(
  `Selection sort of ${totalsize} random intergers took ${(end - start).toFixed(
    3
  )} milliseconds`
);
