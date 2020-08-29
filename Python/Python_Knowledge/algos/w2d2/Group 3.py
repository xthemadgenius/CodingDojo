
# Given a string containing space separated words
# Reverse each word in the string.

# If you need to, use .split to start, then try to do it without.
# Input: "hello"
# Output: "olleh"

# Input: "hello world"
# Output: "olleh dlrow"

# Input: "abc def ghi"
# Output: "cba fed ihg"


a = 'hello world'
print(a[::-1])


def rev_Word(word):
    words = word.split()
    reverseWords = [i[::-1] for i in words]
    word = ' '.join(reverseWords)
    return word
print(rev_Word('hello'))
print(rev_Word('hello world'))
print(rev_Word('abc def ghi'))

# String: Dedupe

# Remove duplicate characters 
# - (case-sensitive) including punctuation.

# Bonus: Keep only the last instance of each character.

# Input: "Snaps! crackles! pops!"
# Output: "Snrackle ops!"

def removeDup(word):
    newList = []
    for i in range(len(word)-1, -1, -1):
        newList.append(word[i])
    print(newList)
print(removeDup('Snaps! crackles! pops!'))