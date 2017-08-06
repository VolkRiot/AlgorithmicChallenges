/*
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
Return the sum of the three integers.
You may assume that each input would have exactly one solution.

Example:
given array S = {-1 2 1 -4},
and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)
 */

// Very naive O(n^3) Oh myyyyy....

function closestSum(arr, target) {
  let min = Number.POSITIVE_INFINITY;
  let closest;

  arr.forEach((elm, i) => {
    arr.forEach((elm2, x) => {
      arr.forEach((elm3, j) => {
        var total = elm + elm2 + elm3;
        var diff = Math.abs(target - total);

        if (Math.min(min, diff) === diff) {
          min = diff;
          closest = total;
        }
      });
    });
  });

  return closest;
}

console.log(closestSum([-1, 2, 1, -4], 1));
