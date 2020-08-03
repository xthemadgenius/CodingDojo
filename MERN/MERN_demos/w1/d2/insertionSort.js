/* 
  - visualization with playing cards (scroll down): https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
  - array / bar visualization: https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

  - efficient for small data sets or mostly sorted data sets

  Time Complexity
    - Best: O(n) linear when array is already sorted
    - Average: O(n^2) quadratic
    - Worst: O(n^2) quadratic when the array is reverse sorted

  Space: O(1) constant

  - this sort splits the array into two portions (conceptually, not literally)
  - the left portion will become sorted, the right portion (that hasn't been iterated over yet) is unsorted

  // can shift OR swap target element until it reaches desired position
  // shifting steps:
  1. consider the first item as sorted
  2. move to the next item
  3. store current item in a temp var (to make this position availale to shift items)
  4. if item to the left of current is greater than current item, shift the left item to the right
  5. repeat step 4 as many times as needed
  6. insert current item
  7. move to the next item and repeat

  // swap steps:
  1. consider the first item as sorted
  2. move to the next item
  4. if item to left of current item is less than current, swap
  5. repeat step 4 until item to left is less than current item
  6. move to next item and repeat
*/

const arrRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function insertionSortShift(arr) {
  for (let i = 1; i < arr.length; i++) {
    // save the current 'target' so this space is available to use for shifting
    let numToInsert = arr[i];
    let leftIdx = i - 1;

    while (leftIdx >= 0 && arr[leftIdx] > numToInsert) {
      // shift to the right because it's greater than the item we are going to insert
      arr[leftIdx + 1] = arr[leftIdx];
      leftIdx--;
    }
    // shifting complete, insert position located
    arr[leftIdx + 1] = numToInsert;
  }
  return arr;
}

function insertionSortSwap(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currIdx = i; // to avoid altering i directly
    let leftIdx = currIdx - 1; // compare to the left

    while (leftIdx >= 0 && arr[leftIdx] > arr[currIdx]) {
      // destructure swap notation
      [arr[leftIdx], arr[currIdx]] = [arr[currIdx], arr[leftIdx]];

      // curr got swapped to the left, so currIdx is now 1 to the left
      currIdx--;
      leftIdx = currIdx - 1;
    }
  }
  return arr;
}
