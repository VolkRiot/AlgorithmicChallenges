var number1 = "55255.5";
var number2 = "50125";

function addTwoString(number1, number2) {
  let output = '';
  let carry = false;
  let longest;
  let shorter;

  if (number1.includes('.') || number1.includes('.')) {

    let firstDecimalPlaces = number1.includes('.') ? number1.split('.')[1].length : 0;
	  let secondDecimalPlaces = number2.includes('.') ? number2.split('.')[1].length : 0;

    let decimalPad = firstDecimalPlaces - secondDecimalPlaces;

    if (decimalPad > 0) {
      number2 = number2.includes('.') ? number2 + "0".repeat(Math.abs(decimalPad)) : number2 + "." + "0".repeat(Math.abs(decimalPad));
    } else {
      number1 = number1.includes('.') ? number1 + "0".repeat(Math.abs(decimalPad)) : number1 + "." + "0".repeat(Math.abs(decimalPad));
    }

  }

  if (number1.length >= number2.length) {
    longest = number1;
    shorter = number2;
  } else {
    longest = number2;
    shorter = number1;
  }

  shorter = shorter.padStart(longest.length, "0");

  for (let i = longest.length - 1; i >= 0; i--) {
    if (isNaN(longest[i])) {
      output = longest[i] + output;
      continue;
    }

    let value1 = parseInt(longest[i]);
    let value2 = parseInt(shorter[i]);

    let finalVal = value1 + value2;

    if (carry) {
      finalVal += 1;
      carry = false;
    }

    if (finalVal > 9) {
      carry = true;

      finalVal = finalVal % 10;
    }

    output = String(finalVal) + output;

  }

  if (carry) {
    output = "1" + output;
  }

 while (output[output.length - 1] === "0") {
    output = output.substr(0, output.length - 1);
  }

return output;

}

addTwoString(number1, number2);

module.exports = addTwoString