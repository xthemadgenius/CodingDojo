
# Binary Search

# Search to find if the value exists, do not loop over every element.

# Approach:
# Take the middle item and compare it to the given value.
# Based on that comparison, narrow your search to a particular section of the array

# Input: [1, 2, 3, 4, 5], 4
# Output: True

# Input: [1, 3, 6, 9, 13], 1
# Output: True

# Input: [2, 4, 6, 8, 10, 12, 14], 7
# Output: False

def binary(listy, num):
    low = 0
    high = len(listy)-1
    result = False
    while low <= high and not result:
        mid = (high+low)//2
        if listy[mid] == num:
            result = True
        else:
            if num < listy[mid]:
                high = mid - 1
            else:
                low = mid + 1
    return result
print(binary([1, 2, 3, 4, 5], 4))
print(binary([1, 3, 6, 9, 13], 1))
print(binary([2, 4, 6, 8, 10, 12, 14], 7))



# Haven't tested this yet

def binary_search(input_list,num):

    list_len = len(input_list)
    middle = 0
    iterate = 0

    if list_len % 2 == 0:
        middle = list_len / 2

    else:
       middle = (list_len - 1) / 2

    if middle != input_list[middle]:
        iterate = middle + 1

    else:
        return True
    
    while iterate < list_len:
        if num != input_list[iterate]:
            iterate += 1
        else:
            return True
    return False
    
print(binary_search ([1, 2, 3, 4, 5], 4))
print(binary_search([1, 3, 6, 9, 13], 1))
print(binary_search([2, 4, 6, 8, 10, 12, 14], 7))