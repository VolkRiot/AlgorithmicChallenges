// Javascript implementation of a recursive quickSort
// General Use shuffled array of n size functionality.
// TODO: Modularize for future usage.

function randomArray(num){
  let array = []
  while (num != 0){
    array.push(num--);
  }
  return array;
}

function shuffle(array){
  for(let i = array.length - 1; i > 0; i--){
    let x = Math.floor(Math.random() * (i + 1));
    let temp = array[x];
    array[x] = array[i];
    array[i] = temp;
  }
  return array;
}

let array = shuffle(randomArray(100));

// Quicksort implementation -- Recursive
function quicksort(array){

  if(array.length < 2){
    return array;
  }

  let randI = Math.floor(Math.random() * array.length);
  let pivot = array.splice(randI, 1)[0];
  let above = [];
  let below = [];

  array.forEach((item, i) =>{
    item > pivot ? above.push(item) : below.push(item);
  });

  let sorted = [];
  return sorted.concat(quicksort(below), pivot, quicksort(above));

}

console.log(quicksort(array));
