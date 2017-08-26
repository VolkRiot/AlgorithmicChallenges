// Find the first non-repeating character in the array.

function firstNotRepeatingCharacter(s) {
  for (let i = 0; i < s.length; i++) {
    // Slice out the character from array
    var sliced = s.slice(0, i).concat(s.slice(i + 1, s.length));
    // Check if character exists in array, if not then none repeating
    if (sliced.indexOf(s[i]) === -1) {
      return s[i];
    }
  }
  // Default return in case of nothing found;
  return '_';
}
