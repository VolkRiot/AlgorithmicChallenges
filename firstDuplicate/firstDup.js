// Return first duplicate value in an array in O(n) time and constant space.

function firstDuplicate(a) {
  for (var i = 0; i < a.length; i++) {
    // All numbers always in range of 1 - a.length;
    // Use number to derive zero based index.
    // Cast to abs as value could have been referenced by another
    let pos = Math.abs(a[i]) - 1;

    // If value at derived position is negative then the value is a duplicate.
    if (a[pos] < 0) {
      return Math.abs(a[i]);
    }

    // Turn the value at the index to negative to denote visiting the node.
    a[pos] *= -1;
  }

  // Default for no duplicate found.
  return -1;
}
