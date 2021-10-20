// const cards = Array.from({ length: 52 }, (_, i) => ++i);

// function shuffle(cards) {
//   for (let i = 0; i < cards.length; i++) {
//     const element = cards[i];
//     const minIndex = i + 1;

//     const randI = Math.floor(
//       Math.random() * (cards.length - 1 - minIndex) + minIndex
//     );

//     cards[i] = cards[randI];
//     cards[randI] = element;
//   }

//   console.log('cards', cards);
// }

// shuffle(cards);

const arr = [3, 7, 1, 2, 8, 4, 5];

function findSumofThree(arr, target) {
  const sorted = arr.sort((a, b) => a - b);

  for (let index = 0; index < sorted.length; index++) {
    const numI = sorted[index];
    const sum = target;
    const remainder = sum - numI;
    let nextValI = index + 1;
    let endValI = sorted.length - 1;

    while (nextValI < endValI) {
      const finalSum = remainder - sorted[nextValI] - sorted[endValI];

      if (finalSum === 0) {
        console.log(
          `Found with: ${numI},${sorted[nextValI]},${sorted[endValI]}`
        );
      }

      if (finalSum < 0) {
        endValI--;
      } else {
        nextValI++;
      }
    }
  }
}

findSumofThree(arr, 20);
