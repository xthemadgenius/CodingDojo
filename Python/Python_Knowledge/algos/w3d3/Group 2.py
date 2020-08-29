
#   List: Remove Duplicates

#   Given a SORTED list of integers, dedupe the list 
#   Because list elements are already in order, all duplicate values will be grouped together.

#   Ok to use a new list
#   Bonus: do it in O(n) time (no nested loops, new list ok)

def deDupe(a_list):
    new_list = []
    for item in a_list:
        if not item in new_list:
            new_list.append(item)
    return new_list

list_to_define = [1, 1, 2, 2, 3, 3]
print(deDupe(list_to_define))

# Output: [5, 2, 8, 345, 1]
# Bonus: Do it in-place (no new list)
list1 = [1, 1, 2, 2, 3, 3]
# [1, 1, 2, 2, 3, 3] -> [1, 1, 2, 2, 3, 3, 1, 2, 3] -> [1, 2, 3]
def dedupe2(list1):
    # define a variable called length and set it to the length of the list1
    length = len(list1)
    # create a counter called j and start it at 1
    j = 0
    # create a for loop with counter i which iterates through our list1
    for i in range(0, length):
        # create an if conditional statement that iterates through the old list and create a sublist
        if i not in list1[0:j]:
            # append the unique values
            list1.append(list1[i])
        if j >= length:
            break
        j += 1
    new_length = len(list1)
    difference = new_length - length
    j=0
    for item in range(length, new_length):
        list1[j] = list1[item]
        j+=1
    while len(list1) > difference:
        list1.pop() # output from this [1, 2, 3]?
    return list1

list.append the non dupe values 1, 2, 3 
len(list) = 6
list = [1, 2, 3] # this is the output

# Get the length of the current list
# Append unique values to the end of the list #####[0:item]
# Get the length of the new list in a seperate variable
# Move the new items to the beginning of the list
# Pop the difference between the new length and the old length

# def deDupe2(old_list):
#     position = len(old_list - 1)
#     for i in old_list:
#         counter += 1
#         if item in old_list and position <= old_list[position]:
#             old_list.append(i)
#             old_list.pop(counter)

        
            


#   Bonus: Do it in-place in O(n) time and no new list

#   Sensei Bonus: Keep it O(n) time even if it is not sorted

# Input: [1, 1, 1, 1]
# Output: [1]

# Input: [1, 1, 2, 2, 3, 3]
# Output: [1, 2, 3]

# Input: [1, 1, 2, 3, 3, 4]
# Output: [1, 2, 3, 4]

# Input: [5, 2, 8, 2, 345, 1]

# Recipe for success in algorithms/technical interview:
# 1) Problem Domain:
# 2) Inputs + Outputs
# 3) Edge Cases
# 3) Visual 
# 4) Algorithm
# 5) Pseudo
# 6) Code
# 7) Verification
# 8) Big O

# Example:
# 1) Given a SORTED list of integers, dedupe the list 
#    Because list elements are already in order, all duplicate values will be grouped together.
# 2) Input: [1, 1, 2, 2, 3, 3]
#    Output: [1, 2, 3]
# 3) Edge Cases:
#    - if list was empty
#    - list of null values
#    - etc 
# 4) Visual
#    [1, 1, 2, 2, 3, 3] -> [1, 1, 2, 2, 3, 3, 1, 2, 3] -> [1, 2, 3]
# 5) Algorithm 
#    - Define a list with values 1, 1, 2, 2, 3, 3
#    - Create a function called dedupe2 that will take in the list
#    - Define a variable which holds the original length of the list
#    - Define an interative counting value called j and set it to equal 0 
#    - etc
# 6) Pseudo - python is pretty much pseudo code itself since you don't need ; between lines or other "extra" stuff
# 7) Code - this should be a direct reflection of your Algorithm list step by step
# 8) Verification - draw out the T diagram we learned in fundies
# 9) Big O - this means EFFICIENCY! Don't worry about this until you can produce the same output 3+ different ways
#    Hope this helps - GL
