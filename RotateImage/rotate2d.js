// Easy solution using a duplicate array.

function rotateImage(a) {
  // (2,0) (1,0) (0,0)
  // (2,1) (1,1) (0,1)
  // (2,2) (1,2) (0,2)

  var newArr = [];

  for (let x = 0; x < a.length; x++) {
    var row = [];
    for (let i = a.length - 1; i >= 0; i--) {
      row.push(a[i][x]);
    }
    newArr.push(row);
  }

  return newArr;
}
