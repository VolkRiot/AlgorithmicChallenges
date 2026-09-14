// Write a program which takes as input a sorted array and updates it so that all dupli¬
// cates have been removed and the remaining elements have been shifted left to fill the
// emptied indices. Return the number of valid elements. Many languages have library
// functions for performing this operation—you cannot use these functions.

function deleteDupes(arr: number[]): number {
  let writeIndex = 1;

  for (let index = 1; index < arr.length; index++) {
    if (arr[writeIndex - 1] !== arr[index]) {
      arr[writeIndex] = arr[index];
      writeIndex++;
    }
  }

  return writeIndex;
}

console.log(deleteDupes([2, 3, 5, 5, 7, 11, 11, 11, 13]));
