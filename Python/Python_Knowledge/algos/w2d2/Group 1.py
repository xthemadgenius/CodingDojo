
# Given a string containing space separated words
# Reverse each word in the string.

# If you need to, use .split to start, then try to do it without.
# Input: "hello"
# Output: "olleh"

# Input: "hello world"
# Output: "olleh dlrow"

# Input: "abc def ghi"
# Output: "cba fed ihg"


def reverseword(word):
    newStr = word.split(" ")
    breakMe = [i[::-1] for i in newStr]
    flipped = " ".join(breakMe)
    return flipped

test = 'words are bad'
print(reverseword(test))


# String: Dedupe

# Remove duplicate characters 
# - (case-sensitive) including punctuation.

# Bonus: Keep only the last instance of each character.

# Input: "Snaps! crackles! pops!"
def removeDuplicate(string):
    setUp = set()
    box = []
    for changeUp in string:
        if changeUp not in setUp:
            setUp.add(changeUp)
            box.append(changeUp)

    return ''.join(box)        

string = "Snaps! crackles! pops!"
print(removeDuplicate(string))