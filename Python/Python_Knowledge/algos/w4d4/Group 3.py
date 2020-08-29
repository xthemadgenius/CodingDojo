
# Recursive Binary Search

# Input: SORTED list of ints, int value
# Output: bool representing if value is found

# Input: [1, 2, 3, 4, 5], 4
# Output: True

# Recursively search to find if the value exists, do not loop over every element.

# Approach:
# Take the middle item and compare it to the given value.
# Based on that comparison, narrow your search to a particular section of the list (left or right)
def r_binary_search(listy, val, start=0, end=None):
    if end == None:
        end = len(listy)-1
    mid = (end + start)//2
    if listy[mid] == val or listy[start] == val or listy[end]== val:  
        return True
    if end == start:
        return False
    if listy[mid] > val: 
        return r_binary_search(listy, val, start, mid-1)  
    if listy[mid] < val: 
        return r_binary_search(listy, val, mid+1, end)

listy = [1, 2, 3, 4, 5]
val = 4
print(r_binary_search(listy, val))