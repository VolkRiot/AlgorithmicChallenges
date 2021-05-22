const cards = Array.from({ length: 52 }, (_, i) => ++i);

function shuffle(cards) {
  for (let i = 0; i < cards.length; i++) {
    const element = cards[i];
    const minIndex = i + 1;

    const randI = Math.floor(
      Math.random() * (cards.length - 1 - minIndex) + minIndex
    );

    cards[i] = cards[randI];
    cards[randI] = element;
  }

  console.log('cards', cards);
}

shuffle(cards);
