
# String: Is Palindrome

# Create a function that returns a boolean whether the string is a strict palindrome. 
# palindrome = string that is same forwards and backwards

# Input: "a x a"
# Output: true
# Input: "racecar"
# Output: true
# Input: "Dud"
# Output: false
# Input: "oho!"
# Output: false

# Do not ignore spaces, punctuation and capitalization

def Is_Palindrome(input):
    left = 0
    right = (len(input)-1)
    
    while left != right and left < right:
        if input[left] != input[right]:
            return False
        left += 1
        right -= 1
    return True


print(Is_Palindrome("a x a"))
print(Is_Palindrome("racecar"))
print(Is_Palindrome("Dud"))



# Longest Palindrome

# For this challenge, we will look not only at the entire string provided, but 
# also at the substrings within it. Return the longest palindromic substring. 

# Input: "uh, not much"
# Output: "u"

# Input: "Yikes! my favorite racecar erupted!"
# Output: "e racecar e"

# Strings longer or shorter than complete words are OK.

# All the substrings of "abc" are:
# a, ab, abc, b, bc, c

# We should be able to call the previous function in this one, so we don't have to repeat the previous code

# find the longest set of numbers that returns true for the function above
# iterate through the string at a particular character index while the above function is true
# if it is true add another character onto the left and right
# double letters are an edge case

#didn't return anything 
def longest_Palindrome(string):
    Is_Palindrome(string)
    charIndex = 0
    longestPalendrome = string[0]
    stringSize = len(string)
    while stringSize > 1:
        for i in range(len(string) - stringSize):
            if Is_Palindrome(string[i:stringSize]) == True:
                longestPalendrome = string[i:stringSize]
        stringSize -= 1
    return longestPalendrome


string1 = "Yikes! my favorite racecar erupted!"
string2 = "uh, not much"
print(longest_Palindrome(string1))
print(longest_Palindrome(string2))

https://www.freecodecamp.org/news/how-to-substring-a-string-in-python/