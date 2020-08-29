
# Recursive Binary Search

# Input: SORTED list of ints, int value
# Output: bool representing if value is found

# Input: [1, 2, 3, 4, 5], 4
# Output: True

# Recursively search to find if the value exists, do not loop over every element.

# Approach:
# Take the middle item and compare it to the given value.
# Based on that comparison, narrow your search to a particular section of th
# Add start and end and divide by two to get the midpoint
# If val is less than mid, move left (mid-1)
# If val is greater than mid, move right (mid+1)


def r_binary_search(listy, val, start=0, end=None):
    if end == None:
        end = len(listy) -1
    if start > end:
        return False
    mid = (start+end)//2
    if listy[mid] == val:
        return True
    if listy[mid] > val:
        return r_binary_search(listy, val, start, mid-1)
    if listy[mid] < val:
        return r_binary_search(listy, val, mid+1, end)
print(r_binary_search([1, 2, 3, 4, 5], 4))
print(r_binary_search([1, 2, 3, 5], 4))
print(r_binary_search([1, 2, 3, 4, 5, 6, 7, 8], 8))
print(r_binary_search([1, 2, 3, 4, 5, 6, 7, 8], 1))
print(r_binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12], 11))
