/* 
Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the last idx
    - later these params will be used to specify a sub section of the array to partition
Steps:
1. Pick an number out of the arr to be your pivot value
    - usually the middle number or the last number
2. Partition the array IN PLACE such that all values less than the pivot value are to the left of it
and all values greater than the pivot value are to the right (not perfectly sorted)
3. return: new idx of the pivot value or the index where the left section of smaller items ends
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];

function partitionHoare(nums = [], left = 0, right = nums.length - 1) {
    const midIdx = Math.floor((left + right) / 2);
    const pivotVal = nums[midIdx];

    while (left < right) {
        while (nums[left] < pivotVal) {
            left++;
        }

        while (nums[right] > pivotVal) {
            right--;
        }
        // destructure swap syntax
        [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    return left;
}

/*
Visualization https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
Create a function that uses yesterday’s partition to fully sort an array in-place.
Unstable Sort

Time Complexity
    - Best: O(n log(n)) linearithmic
    - Average: O(n log(n)) linearithmic
    - Worst: O(n^2) quadratic
Space: O(1) constant
Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the last idx
    - later these params will be used to specify a sub section of the array to partition
Steps:
    - start by partitioning the full array (use the previously built partition algo)
    - then partition the left side of the array (left of the returned partition idx) and the right side (right of the returned partition idx), recursively
*/

const quickSort = (array, left = 0, right = (array.length - 1)) => {
    if (left >= right) {
        return array;
    }
    const pivot = partitionHoare(array, left, right);
    quickSort(array, left, pivot - 1)
    quickSort(array, pivot + 1, right);
    return array;
}
console.log(quickSort(nums1));
console.log(quickSort(nums2));