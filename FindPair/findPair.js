/* Find pair with given sum in the array
Given an unsorted array of integers, find a pair with given sum in it.

For example,

Input:
arr = [8, 7, 2, 5, 3, 1]
sum = 10

Output:
Pair found at index 0 and 2 (8 + 2)
OR
Pair found at index 1 and 4 (7 + 3) */

var arr = [8, 7, 2, 5, 3, 1];
var total = 10

function findPair(array, sum){

  var found = false;
  var map = {};

  for (var i = 0; i < array.length; i++){
    map[array[i]] = i;
  }

  var arr = array.sort();

  var lowest = 0;
  var highest = arr.length - 1;

  while (lowest < highest){

    if((arr[lowest] + arr[highest]) == sum){
        found = true;
        console.log("Pair found at index " + map[arr[lowest]] + " and " + map[arr[highest]] + " (" + arr[lowest] + " + " + arr[highest] + ")");
    }

    if((arr[lowest] + arr[highest]) > sum){
      highest--;
    }else{
      lowest++;
    }

  }

  if(!found) console.log("No pairs found...");

}

findPair(arr, total);
