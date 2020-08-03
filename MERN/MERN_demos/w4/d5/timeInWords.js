const { testDriver } = require("../..helpers");

const hour1 = 5;
const min1 = 00;
const expected1 = "five o' clock";

const hour2 = 5;
const min2 = 01;
const expected2 = "one minute past five";

const hour3 = 5;
const min3 = 10;
const expected3 = "ten minutes past five";

const hour4 = 5;
const min4 = 15;
const expected4 = "quarter past five";

const hour5 = 5;
const min5 = 30;
const expected5 = "half past five";

const hour6 = 5;
const min6 = 40;
const expected6 = "twenty minutes to six";

const hour7 = 5;
const min7 = 45;
const expected7 = "quarter to six";

const hour8 = 5;
const min8 = 47;
const expected8 = "thirteen minutes to six";

const hour9 = 5;
const min9 = 28;
const expected9 = "twenty eight minutes past five";

const hour10 = 12;
const min10 = 45;
const expected10 = "quarter to one";

const hour11 = 12;
const min11 = 00;
const expected11 = "twelve o' clock";

const testCases = [
  { arguments: [hour1, min1], expected: expected1 },
  { arguments: [hour2, min2], expected: expected2 },
  { arguments: [hour3, min3], expected: expected3 },
  { arguments: [hour4, min4], expected: expected4 },
  { arguments: [hour5, min5], expected: expected5 },
  { arguments: [hour6, min6], expected: expected6 },
  { arguments: [hour7, min7], expected: expected7 },
  { arguments: [hour8, min8], expected: expected8 },
  { arguments: [hour9, min9], expected: expected9 },
  { arguments: [hour10, min10], expected: expected10 },
  { arguments: [hour11, min11], expected: expected11 },
];
testDriver([timeInWords], testCases);

// https://www.hackerrank.com/challenges/the-time-in-words/problem

const hour1 = 5;
const min1 = 00;
const expected1 = "five o' clock";

const hour2 = 5;
const min2 = 01;
const expected2 = "one minute past five";

const hour3 = 5;
const min3 = 10;
const expected3 = "ten minutes past five";

const hour4 = 5;
const min4 = 15;
const expected4 = "quarter past five";

const hour5 = 5;
const min5 = 30;
const expected5 = "half past five";

const hour6 = 5;
const min6 = 40;
const expected6 = "twenty minutes to six";

const hour7 = 5;
const min7 = 45;
const expected7 = "quarter to six";

const hour8 = 5;
const min8 = 47;
const expected8 = "thirteen minutes to six";

const hour9 = 5;
const min9 = 28;
const expected9 = "twenty eight minutes past five";

const hour10 = 12;
const min10 = 45;
const expected10 = "quarter to one";

const hour11 = 12;
const min11 = 00;
const expected11 = "twelve o' clock";

const { testDriver } = require("../helpers");

const testCases = [
  { arguments: [hour1, min1], expected: expected1 },
  { arguments: [hour2, min2], expected: expected2 },
  { arguments: [hour3, min3], expected: expected3 },
  { arguments: [hour4, min4], expected: expected4 },
  { arguments: [hour5, min5], expected: expected5 },
  { arguments: [hour6, min6], expected: expected6 },
  { arguments: [hour7, min7], expected: expected7 },
  { arguments: [hour8, min8], expected: expected8 },
  { arguments: [hour9, min9], expected: expected9 },
  { arguments: [hour10, min10], expected: expected10 },
  { arguments: [hour11, min11], expected: expected11 },
];
testDriver([timeInWords], testCases);

function timeInWords(hour, min) {}

/* ******************************************************************************** */

// Time: O(1) constant
// Space: O(1)
function timeInWords(h, m) {
  const timeWords = [
    "o' clock",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "quarter",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
    "half",
  ];

  let hour = h,
    min = m,
    temporalPreposition = "past",
    minuteNoun = "minutes ";

  // calc minutes til next hour and increment hour
  if (min > 30) {
    min = 60 - m;
    // increment from 12 to 1, otherwise increment by 1
    hour = h === 12 ? 1 : h + 1;
    temporalPreposition = "to";
  }

  if (min == 15 || min == 30) {
    minuteNoun = "";
  } else if (min == 1) {
    minuteNoun = "minute ";
  }

  const hourWord = timeWords[hour],
    minWord = timeWords[min];

  return min === 0
    ? `${hourWord} ${minWord}`
    : `${minWord} ${minuteNoun}${temporalPreposition} ${hourWord}`;
}
