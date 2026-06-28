function plusOne(arr) {
  let carryOver = 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    const addedVal = arr[i] + carryOver;

    if (addedVal > 9) {
      arr[i] = 0;
    } else {
      carryOver = 0;
      arr[i] = addedVal;
    }
  }

  if (carryOver) {
    arr[0] = 1;
    arr.push(0);
  }

  return arr;
}

console.log(plusOne([1, 9, 7]));
console.log(plusOne([1, 9, 9]));
console.log(plusOne([9, 9]));
