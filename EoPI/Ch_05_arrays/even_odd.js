// Order an array so that even values come first.

function evenOdd(arr) {
  let startPointer = 0;
  let endPointer = arr.length - 1;

  while(startPointer < endPointer) {
    if (arr[startPointer] % 2 !== 0) {
      const temp = arr[startPointer];
      arr[startPointer] = arr[endPointer];
      arr[endPointer] = temp;
      endPointer--
    } else {
      startPointer++
    }
  }

  return arr;

}

console.log(evenOdd([1,2,3,4,5,6,7,8,9,10,11,12]))