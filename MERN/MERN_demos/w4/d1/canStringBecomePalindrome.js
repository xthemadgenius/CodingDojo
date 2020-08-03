/* 
  Given to me (Neil) in an interview

  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters

  What is it about a string that makes it possible for it to be a palindrome?
*/

const { testDriver } = require("../../helpers");

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

const testCases = [
  { arguments: [str1], expected: expected1 },
  { arguments: [str2], expected: expected2 },
  { arguments: [str3], expected: expected3 },
  { arguments: [str4], expected: expected4 },
  { arguments: [str5], expected: expected5 },
  { arguments: [str6], expected: expected6 },
];
testDriver([canStrBecomePalindrome], testCases);

// Time: O(2n) -> O(n) linear
// Space: O(n)
function canStrBecomePalindrome(str) {
  if (str.length === 0) {
    return false;
  }

  const leftoverCharsTable = {};

  for (const char of str) {
    if (leftoverCharsTable.hasOwnProperty(char)) {
      delete leftoverCharsTable[char];
    } else {
      leftoverCharsTable[char] = true;
    }
  }

  return Object.keys(leftoverCharsTable).length <= 1 ? true : false;
}

// the loop over the object at the end is like the Object.keys loop above, except the above sln already
// deleted keys that could be cancelled out, so there are less iterations required in above sln
// Time: O(n) linear
// Space: O(n)
function canBecomePalindrome(str) {
  if (str.length === 0) {
    return false;
  }

  const charFrequencies = {};
  let oddFreqCount = 0;
  let isOddLen = str.length % 2 !== 0;

  for (const char of str) {
    if (!charFrequencies.hasOwnProperty(char)) {
      charFrequencies[char] = 1;
    } else {
      charFrequencies[char]++;
    }
  }

  for (const key in charFrequencies) {
    const charFreq = charFrequencies[key];

    // if odd occurrences
    if (charFreq % 2 !== 0) {
      oddFreqCount++;

      if ((isOddLen && oddFreqCount > 1) || (!isOddLen && oddFreqCount > 0)) {
        return false;
      }
    }
  }
  return true;
}