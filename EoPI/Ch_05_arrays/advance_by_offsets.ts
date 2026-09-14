// Write a program which takes an array of n integers, where A[i] denotes the maximum
// you can advance from index i, and returns whether it is possible to advance to the
// last index starting from the beginning of the array.

function canReachEnd(arr: number[]): boolean {
  let furthest = 0;
  const lastIndex = arr.length - 1;
  let i = 0;

  while (i <= furthest && furthest < lastIndex) {
    furthest = Math.max(furthest, arr[i] + i);
    i++;
  }

  return furthest >= lastIndex;
}
