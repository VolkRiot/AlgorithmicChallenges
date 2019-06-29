function fibSequence(n) {
  const sequence = [1, 2];
  let currentValue = 0;

  while (currentValue <= n) {
    currentValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(currentValue)
  }

  return sequence;
}

console.log(fibSequence(1000000));