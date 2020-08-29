
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
# b: 1,
# c: 3,
# B: 1,
# d: 1
# }

# Input: [],
# Output: {}

def frequency(someList):
    result = {}
    for i in range(0, len(someList), 1):
        result[someList[i]] = 0
    for i in range(0, len(someList), 1):
        result[someList[i]] += 1
    return result

print(frequency(['a', 'b', 'a', 'c', 'B', 'c', 'c', 'd']))
print(frequency(['a','a','a']))
print(frequency([]))




# Reverse Word Order

# Create a function that, given a string of words (with spaces), returns 
# new string with words in reverse sequence.

# Input: "This is a test"
# Output: "test a is This"


def reverse_string(sentence):
    newList = sentence.split()
    for i in range(0, len(newList)//2, 1):
        temp = newList[i]
        newList[i] = newList[len(newList)-1-i]
        newList[len(newList)-1-i] = temp
    sentence = ''
    for i in range(0, len(newList), 1):
        sentence += newList[i] + ' '
    return sentence

print(reverse_string('This is a test'))
print(reverse_string('We are testing algos'))

