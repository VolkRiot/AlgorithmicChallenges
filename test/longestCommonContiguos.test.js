const longestMatching = require('../InterviewQuestion/longestCommonContigousSubSeq');
const chai = require('chai');

const { deepEqual } = chai.assert;

var user0 = [
  '/nine.html',
  '/four.html',
  '/six.html',
  '/seven.html',
  '/one.html'
];

var user1 = [
  '/one.html',
  '/two.html',
  '/three.html',
  '/four.html',
  '/six.html'
];

var user2 = [
  '/nine.html',
  '/two.html',
  '/three.html',
  '/four.html',
  '/six.html',
  '/seven.html',
  '/twelve.html'
];

var user3 = ['/three.html', '/eight.html'];

// let answer = longestMatching(user0, user2);
// let answer2 = longestMatching(user1, user2);
// let answer3 = longestMatching(user1, user3);

describe('Longest Contiguous between two lists of browsing patterns', () => {
  it('should find matching contg patterns in sets of lists ', function() {
    deepEqual(longestMatching(user0, user2), [
      '/four.html',
      '/six.html',
      '/seven.html'
    ]);
    deepEqual(longestMatching(user1, user2), [
      '/two.html',
      '/three.html',
      '/four.html',
      '/six.html'
    ]);
    deepEqual(longestMatching(user1, user3), 'None');
  });
});
