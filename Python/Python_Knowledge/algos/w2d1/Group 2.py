
# Given an list of strings
# return a sum to represent how many times each list item is found (a frequency table)

# Useful methods:
# dict.has_key(key)

# Examples:
# Input: ['a', 'a', 'a']
# Output: {
#   'a': 3
# }


# Input: ['a', 'b', 'a', 'c', 'B', 'c', 'c', 'd']
# Output: {
# a: 2,
# b: 1,1
# c: 3,
# B: 1,
# d: 1
# }

# Input: [],
# Output: {}
# create a function that receives a list
# create a for loop that goes through that list
# check if the value at i is a current key, if not add i and its value += 1 to the dictionary.
# return the new dictionary as the output.

def dict_from_list(listy): 
    new_dict = {}
    for i in listy:
        if i in new_dict:
            new_dict[i] += 1
        else:
            new_dict[i] = 1
    return new_dict


print(dict_from_list(['a', 'b', 'a', 'c', 'B', 'c', 'c', 'd']))











# Reverse Word Order

# Create a function that, given a string of words (with spaces), returns 
# new string with words in reverse sequence.

# Input: "This is a test"
# Output: "test a is This"

stringy = "This is a test"
def YodaString(stringy):
    new_list = []
    new_string = ''
    new_list = stringy.split()
    yoda = new_list.reverse()
    new_string = ''.join(yoda)
    for i in yoda:
        new_string.append([i])
        return new_string

    # print(yoda)
print(YodaString(stringy))

stringy = "This is a test"
def YodaString(stringy):
    new_list = []
    new_string=""
    new_list = stringy.split()
    new_list.reverse()
    new_string = " ".join (new_list)
    
    
    return new_string
print(YodaString(stringy))


# Create a function that takes a string
# goes through that string and creats a broken out list and then reverse those index substrings and then adds back to gether in a for loop.


