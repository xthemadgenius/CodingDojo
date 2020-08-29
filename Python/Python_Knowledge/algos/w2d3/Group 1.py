
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

def is_anagram(string1, string2):
    x=string1.replace(" ", "").lower()
    y=string2.replace(" ", "").lower()
    
    for char in string1:
        if sorted(x) == sorted(y):
            return True
        else:
            return False



print(is_anagram("yes", "ey s"))
print(is_anagram("yes", "eYs"))
print(is_anagram("no", "noo"))
print(is_anagram("silent", "listen"))














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

#create a function that passes in a list of dictionaries for new and a list for current
#check current dictionary for the key in the "new inventroy list" if not in, add it to the dictionary 
#if it is in the dictionary += to the current inventory number.

#idea would be to update current inventory, however adding new list is also functional

def update_inventory(current_inventory, new_inventory)






print(update_inventory(dict1, dict3))
print(update_inventory(dict2, dict3))
dict1 = []
dict2 = [
{ name: "Grain of Rice", quantity: 9000 },
{ name: "Peanut Butter", quantity: 50 },
{ name: "Royal Jelly", quantity: 20 },
]
dict3 = [
{ name: "Peanut Butter", quantity: 20 },
{ name: "Grain of Rice", quantity: 1 },
]

def update_inventory(inventory, new_inventory)