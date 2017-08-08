/*
We have some clickstream data that we gathered on our client's website. Using cookies, we collected snippets of users' anonymized URL histories while they browsed the site. The histories are in chronological order and no URL was visited more than once per person.

Write a function that takes two user's browsing histories as input and returns the longest contiguous sequence of URLs that appears in both.

Sample input:

var user0 = [ "/nine.html", "/four.html", "/six.html", "/seven.html", "/one.html" ];
var user1 = [ "/one.html", "/two.html", "/three.html", "/four.html", "/six.html" ]
var user2 = [ "/nine.html", "/two.html", "/three.html", "/four.html", "/six.html", "/seven.html"];
var user3 = [ "/three.html", "/eight.html" ];

// sequence = [nine.html]
// not_match = [four, two, six, three]
// initlizing a pointer

Sample output:

(user0, user2):
  /four.html
  /six.html
  /seven.html

(user1, user2):
  /two.html
  /three.html
  /four.html
  /six.html

(user0, user3):
     None
  */

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
  '/seven.html'
];
var user3 = ['/three.html', '/eight.html'];

function longestMatching(usr1, usr2) {
  longestSeq = 0;
  final = [];

  const Usr1Map = usr1.reduce((acc, each, i, arr) => {
    acc[each] = arr[i + 1] ? arr[i + 1] : null;
    return acc;
  }, {});

  for (let i = 0; i < usr2.length; i++) {
    let elm = usr2[i];

    if (Usr1Map.hasOwnProperty(elm)) {
      let currSeq = 1;
      let next = Usr1Map[elm];
      let newSeq = [elm];

      for (let x = i + 1; x < usr2.length; x++) {
        if (next === usr2[x]) {
          currSeq++;
          next = Usr1Map[next];
          newSeq.push(usr2[x]);
        } else {
          i = x + 1;
          break;
        }
      }
      // longestSeq = Math.max(currSeq, longestSeq);
      final =
        Math.max(final.length, newSeq.length) === newSeq.length
          ? newSeq
          : final;
    }
  }

  return final.length > 1 ? final : 'None';
}

let answer = longestMatching(user0, user2);
let answer2 = longestMatching(user1, user2);
let answer3 = longestMatching(user1, user3);
console.log(answer);
console.log(answer2);
console.log(answer3);
