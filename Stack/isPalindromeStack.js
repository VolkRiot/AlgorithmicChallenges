const Stack = require('./stack');

function isPalindrome(str) {
  var stack = new Stack();
  var reversed = '';

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  while (stack.count() > 0) {
    reversed += stack.pop();
  }

  return str === reversed;
}

console.log(isPalindrome('racecar'));
