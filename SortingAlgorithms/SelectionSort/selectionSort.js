const arrayFunctions = require('../../Helpers/RandArrayMaker.js');
const performance = require('performance-now');
const totalsize = 10000;

let array = arrayFunctions.shuffle(arrayFunctions.returnArray(totalsize));

function selectionSort(arr) {
  let lowest = undefined;
  let final = [];

  for (let i = 0; i < arr.length - 1; i++) {
    lowest = arr[i];
    for (let x = i + 1; x < arr.length; x++) {
      if (lowest > arr[x]) {
        lowest = arr[x];
      }
    }
    final.push(lowest);
  }
  return final;
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
