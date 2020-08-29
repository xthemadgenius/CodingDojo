
# Binary Search

# Search to find if the value exists, do not loop over every element.

# Approach:
# Take the middle item and compare it to the given value.
# Based on that comparison, narrow your search to a particular section of the array

# Input: [1, 2, 3, 4, 5], 4
# Output: True

# Input: [1, 3, 6, 9, 13], 6
# Output: True

# Input: [2, 4, 6, 8, 10, 12, 14], 7
# Output: False

def binarySearch(arr, val):
    first = 0
    last = len(arr) - 1
    found = False
    while first <= last and not found:
        mid = (first + last)//2
        if val == arr[mid]:
            found = True # JK didnt see the 'and not' part of the loop! 
        elif: val < arr[mid]:
                last = mid - 1
        elif: val > mid:
                first = mid + 1
    return found

print(binarySearch([1,2,3,4,5,6,7,8],9))
