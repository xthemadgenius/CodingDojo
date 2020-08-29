
# Given a string containing space separated words
# Reverse each word in the string.

# If you need to, use .split to start, then try to do it without.
# Input: "hello"
# Output: "olleh"

# Input: "hello world"
# Output: "olleh dlrow"
# Input.1 [hello, world]
# Do some stuff [olleh, dlorw]
# concatinate back without list and comma so "olleh dlorw"

# Input: "abc def ghi"
# Output: "cba fed ihg"

# create function that accepts a string
# create an empty list
# loop through the string 
# if the position in the string is not a space
# then append that letter to the empty list


string = "hello world"

def reverse_word(string):
    empty_list = []
    
    for i in range (len(string)):
        if string[i] != " ":
            empty_list.append(string[i])

    left = 0
    right = (len(empty_list)-1)
    print(left)
    print(right)
    while left != right and left < right:
        temp = empty_list[left]

        empty_list[left] = empty_list[right]
        empty_list[right] = temp

        left += 1
        right -= 1
    return empty_list


string="hello world"
def reverse_word(string):
    x=string.split()
    x.reverse()
    for i in x:
        print x[i]


reverse_word('hello world')

# String: Dedupe
string="hello world"
def reverse_word(string):
    x=string.split()
    x.reverse()
    for i in x:
        z=i.split()
        print(z)


reverse_word('hello world')

# Remove duplicate characters 
# - (case-sensitive) including punctuation.

# Bonus: Keep only the last instance of each character.

# Input: "Snaps! crackles! pops!"
# Output: "Snrackle ops!"
