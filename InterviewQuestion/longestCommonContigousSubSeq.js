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

function longestMatchingCont(usr1, usr2) {
  longestSeq = 0;
  final = [];

  const Usr1Map = usr1.reduce((acc, each, i, arr) => {
    acc[each] = arr[i + 1] ? arr[i + 1] : null;
    return acc;
  }, {});

  let newSeq = [];

  for (let i = 0; i < usr2.length - 1; i++) {
    let elm = usr2[i];

    if (Usr1Map.hasOwnProperty(elm)) {
      let next = Usr1Map[elm];

      if (newSeq.length === 0) {
        newSeq.push(usr2[i]);
      }

      if (next === usr2[i + 1]) {
        next = Usr1Map[next];
        newSeq.push(usr2[i + 1]);
      } else {
        final =
          Math.max(final.length, newSeq.length) === newSeq.length
            ? newSeq
            : final;
        newSeq = [];
      }

      // Alternative Core algo -- rewritten to show cleaner liner time progress

      // for (let x = i + 1; x < usr2.length; x++) {
      //   if (next === usr2[x]) {
      //     currSeq++;
      //     next = Usr1Map[next];
      //     newSeq.push(usr2[x]);
      //   } else {
      //     i = x;
      //     break;
      //   }
      // }
      // final =
      //   Math.max(final.length, newSeq.length) === newSeq.length
      //     ? newSeq
      //     : final;
    }
  }

  return final.length > 1 ? final : 'None';
}

module.exports = longestMatchingCont;

// console.time('longestMatching');
// let answer = longestMatching(user0, user2);
// console.timeEnd('longestMatching');
// console.time('longestMatching2');
// let answer2 = longestMatching(user1, user2);
// console.timeEnd('longestMatching2');
// let answer3 = longestMatching(user1, user3);
// console.log(answer);
// console.log(answer2);
// console.log(answer3);
