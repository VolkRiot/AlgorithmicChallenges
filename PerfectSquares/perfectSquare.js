function solution(A, B) {
  let count = 0;
  let start = A < 0 ? 0 : Math.ceil(Math.sqrt(A));

  for (let i = start; i <= Math.sqrt(Math.abs(B)); i++) {
    var sqrd = i * i;

    if (sqrd % 1 === 0) {
      count++;
    }
  }
  return count;
}

module.exports = solution;
