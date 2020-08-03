/*
  Input: arr, callback
  Output: arr (with elements removed)

  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.

  Return an empty array if the callback never returns true
*/

const { testDriver } = require("../../helpers");

const nums = [1, 4, 3, 6, 9, 15];

const callback1 = (elem) => {
  return elem > 5;
};
const expected1 = [6, 9, 15];

const callback2 = (elem) => {
  return elem > 2;
};
const expected2 = [4, 3, 6, 9, 15];

const callback3 = (elem) => false;
const expected3 = [];

const testCases = [
  { arguments: [nums.slice(), callback1], expected: expected1 },
  { arguments: [nums.slice(), callback2], expected: expected2 },
  { arguments: [nums.slice(), callback3], expected: expected3 },
];
testDriver([dropIt], testCases);

function dropIt(arr, callback) {
  let delCount = 0;

  for (const item of arr) {
    if (callback(item) !== true) {
      delCount++;
    } else {
      break;
    }
  }
  arr.splice(0, delCount);
  return arr;
}
