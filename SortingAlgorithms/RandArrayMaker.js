module.exports = {
  randomArray,
  shuffle
}

function randomArray(num){
  let array = []
  while (num != 0){
    array.push(num--);
  }
  return array;
}

function shuffle(array){
  for(let i = array.length - 1; i > 0; i--){
    let x = Math.floor(Math.random() * (i + 1));
    let temp = array[x];
    array[x] = array[i];
    array[i] = temp;
  }
  return array;
}
