const chai = require('chai');
const balancedBrackets = require('../BalancedBrackets/balancedBrackets');

const expect = chai.expect;

describe('Balanced Brackets', () => {
  it('Should return balanced if argument is empty string', () => {
    expect(balancedBrackets('')).to.equal(true);
  });

  it('Should return true when presented with balanced string of brankets', () => {
    expect(balancedBrackets('()[]{}(([])){[()][]}')).to.equal(true);
  });

  it('Should return false when brackets not balanced', () => {
    expect(balancedBrackets('())[]{}')).to.equal(false);
  });

  it('Should ignore the presence of none bracket chars', () => {
    expect(balancedBrackets('[{aeds(sds{%^})}]')).to.equal(true);
  });
});
