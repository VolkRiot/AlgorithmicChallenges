// Make a paragraph out of a single multi-word string, given a maximum length of characters.

function splitString(stringArg, maxLen) {
  const words = stringArg.split(' ');
  let i = 0;
  let paragString = '';
  let results = [];

  while (words[i]) {
    if (paragString.length + words[i].length > maxLen) {
      paragString && results.push(paragString);
      paragString = '';
    }

    if (paragString) {
      paragString += ' ' + words[i];
    } else {
      paragString += words[i];
    }

    i++;
  }

  results.push(paragString);

  return results.join('\n');
}

console.log(
  splitString(
    "Went to a job interview today. You won't believe what happened! Some nerd asked me to write an algorithm to break a single line into a multi-line paragraph. Can you believe it?",
    5
  )
);
