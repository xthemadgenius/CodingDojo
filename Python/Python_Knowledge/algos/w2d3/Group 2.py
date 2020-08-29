
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



def anagram(word, string):
    def sort(newWord):
        return sorted(newWord.replace(" ", "").lower())
    return sort(word) == sort(string)

print(anagram('yes', 'ey ds'))
print(anagram("yes", "eYs"))
print(anagram("no", "noo"))
print(anagram("silent", "listen"))

# ver 2

def is_anagram(string1,string2):
    str1 = string1.replace(" " , "").lower()   
    str2 = string2.replace(" " , "").lower()

    return sorted(str1) == sorted(str2)



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

def new_invintory(dict_list_1,dict_list_2):
    for i in dict_list_1:
        for j in dict_list_2:
            if i['name'] == j['name']:
                i['quantity'] += j['quantity']
    return dict_list_1

[{ 'name': "Grain of Rice", 'quantity': 9000 },
{ 'name': "Peanut Butter", 'quantity': 50 },
{ 'name': "Royal Jelly", 'quantity': 20 }]


[
{ 'name': "Peanut Butter", 'quantity': 20 },
{ 'name': "Grain of Rice", 'quantity': 1 },
]



def new_invintory(dict_list_1,dict_list_2):
    for i in dict_list_1:
        for j in dict_list_2:
            if i['name'] == j['name']:
                i['quantity'] += j['quantity']
    return dict_list_1

[{ 'name': "Grain of Rice", 'quantity': 9000 },
{ 'name': "Peanut Butter", 'quantity': 50 },
{ 'name': "Royal Jelly", 'quantity': 20 }]


[
{ 'name': "Peanut Butter", 'quantity': 20 },
{ 'name': "Grain of Rice", 'quantity': 1 },