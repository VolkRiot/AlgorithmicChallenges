var number1 = "1255";
var number2 = "10125";

function addTwoString(number1, number2) {
  let output = [];
  let carry = false;
  var reversed1 = number1.split('').reverse().join('');
  var reversed2 = number2.split('').reverse().join('');

  var longestNum = reversed1.length >= reversed2.length ? reversed1 : reversed2;
  var shorterNum = reversed1.length <= reversed2.length ? reversed1 : reversed2;

  for (var i = 0; i < longestNum.length; i++) {
    let val1 = parseInt(longestNum[i]);
    let val2 = parseInt(shorterNum[i]) || 0;

    let newVal = val1 + val2;

    if (carry) {
      newVal += 1;
      carry = false;
    }

    if (newVal > 9) {
      carry = true;

      if (!(i === longestNum.length - 1) || (!i === 0)) {
        newVal = String(newVal)[1];
      }
    }

    output.push(newVal)
  }
  console.log(output.reverse().join(''));
}

addTwoString(number1, number2);