
# An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
# using all the original letters exactly once.

# Given two strings return whether or not they are anagrams

# Input: "yes", "ey s"
# Output: true

# Input: "yes", "eYs"
# Output: true

# Input: "no", "noo"
# Output: false

# Input: "silent", "listen"
# Output: true 

str3 = "yes"
str4 = "eYs"

str5 = "no", "noo"

str7 = "silent", "listen"

# create a function that excepts two strings. 
# create variables that give us the length of the strings
# create a conditional statement to first check if the lengths of the strings are the same
# if the strings are equal in length, then create a loop to iterate through the first string for the characters in the string
# loop starting at the first char in the first string...
# loop through the 2nd string to check and see if any letters match
# 
# and print yes or no depending whether or not is true or false
# 
# 


def anagram(word, string):
    eval_1 = len(word)
    eval_2 = len(string)
    if eval_1 == eval_2:
    for eval_1[0] #finish this loop to iterate ++
        if eval_1[0] == eval_2[0]            
            return true
        while x in eval_2:
            if eval_1[x] == eval_2[x]:
                break
            elif eval_1[x] != eval_2[x]:








# Given a list of dictionaries to represent new inventory,
# and a list of dictionarys to represent current inventory,
# update the quantities of the current inventory

# if the item doesn't exist in current inventory, add it to the inventory
# return the current inventory after updating it.
# Examples:

# No new inventory
# Input: [], [{ name: "Peanut Butter", quantity: 20 }]
# Output: [{ name: "Peanut Butter", quantity: 20 }]

# No current inventory
# Input: [{ name: "Peanut Butter", quantity: 20 }], []
# Output: [{ name: "Peanut Butter", quantity: 20 }]

# Input: [
# { name: "Grain of Rice", quantity: 9000 },
# { name: "Peanut Butter", quantity: 50 },
# { name: "Royal Jelly", quantity: 20 },
# ],
# [
# { name: "Peanut Butter", quantity: 20 },
# { name: "Grain of Rice", quantity: 1 },
# ]

# Output: [
# { name: "Peanut Butter", quantity: 70 },
# { name: "Grain of Rice", quantity: 9001 },
# { name: "Royal Jelly", quantity: 20 },
# ]