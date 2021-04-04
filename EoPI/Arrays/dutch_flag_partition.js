function dutchPartition(arr, pivot) {
  let pivVal = arr[pivot];

  let smallestPointer = 0;
  let currentPointer = 0;
  let largestPointer = arr.length - 1;

  while (currentPointer <= largestPointer) {
    const currValue = arr[currentPointer];

    if (currValue < pivVal) {
      [arr[currentPointer], arr[smallestPointer]] = [
        arr[smallestPointer],
        arr[currentPointer],
      ];
      smallestPointer++;
      currentPointer++;
    } else if (currValue > pivVal) {
      [arr[largestPointer], arr[currentPointer]] = [
        arr[currentPointer],
        arr[largestPointer],
      ];
      largestPointer--;
    } else {
      currentPointer++;
    }
  }

  return arr;
}

console.log(dutchPartition([1, 1, 2, 0, 1, 2, 0, 1, 0, 2, 1], 2));
// console.log(dutchPartitionPointers([0, 3, 5, 1, 2, 0, 5, 0, 2, 1, 1], 4));
// console.log(dutchPartitionByValue([1,1,3,1,2,3,3,2,3,2]))
// console.log(dutchPartitionByValue([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3]));

// [1,1,3,1,2,3,3,2,3,2]
