
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

test = "a x a" # true
test2 = "racecar" # true
test3 = "Dud" # false
test4 = "oho!" # false

def isPalindrome(test):
    for i in range(0, len(test)//2, 1):
        if test[i] != test[len(test)-1-i]:
            return False
    return True

print(isPalindrome(test))
print(isPalindrome(test2))
print(isPalindrome(test3))
print(isPalindrome(test4))


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
# create variable to keep track of highest palindrome
# iterate through string from front and end
# compare each char interated from front and end 
# if char is equal increase left by 1 
# if char is not equal increase right by 1 
# if left is more than right than we have a palindrome 

string = "Yikes! my favorite racecar erupted!"
palArray = []
def longestPal():
    left = 0
    right = 0
    new_str = ''
    for i in range(0, len(string), 1)):
        for j in range(len(string)-1), len(string)//2, -1-j))
            if i == (len(string)-1):
                print("Loops are working")
            left += 1
        # if statement to find the order of 

print(longestPal("Yikes! my favorite racecar erupted!"))


# create function called longestPal2 that takes in a string
# def longestPal2(string):
#     maxPal = 1 # declare a variable called maxPal that keeps track of the longest Palindrome length
#     start = 0 # declare a variable called start that 
#     left = 0
#     right = 0
    
#     for i in range(1, len(string)):
#         left = i - 1
#         right = i
#         while left >= 0 and right < len(string) and sting[left] == string[right]:
#             if right - left + 2 > maxPal:
#                 start = left
#                 maxLength = right - left + 1
#             left += 1
#             right -= 1
#         while left >= 0 and right < len(string) and string[left] == string[right]:





