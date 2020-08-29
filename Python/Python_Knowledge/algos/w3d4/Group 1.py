
# Missing Value

# You are given a list of length N that contains, in no particular order,
# integers from 0 to N . One integer value is missing.
# Quickly determine and return the missing value.

# Input: [3, 0, 1]
# Output: 2

# Input: [3, 0, 1, 2]
# Output: None


def missing_value(a_list):
    for i in range(0, len(a_list)):
        if i not in a_list:
            return i
    return None

list_a = [3, 0, 1]
list_b = [3, 0, 2, 1, 4, 6]
list_c = [4, 2, 3, 1, 0]
print(missing_value(list_a))
print(missing_value(list_b))
print(missing_value(list_c))

# First Non-Reapeated

# Given a list of integers

# Return the first integer from the list that is not repeated anywhere else
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


my_dict = {
    'a': 1,
    'b': 2,
    'c': 3
}

for i in my_dict:
    print(i)

def notRepeat(a_list):
    count_dic = {}
    for i in a_list:
        if i not in count_dic:
            count_dic[i] = 1
        else:
            count_dic[i] += 1
    for key, value in count_dic.items():
        if value == 1:
            return key
    return None
list1 = [3, 5, 5]
list2 = [3, 3, 5]
list3 = [3, 5, 4, 3, 4, 6, 5]
list4 = [5]
list5 = []
print(notRepeat(list1))
print(notRepeat(list2))
print(notRepeat(list3))
print(notRepeat(list4))
print(notRepeat(list5))