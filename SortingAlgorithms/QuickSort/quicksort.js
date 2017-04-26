// Javascript implementation of a recursive quickSort

const arrayFunctions = require('./../RandArrayMaker.js');
const performance = require('performance-now');

let array = arrayFunctions.shuffle(arrayFunctions.randomArray(10000000));

// Quicksort implementation -- Recursive
function quicksort(array){

  // Condition to exit the recusion
  if(array.length < 2){
    return array;
  }

  // Choose random pivot point and remove it from the array leaving remaining
  let randI = Math.floor(Math.random() * array.length);
  let pivot = array.splice(randI, 1)[0];

  // Two possible cases, items below or above the pivot
  let above = [];
  let below = [];

  for(let i = 0; i < array.length; i++){
    array[i] > pivot ? above.push(array[i]) : below.push(array[i]);
  }

  let final = [];

  // Concat recursive calls to quicksort with smaller arrays and pivot.
  return final.concat(quicksort(below), pivot, quicksort(above));

}

let start = performance();
quicksort(array);
let end = performance();

console.log(`Quick sort of 10,000,000 random intergers took ${end-start}`);

// Quick sort of 10,000,000 random intergers took 30513.069239
// [Finished in 31.635s]
