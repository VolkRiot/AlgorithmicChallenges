// Write a program which takes as input an array of digits encoding a decimal number
// and updates the array to represent the number D + 1.
function plusOne(arr: number[]) {
  let leftOver = 0;
  arr[arr.length - 1] = arr[arr.length - 1] + 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let currentVal = arr[i];
    let incremented = currentVal + leftOver;

    // reset
    leftOver = 0;

    if (incremented < 10) {
      arr[i] = incremented;
    } else {
      arr[i] = 0;
      leftOver = 1;
    }
  }

  if (leftOver) {
    arr.unshift(1);
  }

  return arr;
}

console.log(plusOne([1, 9, 7]));
console.log(plusOne([1, 9, 9]));
console.log(plusOne([9, 9]));
