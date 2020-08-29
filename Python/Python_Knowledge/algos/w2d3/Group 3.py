
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

# Turn both strings lowercase
# Loop through the first string make sure all values are contained inside of the second string
    # return true if all values are in the string
# loop through the second string to make sure that all of the values are contained inside of it
    # return true if all values are in the string
# Edge case duplicate letters in either string


# def anagram(word_one, word_two):
#     word_one = word_one.lower()
#     word_two = word_two.lower()
#     first_word = ''
#     second_word = ''
#     for a in word_one:
#         if a != " ":
#             first_word += a
#     for a in word_two:
#         if a != " ":
#             second_word += a
#     for letter in first_word:
#         if letter not in second_word:
#             return False
#     for character in second_word:
#         if character not in first_word:
#             return False
#     return True

# print(anagram('yes', 'ey s'))
# print(anagram('yes', 'eYs'))
# print(anagram('no', 'noo'))
# print(anagram('silent', 'listen'))

def dic_anagram(str_one, str_two):
    str_one = str_one.lower()
    str_two = str_two.lower()
    dic_one = {}
    dic_two = {}
    for letter in str_one:
        if letter == " ":
            pass
        elif letter in dic_one.keys():
            dic_one[letter] += 1
        else:
            dic_one[letter] = 1
    for character in str_two:
        if character == " ":
            pass
        elif character in dic_two.keys():
            dic_two[character] += 1
        else:
            dic_two[character] = 1
    if dic_one == dic_two:
        return True
    else:
        return False

print(dic_anagram('yes', 'ey s'))
print(dic_anagram('yes', 'eYs'))
print(dic_anagram('no', 'noo'))
print(dic_anagram('silent', 'listen'))





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

# Given two lists with multiple dictionaries inside
# We need to iterate through the first list 

def inventory(new_products, current_products):
    for item in new_products:
        for old_stuff in current_products:
            if item['name'] == old_stuff['name']:
                old_stuff['quantity'] += item['quantity']
            # else:
            #     old_stuff['name'] = item['name']
            #     old_stuff['quantity'] = item['quantity']
    return current_products

# print(inventory([], [{ 'name': "Peanut Butter", 'quantity': 20 }]))
# print(inventory([{ 'name': "Peanut Butter", 'quantity': 20 }], []))
print(inventory(
    [{ 'name': "Grain of Rice", 'quantity': 9000 },
    { 'name': "Peanut Butter", 'quantity': 50 },
    { 'name': "Royal Jelly", 'quantity': 20 },],
    [{ 'name': "Peanut Butter", 'quantity': 20 },
    { 'name': "Grain of Rice", 'quantity': 1 },]))