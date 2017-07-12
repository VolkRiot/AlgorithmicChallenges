module.exports = {
  returnArray,
  shuffle
};

function returnArray(end, start = 1) {
  let array = [];
  let i = start;

  while (i <= end) {
    array.push(i);
    i++;
  }
  return array;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let x = Math.floor(Math.random() * (i + 1));
    let temp = array[x];
    array[x] = array[i];
    array[i] = temp;
  }
  return array;
}
