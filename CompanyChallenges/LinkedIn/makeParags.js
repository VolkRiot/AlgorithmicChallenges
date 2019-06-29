function splitString(stringArg) {
  const words = stringArg.split(' ');
  let i = 0;
  let paragString = '';
  let results = [];

  while (words[i]) {
    if (paragString.length + words[i].length > 9) {
      paragString && results.push(paragString);
      paragString = '';
    }

    if (paragString) {
      paragString += (' ' + words[i]);
    } else {
      paragString += words[i];
    }

    i++;
  }

  results.push(paragString);

  return results.join('\n');

}

console.log(splitString("hello someone, and today is good"))