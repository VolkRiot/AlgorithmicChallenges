function dutchPartition(arr, pivot) {
  const pivotValue = arr[pivot];
  let smaller = 0;
  let equal = 0; // Represents tracking for the unclassified elements
  let larger = arr.length;

  while (equal < larger) {
    if (arr[equal] < pivotValue) {
      [arr[smaller], arr[equal]] = [arr[equal], arr[smaller]];
      equal++;
      smaller++;
    } else if (arr[equal] === pivotValue) {
      equal++;
    } else {
      larger--;
      [arr[larger], arr[equal]] = [arr[equal], arr[larger]];
    }
  }

  return arr;
}

// console.log(dutchPartition([1, 1, 2, 0, 1, 2, 0, 1, 0, 2, 1], 2));
console.log(dutchPartition([0, 3, 5, 1, 2, 0, 5, 0, 2, 1, 1], 4));
// console.log(dutchPartitionByValue([1, 1, 3, 1, 2, 3, 3, 2, 3, 2]));
// console.log(dutchPartitionByValue([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3]));
