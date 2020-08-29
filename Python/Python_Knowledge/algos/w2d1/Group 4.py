
# Given an list of strings
# return a sum to represent how many times each list item is found (a frequency table)

# 1) Useful methods:
# dict.has_key(key)

# Examples:
# Input: ['a', 'a', 'a']
# Output: {
#   'a': 3
# }

def item_frequency(list_of_values):
    a_dic = {}
    for letter in list_of_values:
        if letter in a_dic:
            a_dic[letter] += 1
        else:
            a_dic[letter] = 1
    return a_dic
    #This works....
single_characters = ["a", "G", "G", "g", "e", "r", "a", "a"]

print(item_frequency(single_characters))
# Returns {'a': 3, 'G': 2, 'g': 1, 'e': 1, 'r': 1}


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



# 2) Reverse Word Order

# Create a function that, given a string of words (with spaces), returns 
# new string with words in reverse sequence.

# Input: "This is a test"
# [4, 7, 9]
# Output: "test a is This"

# create function called reverse_word_order
# declare variable called new_string and set it equal to an empty string
# declare a variable called char_index and set it equal to an empty list
# create variable called i equal to zero
# start a while loop to check for a space
# if there are spaces in the string, add 1 to the i, and subract 1 
# create a second while loop to get the last character index (length of the string and add it to a variable)
# we then decrement and append it
# start a for loop, assuming start at 0 and increment by 1, that iterates through the list  and 
# defines the comparing value as letter
# within that for loop, start a conditional if statement which will check for spaces
# append the position of the spaces in the string list
# define a value called newstring to equal the words in the range of the spaces
# 

def reverse_word_order(a_string):
    new_string = ""
    char_index = []
    i = 0
    while a_string[i] == " " or i == len(a_string): 
        i += 1
    j = len(a_string) - 1
    while a_string[j] == " " or j == 0:
        j -= 1
    char_index.append(j)
    for letter in a_string:
        if letter == " ":
            char_index.append(letter)
    char_index.append(i)
    for char in range(len(char_index) - 1, 1, -1):
        new_string = a_string[char - 1 : char]
    return new_string

a_string = "This is a test"
print(reverse_word_order(a_string))