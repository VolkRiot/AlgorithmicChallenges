/*Option 2*

Write a function that counts how many times each letter in a string occurs.

For example:

```var letter_counts = count_letters("Example sentence");

console.log(letter_counts['e']); // 5
```

Your function should be case-insensitive. In other words, ‘E’ and ‘e’ should
both increment the count for the letter ‘e’. */

function count_letters(string) {

  let count = {};
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowerString = String(string).toLowerCase();

  alphabet.split('').forEach(alpha => {
    count[alpha] = 0;
    count[alpha.toUpperCase()] = 0;
  });

  lowerString.split('').forEach(letter => {
    if(/[a-z]/.test(letter)) {
      count[letter]++;
      count[letter.toUpperCase()]++;
    }
  });

  return count;
}

module.exports = count_letters;
