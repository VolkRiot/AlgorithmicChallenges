// Javascript implementation of a recursive quickSort
const arrayFunctions = require('../../Helpers/RandArrayMaker.js');
const performance = require('performance-now');
const totalsize = 10000000;

let array = arrayFunctions.shuffle(arrayFunctions.returnArray(totalsize));

// Quicksort implementation -- Recursive
function quicksort(array) {
  // Condition to exit the recusion
  if (array.length < 2) {
    return array;
  }

  // Choose random pivot point and remove it from the array leaving remaining
  let randI = Math.floor(Math.random() * array.length);
  let pivot = array.splice(randI, 1)[0];

  // Two possible cases, items below or above the pivot
  let above = [];
  let below = [];

  for (let i = 0; i < array.length; i++) {
    array[i] > pivot ? above.push(array[i]) : below.push(array[i]);
  }

  // Concat recursive calls to quicksort with smaller arrays and pivot.
  return [...quicksort(below), pivot, ...quicksort(above)];
}

// Performance benchmark
let start = performance();
quicksort(array);
let end = performance();

console.log(
  `Quick sort of ${totalsize} random intergers took ${(end - start).toFixed(
    3
  )} milliseconds`
);

// Quick sort of 10,000,000 random intergers took 16152.881 milliseconds
// [Finished in 17.134s]
