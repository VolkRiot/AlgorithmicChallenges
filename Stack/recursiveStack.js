const Stack = require('./stack');

function factorial(n) {
  const s = Stack();
  let product = 1;

  while (n > 1) {
    s.push(n--);
  }

  while (s.count() > 0) {
    product *= s.pop();
  }

  return product;
}

console.log(factorial(5));
