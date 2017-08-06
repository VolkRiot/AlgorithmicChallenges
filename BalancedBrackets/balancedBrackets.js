/*
Write a function that accepts a string consisting entirely of brackets ([](){}) and returns whether it is balanced. Every "opening" bracket must be followed by a closing bracket of the same type. There can also be nested brackets, which adhere to the same rule.

f('()[]{}(([])){[()][]}') // true
f('())[]{}') // false
f('[(])') // false
 */

function balancedBrackets(string) {
  let final = [];
  let stringArr = [...string];

  const openbrackMap = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  const closedbrackMap = {
    '}': '{',
    ']': '[',
    ')': '('
  };

  for (let i = 0; i < stringArr.length; i++) {
    let elm = stringArr[i];

    if (openbrackMap.hasOwnProperty(elm)) {
      final.push(elm);
    } else if (closedbrackMap.hasOwnProperty(elm)) {
      if (final.length === 0) {
        return false;
      } else {
        if (openbrackMap[final[final.length - 1]] === elm) {
          final.pop();
        } else {
          return false;
        }
      }
    }
  }

  return true;
}
