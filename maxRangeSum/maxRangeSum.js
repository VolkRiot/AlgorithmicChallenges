// Based on passing individual integers and not an array format.

function findMaxRange(totalArgs, ...days) {
  // ignore first argument as additional arguments can be destructures to an array.
  // No need to have length of remaining arguments supplied here.
  let daysArray = days;
  let maxSum = 0;
  let currentMax = 0;

  for (let i = 0; i < daysArray.length; i++) {
    let value = daysArray[i];

    currentMax += value;

    if (currentMax < 0) {
      currentMax = 0;
    }

    maxSum = Math.max(currentMax, maxSum);
  }

  return maxSum;

}

console.log(findMaxRange(10, 7, -3, -10, 4, 2, 8, -2, 4, -5, -2));