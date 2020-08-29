
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

# create a new list
# find the length of the current list we are searching populating 
# divide the length in half

def binarysearch(mylist, variable):
    left_boundary = 0
    right_boundary = len(mylist) - 1
    half_index = len(mylist)//2
    while half_index >= 0 and left_boundary != right_boundary: #this actually breaks it going right
        if variable > mylist[half_index]:
            left_boundary = half_index  
            half_index+=1
        elif variable < mylist[half_index]:
            right_boundary = half_index
            half_index -=1
        elif variable == mylist[half_index]:
            return True
        half_index = (right_boundary+left_boundary)//2 
    return False


print(binarysearch([2, 4, 6, 8, 10, 12, 14], 12))