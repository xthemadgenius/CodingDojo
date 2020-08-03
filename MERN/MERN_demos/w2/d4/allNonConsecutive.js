/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.

  The first element is never considered non-consecutive.

  Return an array of objects where each object contains the number itself
  and it's index.
*/

const { testDriver } = require("../../helpers");

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];

const testCases = [{ arguments: [nums1], expected: expected1 }];
testDriver([allNonConsecutive], testCases);

function allNonConsecutive(nums) {}

/* ******************************************************************************** */

// O(n) time
function allNonConsecutive(nums) {
  const output = [];

  for (let i = 1; i < nums.length; i++) {
    const prevNum = nums[i - 1];
    const currNum = nums[i];
    const isConsecutive = prevNum + 1 === currNum;

    if (!isConsecutive) {
      output.push({
        i: i,
        n: currNum,
      });
    }
  }
  return output;
}
