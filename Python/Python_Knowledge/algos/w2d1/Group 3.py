])
# Given an list of strings
# return a sum to represent how many times each list item is found (a frequency table)

# Useful methods:
# dict.has_key(key)

# Examples:
# Input: ['a', 'a', 'a']
# Output: {
#   'a': 3
# }

def string_count(random):
    sum = 0
    for thing in random:
        sum += 1
    new_dic = {random[0]: sum}
    print(new_dic)
    print(sum)
    return new_dic
string_count(['a', 'a', 'a'])


# Input: ['a', 'b', 'a', 'c', 'B', 'c', 'c', 'd']
# Output: {
# 'a': 2,
# 'b': 1,
# 'c': 3,
# 'B': 1,
# 'd': 1
# }

# Input: [],
# Output: {}

def string_count(random_2):
    new_dic_2 = {}
    for thing in random_2:
        # sum = 0
        # if ({random_2[thing]: sum} > random_2[thing]):
        # sum += 1
        new_dic_2.update(random_2[0] = 1)
        
    print(new_dic)
    return new_dic
string_count(['a', 'b', 'a', 'c', 'B', 'c', 'c', 'd'])