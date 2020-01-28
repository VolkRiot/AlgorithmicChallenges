

function dutchPartition(arr, pivot) {
  let pivVal = arr[pivot];
  console.log(`Pivot value is ${pivVal}`)

  let smallestPointer = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivVal) {
      [arr[i], arr[smallestPointer]] = [arr[smallestPointer], arr[i]]
      smallestPointer++
    }
  }

  let largestPointer = arr.length - 1;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] > pivVal) {
      [arr[i], arr[largestPointer]] = [arr[largestPointer], arr[i]]
      largestPointer--
    }
  }


  return arr;
}

function dutchPartitionPointers(arr, pivot) {
  let pivVal = arr[pivot];
  console.log(`Pivot value is ${pivVal}`)

  let smallestPointer = 0
  let equalPointer = 0;
  let largestPointer = arr.length;

  while(equalPointer < largestPointer){
    if (arr[equalPointer] < pivVal) {
      [arr[equalPointer], arr[smallestPointer]] = [arr[smallestPointer], arr[equalPointer]]
      smallestPointer++
      equalPointer++
    } else if(arr[equalPointer] == pivVal) {
      equalPointer++
    } else if(arr[equalPointer] > pivVal) {
      largestPointer--
      [arr[equalPointer], arr[largestPointer]] = [arr[largestPointer], arr[equalPointer]]
    }
  }

}

  // Variant
  // Array is of three values types. Partion by grouping values with others of type. 
  // Order between types does not matter
  function dutchPartitionByValue(arr) {
  let firstValPointer = 0
  let firstVal = arr[firstValPointer];
  let currValPointer = 0
  let pointerLast = arr.length
  let secondVal;
  // let secondValPointer;

  while (currValPointer < pointerLast) {

    if (arr[currValPointer] === firstVal) {
      [arr[currValPointer], arr[firstValPointer]] = [arr[firstVal], arr[currValPointer]]
      currValPointer++
      firstValPointer++
    } else if(!secondVal) {
      secondVal = arr[currValPointer]
    } else if(arr[currValPointer] === secondVal) {
      pointerLast--

      while(arr[pointerLast] === secondVal) {
        pointerLast--;
      }

      [arr[currValPointer], arr[pointerLast]] = [arr[pointerLast], arr[currValPointer]]
      currValPointer++
    } else {
      currValPointer++
    }

    console.log(JSON.stringify(arr))

  }

  return arr;
}

// console.log(dutchPartition([0, 3, 5, 1, 2, 0, 5, 0, 2, 1, 1], 4))
// console.log(dutchPartitionPointers([0, 3, 5, 1, 2, 0, 5, 0, 2, 1, 1], 4))
console.log(dutchPartitionByValue([1,1,3,1,2,3,3,2,3,2]))
// console.log(dutchPartitionByValue([1,1,1,2,2,2,2,3,3,3,3,3]))

// [1,1,3,1,2,3,3,2,3,2]