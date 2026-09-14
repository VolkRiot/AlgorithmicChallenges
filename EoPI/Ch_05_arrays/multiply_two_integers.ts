// Write a program that takes two arrays representing integers, and re¬
// turns an integer representing their product. For example, since
// 193707721 X -761838257287 = -147573952589676412927, if the inputs are
// (1,9,3, 7,0,7,7, 2,1} and (-7,6,1,8,3,8, 2,5,7, 2,8,7), your function should return
// (-1,4,7,5,7,3,9,5,2,5,8,9,6,7,6, 4,1,2,9, 2,7).

function multiplyArbitraryIntegers(arr1: number[], arr2: number[]) {
  let result = Array(arr1.length + arr2.length).fill(0);

  for (let i = arr1.length - 1; i >= 0; i--) {
    for (let j = arr2.length - 1; j >= 0; j--) {
        result[i + j + 1] += arr1[i] * arr2[j];
        result[i + j] += Math.floor(result[i + j + 1])
        result[i + j + 1] %= 10
  }
}

console.log(
  multiplyArbitraryIntegers(
    [1, 9, 3, 7, 0, 7, 7, 2, 1],
    [-7, 6, 1, 8, 3, 8, 2, 5, 7, 2, 8, 7],
  ),
);
