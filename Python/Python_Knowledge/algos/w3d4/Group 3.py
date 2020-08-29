
# Missing Value

# You are given a list of length N that contains, in no particular order,
# integers from 0 to N . One integer value is missing.
# Quickly determine and return the missing value.

def missing(listy_list):
    actual_sum, supposed_sum = 0, 0
    largest = listy_list[0]
    for i in listy_list:
        actual_sum += i
        if i > largest:
            largest = i
    for i in range(largest+1):
        supposed_sum += i
    return supposed_sum - actual_sum


print(missing([0, 3, 5, 1, 4]))

# Input: [3, 0, 1]
# Output: 2

# Input: [3, 0, 1, 2]
# Output: None

# create a function that compares for all values in a list to all integers that would be present for the total length

# Input: [3, 0, 1] (length=3) so if we compared the sum of the list to the sum of all i's in for the length we should get the remainder being the missing number.
# Output: 2

# i think this one will work fine, we just need a way to sum up the value without the missing int based on the length
# if we print that sum_of_list, it gives us 4, just the straight sum of the numbers

def missing_number (list):
    sum_of_list = sum(list)
    print(sum_of_list)
    new_sum= 0
    for i in range (0, len((list), 1):
        new_sum += i
        y= new_sum -sum_of_list
    return y

print (missing_number([3,0,1]))


def missing_number (list):
    sum_of_list = sum(list)
    list_len = len(list)
    new_sum = 0
    for i in range (0, (list_len + 1), 1):
        new_sum += i
    y= new_sum -sum_of_list
    return y

print (missing_number([3,0,1]))

        
# this is one i found that worked

def find_missing_number(list): 
    return [x for x in range(lst[0], lst[-1]+1)
    if x not in lst] 


lst = [1, 2, 4, 6, 7, 9, 10] 
print(find_missing_number(list))

# i didnt know you could do an equation type return.


def missing_n(list):
  actual_length_of_list = len(list) + 1
  actual_sum = 0
  current_sum = 0
  i = 0
  for i in actual_length_of_list:
    current_sum = 








# First Non-Reapeated

# Given a list of integers

# return the first integer from the list that is not repeated anywhere else
# If there are multiple non-repeated integers in the list,
# the "first" one will be the one with the lowest index.

# Input: [3, 5, 5]
# Output: 3

# Input: [3, 3, 5]
# Output: 5

# Input: [3, 5, 4, 3, 4, 6, 5]
# Output: 6

# Input: [5]
# Output: 5

# Input: []
# Output: None
    
# Input: []
# Output: None
    

def findFirst(givenArr):
order = []
counts = {}
for i in givenArr:
    if i in counts:
        counts[i] += 1
    else:
        counts[i] = 1
        order.append(i)
    for j in order:
        if counts[j] == 1:
        return j
    return None
first = findFirst([3, 5, 4, 3, 4, 6, 5])
print(first)
    

