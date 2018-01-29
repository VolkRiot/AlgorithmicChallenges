/*
Write a function that takes this input as a parameter and returns a data structure containing the number of hits that were recorded on each domain 
AND each domain under it. 
For example, an impression on "sports.yahoo.com" counts for "sports.yahoo.com", "yahoo.com", and "com". 
(Subdomains are added to the left of their parent domain. So "sports" and "sports.yahoo" are not valid domains.)

Expected output (in any order):
1320    com
 900    google.com
 410    yahoo.com
  60    mail.yahoo.com
  10    mobile.sports.yahoo.com
  50    sports.yahoo.com
  10    stackoverflow.com
   3    org
   3    wikipedia.org
   2    en.wikipedia.org
   1    es.wikipedia.org
*/

var counts = ["900,google.com",
  "60,mail.yahoo.com",
  "10,mobile.sports.yahoo.com",
  "40,sports.yahoo.com",
  "300,yahoo.com",
  "10,stackoverflow.com",
  "2,en.wikipedia.org",
  "1,es.wikipedia.org"
];

var results = counts.reduce((acc, comboString) => {
  const valDomArr = comboString.split(',');
  let val = parseInt(valDomArr[0]);
  let dom = valDomArr[1];

  acc[dom] = acc[dom] ? acc[dom] += val : val;

  var rest = dom.substring(dom.indexOf('.') + 1);
  acc[rest] = acc[rest] ? acc[rest] += val : val;

  while (rest.indexOf('.') !== -1) {
    rest = rest.substring(rest.indexOf('.') + 1);
    acc[rest] = acc[rest] ? acc[rest] += val : val;
  }

  return acc;
}, {})

console.log(results);

/*
com: 1320
en.wikipedia.org :2
es.wikipedia.org :1
google.com :900
mail.yahoo.com :60
mobile.sports.yahoo.com :10
org :3
sports.yahoo.com :50
stackoverflow.com :10
wikipedia.org: 3
yahoo.com: 410
*/