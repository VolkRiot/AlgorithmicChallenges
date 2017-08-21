// Excerpt From: David Herman. “Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript.”

function wrapElements(a) {
  var result = [], i, n;

  for (i = 0, n = a.length; i < n; i++) {
    result[i] = function() {
      return a[i];
    };
  }
  return result;
}

var wrapped = wrapElements([10, 20, 30, 40, 50]);
var f = wrapped[0];

console.log(f()); // undefined

// Use “immediately invoked function expression” IIFE

function wrapElementsWorking(a) {
  var result = [];

  for (var i = 0, n = a.length; i < n; i++) {
    (function(j) {
      result[i] = function() {
        return a[j];
      };
    })(i);
  }
  return result;
}

var wrapped = wrapElementsWorking([10, 20, 30, 40, 50]);
var f = wrapped[0];

console.log(f()); // 10
