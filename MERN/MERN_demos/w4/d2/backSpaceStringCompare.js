/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time
*/

const { testDriver } = require("../../helpers");

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

const testCases = [
  { arguments: [S1, T1], expected: expected1 },
  { arguments: [S2, T2], expected: expected2 },
  { arguments: [S3, T3], expected: expected3 },
  { arguments: [S4, T4], expected: expected4 },
];
testDriver([backspaceCompare], testCases);

/* 
  Time:
    Best Case: O(n + m), n = S.length, m = T.length
    Worst Case: O(2n + m), adding in the final loop
    Simplified: O(n), linear

  Space: O(n + m) -> O(n) linear
*/
function backspaceCompare(S, T) {
  const sBackspaced = getBackspacedStack(S);
  const tBackspaced = getBackspacedStack(T);

  if (sBackspaced.length !== tBackspaced.length) {
    return false;
  }

  for (let i = 0; i < sBackspaced.length; i++) {
    if (sBackspaced[i] !== tBackspaced[i]) {
      return false;
    }
  }
  return true;
}

function getBackspacedStack(str) {
  const backspacedStack = [];

  for (const char of str) {
    if (char !== "#") {
      backspacedStack.push(char);
    } else if (backspacedStack.length > 0) {
      backspacedStack.pop();
    }
  }

  return backspacedStack;
}

/* 
  Time:
    Best Case: O(n + m), n = S.length, m = T.length
    Worst Case: O(2n + m), adding in the final loop
    Simplified: O(n), linear

    Space: O(n + m) -> O(n) linear
*/
function backspaceCompare2(S, T) {
  let sBackspaced = processBackspaces(S);
  let tBackspaced = processBackspaces(T);

  if (sBackspaced === tBackspaced) {
    return true;
  } else {
    return false;
  }
}

function processBackspaces(s) {
  let backspaceCount = 0;
  let newS = "";

  for (let i = s.length - 1; i >= 0; --i) {
    let isBackspace = s[i] === "#";

    if (backspaceCount > 0 && !isBackspace) {
      backspaceCount--;
    } else if (isBackspace) {
      backspaceCount++;
    } else {
      newS = s[i] + newS;
    }
  }
  return newS;
}
