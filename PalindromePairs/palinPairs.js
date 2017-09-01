// HARD

function isPalindrome(s) {
  var start = 0,
    end = s.length - 1;

  while (start < end) {
    if (s.charAt(start) !== s.charAt(end)) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

function palindromePairs(words) {
  var wordMap = {};
  var indexCombos = [];

  // Loop over the words and add them to our WordMap for easy reference
  for (var i = 0; i < words.length; i++) {
    // We store the word as the key and the index inside the word key
    wordMap[words[i]] = i; // Ex. {'bob': 2}
  }

  // Loop over the whole array again
  for (var i = 0; i < words.length; i++) {
    // Then loop over the letters of each word!
    var currentWord = words[i];
    var wordsLength = words[i].length;

    if (wordsLength === 0) {
      wordsLength = 1;
    }

    for (var x = 0; x < wordsLength; x++) {
      // Get the first and last part of the word based one where the index is
      var pre = currentWord.slice(0, x); // Grab the beginning of the word
      var post = currentWord.slice(x, currentWord.length); // Grab the end

      if (isPalindrome(pre)) {
        // If the first part of the word (pre) is a palindrome then we know...
        // That the mirror image of the rest of the word (post) can be stuck at the front...
        // In order to make an overall even palindrome
        // Ex ('bobcat' - 'bob', 'cat' -- so 'tacbobcat')

        // Grab the reverse of the remaining word
        var revPost = post
          .split('')
          .reverse()
          .join('');

        // Check to see it it exists in our map!
        // Use .hasOwnProperty method because if we did wordMap['word'] and it was 0 then it would say it is false...
        // And that it is not the same word we are looking at by makign sure index is not the
        if (wordMap.hasOwnProperty(revPost) && wordMap[revPost] !== i) {
          // Push the index of the word that can be prefixed to our current word and the index of the current word as matching pairs
          indexCombos.push([wordMap[revPost], i]);
          if (revPost === '') {
            indexCombos.push([wordMap[revPost], i]);
          }
        }
      }

      // Same idea but now in reverse for the post
      if (isPalindrome(post)) {
        // Grab the reverse of the remaining word
        var revPre = pre
          .split('')
          .reverse()
          .join('');

        // Check to see it it exists in our map!
        // And that it is not the same word we are looking at by making sure index is not the
        if (wordMap.hasOwnProperty(revPre) && wordMap[revPre] !== i) {
          // Push the index of the word that can be postfixed to our current word and the index of the current word as matching pairs

          indexCombos.push([i, wordMap[revPre]]);
          if (revPre === '') {
            indexCombos.push([wordMap[revPre], i]);
          }
        }
      }
    }
  }

  return indexCombos;
}

console.log(palindromePairs(['a', '']));
