// Javascript implementation of a recursive quickSort
// General Use shuffled array of n size functionality.
const arrayFunctions = require('./');

let array = arrayFunctions.shuffle(arrayFunctions.randomArray(100000));

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

quicksort(array);


// My machines time estimate for 100,000,000 number array;
//[Finished in 0.158s]
