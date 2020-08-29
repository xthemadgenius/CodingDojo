
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
# iterate through the string

word1 = "racecar"

def check_palindrome(word):
    for x in range(0, len(word), 1):
        start_palindrome = word[x]
        end_palindrome = word[len(word) - 1 - x]
        mid_point = len(word) // 2
        if (start_palindrome != end_palindrome):
            return False
        elif (x >= mid_point):
            return "True"
        else:
            print("Good")

check_palindrome(word1)





def palindrome_check(string):
    x = 0
    y = len(string) - 1
    for char in range(len(string)):
        if (string[char[x]] != string[char[y]]):
            return False
        elif (string[char[x]] == string[char[y]]):
            y -= 1
            x += 1
        else:
            (x == y):
            return True
    return result
this_list = palindrome_check("a x a")
print(this_list)











# Longest Palindrome

# For this challenge, we will look not only at the entire string provided, but 
# also at the substrings within it. Return the longest palindromic substring. 

# Input: "what up, daddy-o?"


# Input: "uh, not much"
# Output: "u"

# Input: "Yikes! my favorite racecar erupted!"
# Output: "e racecar e"

# Strings longer or shorter than complete words are OK.

# All the substrings of "abc" are:
# a, ab, abc, b, bc, c
