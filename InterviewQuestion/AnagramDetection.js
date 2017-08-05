/*
f('AdnBndAndBdaBn', 'dAn') // 4 ("Adn", "ndA", "dAn", "And")
f('AbrAcadAbRa', 'cAda') // 2  */

// Naive -- Slow -- 1.522s completion :(

function anagramDetector(text, letters) {
  const final = [];

  if (text.length < letters.length) {
    return final;
  }

  text.split('').forEach((elm, i, array) => {
    var slice = array.slice(i, i + letters.length);

    if (isAnagram(slice, letters)) {
      final.push(slice.join(''));
    }
  });

  return final;
}

function isAnagram(sub, testStr) {
  const sortedSub = [...sub].sort().join('');
  const sortedTest = [...testStr].sort().join('');

  return sortedTest === sortedSub;
}

console.log(anagramDetector('AdnBndAndBdaBn', 'dAn'));
