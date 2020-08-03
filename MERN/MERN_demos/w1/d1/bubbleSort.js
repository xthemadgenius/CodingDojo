/* 
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  https://visualgo.net/en/sorting

  Time Complexity
    - Best: O(n) linear when array is already sorted
    - Average: O(n^2) quadratic
    - Worst: O(n^2) quadratic when the array is reverse sorted

  Space: O(1) constant
  
  For review, create a function that uses BubbleSort to sort an unsorted array in-place.

  For every pair of adjacent indicies, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

function bubbleSort(nums) {
  let isSorted = false;

  while (isSorted === false) {
    isSorted = true;

    for (let i = 0; i < nums.length - 1; i++) {
      const j = i + 1;

      if (nums[i] > nums[j]) {
        // having to swap, sorting is still in progress, not fully sorted yet
        isSorted = false;
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}
