const allOccurances =  require('../CompanyChallenges/TeksystemsChallenges/allOccurancesString.js');
const expect = require('chai').expect;

describe('Replace all occurances', () => {
  it('should work when replacing pattern in sentence', () => {
    expect(allOccurances('This is a test string. Its purpose is testing', 'is', 'NOT')).to.equal('ThNOT NOT a test string. Its purpose NOT testing')
  })
  it('should work when replacing only whole words in sentence', () => {
    expect(allOccurances('This is a test string. Its purpose is testing', 'is', 'NOT', true)).to.equal('This NOT a test string. Its purpose NOT testing')
  })
  it('should work when replacing only empty spaces', () => {
    expect(allOccurances('This is a test string. Its purpose is testing', ' ', 'XXX')).to.equal('ThisXXXisXXXaXXXtestXXXstring.XXXItsXXXpurposeXXXisXXXtesting')
  })
  it('should work with empty string', () => {
    expect(allOccurances('', ' ', '')).to.equal('')
  })
})