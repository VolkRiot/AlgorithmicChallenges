function longestSentence(sentence) {
  var splitup = sentence.split(/[.|?|!]/);

  splitup.forEach(each => {
    let wordsLength = each.split(' ').filter(word => {
      return word !== '';
    }).length;
    // console.log('Length', each.split(' '));
    if (wordsLength > longest) {
      longest = wordsLength;
    }
  });

  return longest;
}

module.exports = longestSentence;
