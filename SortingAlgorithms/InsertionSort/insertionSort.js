// Javascript implementation of an insertion sort;
const arrayFunctions = require('../../Helpers/RandArrayMaker.js');
const performance = require('performance-now');
const totalsize = 1000;

let array = arrayFunctions.shuffle(arrayFunctions.returnArray(totalsize));

function insertionSort(arr) {
  let final = [];
  arr.forEach(item => {
    let indx = 0;

    while (true) {
      if (indx > final.length - 1) {
        final.push(item);
        break;
      }

      if (final[indx] > item) {
        final.splice(indx, 0, item);
        break;
      }

      indx++;
    }
  });
  return final;
}

let start = performance();
insertionSort(array);
let end = performance();

console.log(
  `Insertion sort of ${totalsize} random intergers took ${(end - start).toFixed(
    3
  )} milliseconds`
);
