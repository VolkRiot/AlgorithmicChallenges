// Javascript implementation of a bubble sort;

const arrayFunctions = require('./../RandArrayMaker.js');
const performance = require('performance-now');

let array = arrayFunctions.shuffle(arrayFunctions.randomArray(100000));

function bubbleSort(array){
  let swapped = false;

  while(!swapped){
    swapped = true;
    for(let i = 0; i < array.length - 1; i++){
      if(array[i] > array[i + 1]){
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = false;
      }
    }
  }

}

let start = performance();
bubbleSort(array);
let end = performance();

console.log(`Bubble sort of 100,000 random intergers took ${(end - start).toFixed(3)} milliseconds`);
//Bubble sort of 100,000 random intergers took 37954.079
//[Finished in 38.067s]
