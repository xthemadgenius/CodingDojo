/* 
  Intersect Sorted Arrays (dedupe)

  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.

  Output: only the shared values between the two arrays (deduped).
*/

const arrA = [0, 1, 2, 2, 2, 7];
const arrB = [2, 2, 6, 6, 7];
// Output: [2, 7]

function intersectSortedArraysDedupe(arr1, arr2) {
  let idx1 = 0,
    idx2 = 0;

  const len1 = arr1.length,
    len2 = arr2.length,
    orderedIntersection = [];

  while (idx1 < len1 && idx2 < len2) {
    if (arr1[idx1] === arr2[idx2]) {
      if (orderedIntersection[orderedIntersection.length - 1] !== arr1[idx1]) {
        orderedIntersection.push(arr1[idx1]);
      }
      idx1++;
      idx2++;
    } else if (arr1[idx1] < arr2[idx2]) {
      idx1++;
    } else {
      idx2++;
    }
  }
  return orderedIntersection;
}
