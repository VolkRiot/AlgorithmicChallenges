/*
f('AdnBndAndBdaBn', 'dAn') // 4 ("Adn", "ndA", "dAn", "And")
f('AbrAcadAbRa', 'cAda') // 2  */

// Naive -- Slow -- 1.522s completion :(

function anagramDetector(text, letters) {
  let final = 0;

  if (text.length < letters.length) {
    return final;
  }

  text.split('').forEach((elm, i, array) => {
    var slice = array.slice(i, i + letters.length);

    if (isAnagram(slice, letters)) {
      final++;
    }
  });

  return final;
}

function isAnagram(sub, testStr) {
  const sortedSub = [...sub].sort().join('');
  const sortedTest = [...testStr].sort().join('');

  return sortedTest === sortedSub;
}

module.exports = anagramDetector;
