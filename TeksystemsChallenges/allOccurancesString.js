/* Write a function to find all occurrences of a pattern in a given string and replace them 
with another string (e.g. given: “This is an example which is a test”; find all occurrences 
of “is” and replace with “could be”; result “This could be an example which could be a test”) */

function allOccurances(string, subStr, replacement, wholeWords = false) {
  let finalString = '';
  let originalLength = string.length;

  for (let i = 0; i < string.length; i++) {

    let character = string[i];
    
    if (character === subStr[0]) {
      let startIndex = i;
      let found = true;

      if (wholeWords) {
        let preceding = i === 0 || string[i - 1] === ' ';
        let following = i === string.length - 1 || string[i + subStr.length] === ' '

        if (!preceding || !following) {
          continue;
        }
      }

      for (let j = 0; j < subStr.length; j++) {
        if (subStr[j] === string[i]) {
          i++;
        } else {
          found = false;
          break;
        }
      }

      if (found) {
        string = string.substr(0, startIndex) + replacement + string.substr(startIndex + subStr.length);
        i += string.length - originalLength;

        originalLength = string.length;
      }

    }
    
  }

  return string;

}

function allOccurancesWholeWord(string, subStr, replacement) {

  const stringArr = string.split(' ');

  const final = stringArr.map(word => (word === subStr ? replacement : word)).join(' ');

  return final;

}

console.log(allOccurances("This is an example which is a test", ' ', 'XXXXX', false));
console.log(allOccurancesWholeWord("This is an example which is a test", 'is', 'bacon'));