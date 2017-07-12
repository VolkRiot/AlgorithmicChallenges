/*Option 3*

Write a function that returns true if the passed in string is a palindrome and
false if it isn’t. (should be case-insensitive)

for example:

```isPalindrome('raceCar') // true
isPalindrome('David is cool') // false
```

As a bonus, write this function so that it ignores any characters that aren’t
in the alphabet.

For example:

```isPalindrome('Race!car?') // true
```
*/

function isPalindrome(string) {
  let lowered = String(string).toLowerCase();

  let filtered = lowered.split('')
    .filter(char => /[a-z]/.test(char));

    return filtered.join('') === filtered.reverse().join('');

}

module.exports = isPalindrome;
