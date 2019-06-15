// Standard input for Node.js launches
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is the integer you want converted to English text in dollars?  ", function(number) {
   const numberInEnglish = intToDollar(number);
   console.log(numberInEnglish);
   rl.close();
});

function intToDollar(totalDollars) {
  let outputString = '';
  let stringValue = String(totalDollars);

  const ones = {
    '0': '',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
  };

  const teens = {
    '10': 'Ten',
    '11': 'Eleven',
    '12': 'Twelve',
    '13': 'Thirteen',
    '14': 'Fourteen',
    '15': 'Fifteen',
    '16': 'Sixteen',
    '17': 'Seventeen',
    '18': 'Eighteen',
    '19': 'Nineteen'
  };

  const tens = {
    '2': 'Twenty',
    '3': 'Thirty',
    '4': 'Forty',
    '5': 'Fifty',
    '6': 'Sixty',
    '7': 'Seventy',
    '8': 'Eighty',
    '9': 'Ninety'
  };

  const factors = {
    '0': '',
    '1': 'Thousand',
    '2': 'Million',
    '3': 'Billion'
  };

  let endPos = stringValue.length;
  const sets = [];
  let start = stringValue.length;
  let stringArray = stringValue.split('');

  while (stringArray.length > 0) {
    endPos = start;

    start = Math.max(0, start - 3);

    sets.unshift(stringArray.splice(start, endPos).join(''));
  }

  for (let i = 0; i < sets.length; i++) {
    const hundredsValue = sets[i];

    if (hundredsValue.length > 2) {
      const tensValue = hundredsValue.slice(1, hundredsValue.length);

      if (hundredsValue[0] > 1) {
        outputString += ones[hundredsValue[0]] + 'Hundred';
      }

      if (hundredsValue[1] !== '0') {
        outputString +=
          teens[tensValue] || tens[tensValue[0]] + ones[tensValue[1]];
      } else {
        outputString += ones[hundredsValue[2]];
      }
    } else {
      outputString +=
        hundredsValue.length === 2
          ? teens[hundredsValue] ||
            tens[hundredsValue[0]] + ones[hundredsValue[1]]
          : ones[hundredsValue];
    }

    if (parseInt(hundredsValue)) outputString += factors[sets.length - 1 - i];
  }

  outputString += 'Dollars';

  return outputString;
}

module.exports = intToDollar;
