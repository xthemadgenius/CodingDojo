// https://leetcode.com/problems/two-sum/
// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Bonus: Make it O(n) time
*/
const { testDriver } = require("../../helpers");

const nums1 = [2, 11, 15, 7];
const targetSum1 = 9;
const expected1 = [0, 1];
// Explanation: nums[0] + nums[1] = 2 + 7 = 9

const testCases = [{ arguments: [nums1, targetSum1], expected: expected1 }];
testDriver([sumTwo, sumTwoSpaceOptimized], testCases);

// src: Morley Tatro
// Time: O(n) linear, Space: O(n)
function sumTwo(nums, targetSum) {
  const numsAndIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = targetSum - num;

    if (numsAndIndices.hasOwnProperty(diff)) {
      // console.log(numsAndIndices);
      return [numsAndIndices[diff], i];
    }
    numsAndIndices[num] = i;
  }
}

// Time: O(n^2) quadratic, Space: O(1) constant
function sumTwoSpaceOptimized(nums, targetSum) {
  const indicies = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === targetSum) {
        indicies.push(i, j);
        break;
      }
    }
  }
  return indicies;
}
