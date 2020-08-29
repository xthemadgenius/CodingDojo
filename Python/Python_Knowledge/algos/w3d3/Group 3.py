
#   List: Remove Duplicates

#   Given a SORTED list of integers, dedupe the list 
#   Because list elements are already in order, all duplicate values will be grouped together.

#   Ok to use a new list

#   Bonus: do it in O(n) time (no nested loops, new list ok)
#   Bonus: Do it in-place (no new list)
#   Bonus: Do it in-place in O(n) time and no new list

#   Sensei Bonus: Keep it O(n) time even if it is not sorted

# Input: [1, 1, 1, 1]
# Output: [1]

# Input: [1, 1, 2, 2, 3, 3]
# Output: [1, 2, 3]

# Input: [1, 1, 2, 3, 3, 4]
# Output: [1, 2, 3, 4]

# Input: [5, 2, 8, 2, 345, 1]
# Output: [5, 2, 8, 345, 1]

def removeDupe(test):
    count = {}
    for i in range(len(test)):
        if i not in count.keys():
            count[str(test[i])] = 1
    test = []
    for key in count.keys():
        test.append(int(key))
    return test
print(removeDupe([1, 1, 1, 1]))
print(removeDupe([1, 1, 2, 2, 3, 3]))
print(removeDupe([1, 1, 2, 3, 3, 4]))
print(removeDupe([5, 2, 8, 2, 345, 1]))



# Version 2 

def remove_duplicates_2(input_list):
    
    num_set = set()

    for i in input_list:
        num_set.add(i)

    input_list = []

    for n in num_set:
        input_list.append(n)

    return input_list
    
print(remove_duplicates_2([1, 1, 1, 1]))
print(remove_duplicates_2([1, 1, 2, 2, 3, 3]))
print(remove_duplicates_2([1, 1, 2, 3, 3, 4]))
print(remove_duplicates_2([5, 2, 8, 2, 345, 1]))