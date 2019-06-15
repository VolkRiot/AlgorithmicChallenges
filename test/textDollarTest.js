const chai = require('chai');
const intToText = require('../textDollar/textDollar.js');

const assert = chai.assert;

describe('Convert interger values to English string dollars', () => {
  it('should convert integers to string values', () => {
    assert.equal(intToText(3), 'ThreeDollars');
    assert.equal(intToText(10), 'TenDollars');
    assert.equal(intToText(21), 'TwentyOneDollars');
    assert.equal(intToText(466), 'FourHundredSixtySixDollars');
    assert.equal(intToText(1234), 'OneThousandTwoHundredThirtyFourDollars');
    assert.equal(intToText(4234570798), 'FourBillionTwoHundredThirtyFourMillionFiveHundredSeventyThousandSevenHundredNinetyEightDollars');
  });
})

// Debugging
// intToDollar(3);
// intToDollar(10);
// intToDollar(21);
// intToDollar(466);
// intToDollar(1234);
// intToDollar(4234570798);