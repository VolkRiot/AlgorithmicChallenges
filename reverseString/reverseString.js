const performance = require('performance-now');

function reverseString(string) {
  let final = '';

  for (let i = 0; i < string.length; i++) {
    final += string[i];
  }

  return final;
}

function reverseHalf(string) {
  let start = 0;
  let end = string.length - 1;
  let strArr = [...string];

  while (start !== end) {
    let temp = strArr[start];
    strArr[start] = strArr[end];
    strArr[end] = temp;

    start++;
    end--;
  }

  return strArr.join('');

}

function generateLongString(size) {
  let final = '';

  for (let i = 0; i <= size; i++) {
    let randLetter = String.fromCharCode(
      Math.floor(Math.random() * (122 - 65) + 65)
    );
    final += randLetter;
  }

  return final;
}

function reverse(string) {
  var first = null;
  var last = null;
  var tmp = null;
  var array = string.split('')
  var length = array.length;

  for (first = 0, last = length - 1; first < length / 2; first++, last--) {
    tmp = array[first];
    array[first] = array[last];
    array[last] = tmp;
  }

  return array.join('')

}

let long = generateLongString(10000000);

let start = performance();
reverseString(long);
let end = performance();

console.log(
  `Performance of regular string recorded as ${(end - start).toFixed(3)}`
);

let begin = performance();
reverse(long);
let finish = performance();

console.log(`Performance of half-string recorded as ${(finish - start).toFixed(3)}`)
