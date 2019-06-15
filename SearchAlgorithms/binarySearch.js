let arrayMaker = require('../Helpers/RandArrayMaker');

// Simple Binary Search of a Sorted Array;
var arraySize = 1000000;

// Returns and array from 1 - n
var arr = arrayMaker.returnArray(arraySize);

function binarySearch(arr, val) {
  // Assures numerically sorted array as binary search works on sorted arrays
  let array = arr.sort(function(a, b) {
    return a - b;
  });

  // Get the middle of the sorted array
  let pivot = Math.floor(array.length / 2);

  // If array at the middle value is equal to serched out val return found
  if (array[pivot] === val) {
    console.log('Found value');
    return array[pivot];

    // Else if pivot point value is less than search value cut array in half
    // Recursively call binary search on the upper half
  } else if (array[pivot] < val) {
    let greaterArr = array.slice(pivot + 1, array.length);
    return binarySearch(greaterArr, val);

    // Else if pivot point value is greater than search value cut array in half
    // Recursively call binary search on the lower half
  } else if (array[pivot] > val) {
    let lesserArr = array.slice(0, pivot);
    return binarySearch(lesserArr, val);
  } else {
    // Return no value found
    console.log('Value not found');
    return -1;
  }
}

console.log('Result is', binarySearch(arr, 3423));
