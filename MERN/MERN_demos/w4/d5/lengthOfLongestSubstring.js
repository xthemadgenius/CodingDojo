/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const { testDriver } = require("../..helpers");

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

const testCases = [
  { arguments: [str1], expected: expected1 },
  { arguments: [str2], expected: expected2 },
  { arguments: [str3], expected: expected3 },
  { arguments: [str4], expected: expected4 },
];
testDriver([lenOfLongestSubStr], testCases);

// Time: O(n^3) cubed, .includes is the 2nd nested loop
// Space: O(n)
// Starting from each character, go forward as far as possible until a dupe is reached
function lenOfLongestSubStr(str) {
  let maxLen = 0;
  let subStr = "";

  for (let i = 0; i < str.length; i++) {
    subStr = "";

    // if remaining chars left are fewer than current maxLen
    // it's not possible for there to be a longer subStr
    if (str.length - i < maxLen) {
      return maxLen;
    }

    for (let j = i; j < str.length; j++) {
      if (subStr.includes(str[j])) {
        break;
      } else {
        subStr += str[j];
      }
    }

    if (subStr.length > maxLen) {
      maxLen = subStr.length;
    }
  }
  return maxLen;
}

// Time: O(n^2) quadratic
// Time: O(n)
function lenOfLongestSubStr2(str) {
  let maxLen = 0;

  for (let i = 0; i < str.length; i++) {
    let count = 0;
    let seen = {};

    // if remaining chars left are fewer than current maxLen
    // it's not possible for there to be a longer subStr
    if (str.length - i < maxLen) {
      return maxLen;
    }

    for (let j = i; j < str.length; j++) {
      let char = str[j];

      if (seen.hasOwnProperty(char)) {
        break;
      } else {
        seen[char] = true;
        count++;
      }
    }

    if (count > maxLen) {
      maxLen = count;
    }
  }
  return maxLen;
}

// src = Morley Tatro
// Time: O(n) linear
// Space: O(n)
function longestSubstring(str) {
  const seenChars = {};

  let longest = 0,
    startIndex = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (seenChars.hasOwnProperty(char) && startIndex <= seenChars[char]) {
      startIndex = seenChars[char] + 1;
    }

    seenChars[char] = i;
    const diff = i - startIndex + 1;

    if (diff > longest) {
      longest = diff;
    }
  }
  return longest;
}
