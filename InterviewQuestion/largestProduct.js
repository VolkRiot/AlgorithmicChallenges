/* Write a function that accepts an array of integers and returns the largest
number we can get by multiplying two of them. For example, for the array:

```[-100, 2, 42, 100]
```

...We should get `42 * 100 = 4200`. */

// Naive

function largestMultiple(arr) {
  if(!arr instanceof Array) {
    return;
  }
  let maxProduct = Number.NEGATIVE_INFINITY;
  arr.forEach((num, i) => {
    arr.forEach((num2, x) => {
        if(i !== x){
          maxProduct = Math.max(maxProduct, num * num2);
        }
    });
  });

  return maxProduct;
}

function largestMultipleSmarter(arr) {
  if(!arr instanceof Array) {
    return;
  }

  let largestPos;
  let lrgIndx;
  let secondPos;

  let largestNeg;
  let lrgNegIndx;
  let secondNeg;

  let maxProductPos;
  let maxProductNeg;

  arr.forEach((each, i) => {

    if (each >= 0) {

      if (!largestPos) {
        largestPos = each;
        lrgIndx = i;

      } else if (each > largestPos) {
          secondPos = largestPos;
          largestPos = each;
          lrgIndx = i;

      } else if ((!secondPos || each > secondPos) && i !== lrgIndx) {
          secondPos = each;
      }

    } else {

      if (!largestNeg) {
        largestNeg = each;
        lrgNegIndx = i;

      } else if (each < largestNeg) {
          secondNeg = largestNeg;
          largestNeg = each;
          lrgNegIndx = i;

      } else if ((!secondNeg || each < secondNeg) && i !== lrgNegIndx) {
          secondNeg = each;
      }

    }

  });

  if (largestPos && secondPos) {
    maxProductPos = largestPos * secondPos;
  }

  if (largestNeg && secondNeg) {
    maxProductNeg = largestNeg * secondNeg;
  }

  if (maxProductNeg && maxProductPos) {
    return Math.max(maxProductPos, maxProductNeg);
  } else if (maxProductPos) {
    return maxProductPos;
  } else {
    return maxProductNeg;
  }

}

module.exports = { largestMultiple, largestMultipleSmarter };
