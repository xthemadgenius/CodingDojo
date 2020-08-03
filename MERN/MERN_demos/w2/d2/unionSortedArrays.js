/* 
  Union Sorted Arrays

  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.

  Unions by default will take the set of dupes
  that has the highest occurences from one array.
*/

const { testDriver } = require("../../helpers");

const numsA = [1, 2, 2, 2, 7];
const numsB = [2, 2, 6, 6, 7];
const expected = [1, 2, 2, 2, 6, 6, 7];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

const testCases = [{ arguments: [numsA, numsB], expected: expected }];
testDriver([orderedMultisetUnion, orderedMultisetUnion2], testCases);

// Time: O(n) linear, where n = longest length
// Space: O(n + m) where n = arr1.length, m = arr2.length because if there are no dupes all will be kept from both
function orderedMultisetUnion(arr1, arr2) {
  const res = [];
  let idx1 = 0,
    idx2 = 0;

  while (idx1 < arr1.length || idx2 < arr2.length) {
    if (idx1 === arr1.length) {
      // arr2 is longer, push in all remaining arr2 nums
      res.push(arr2[idx2++]);
      continue;
    } else if (idx2 === arr2.length) {
      // arr1 is longer, push in remaining arr1 nums
      res.push(arr1[idx1++]);
      continue;
    }

    // both arrays still have items left to be processed, aka idx1 < arr1.length && idx2 < arr2.length
    if (arr1[idx1] === arr2[idx2]) {
      res.push(arr1[idx1++]);
      idx2++; // since both were same, increment both
    } else if (arr1[idx1] < arr2[idx2]) {
      res.push(arr1[idx1++]);
    } else {
      res.push(arr2[idx2++]);
    }
  }
  return res;
}

function orderedMultisetUnion2(arr1, arr2) {
  let idx1 = 0,
    idx2 = 0;
  const ret = [],
    len1 = arr1.length,
    len2 = arr2.length;

  while (idx1 < len1 && idx2 < len2) {
    const n1 = arr1[idx1],
      n2 = arr2[idx2];

    if (n1 === n2) {
      ret.push(n1);
      idx1++;
      idx2++;
    } else if (n1 < n2) {
      ret.push(n1);
      idx1++;
    } else {
      ret.push(n2);
      idx2++;
    }
  }
  // arrays might be different lengths, if any elems are remaining, concat them
  return ret.concat(arr1.slice(idx1)).concat(arr2.slice(idx2));
}
