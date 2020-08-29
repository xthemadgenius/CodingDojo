
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


#create a function
#user string input
#that function will work like a reverse function and evaluate the beginning of the string and the end of the string and stop in the middle.*args
#set reverse to variable and if variable didn't equal user input return as false, or return as true.*args

# def find_palindrome (str) :
#     temp1 = str
#     temp2 = 0
#     for x in string : 
#         len(str-1-x)

def find_palindrome(str):
    stringlength = (len(str))
    slicedString=str[stringlength::-1]
    if slicedString == str:
        longest_substring()
        return True

    else:
        return False
    
    
print (find_palindrome("a x a"))



# Longest Palindrome


# For this challenge, we will look not only at the entire string provided, but 
# also at the substrings within it. Return the longest palindromic substring. 
# Longest Palindrome

# Input: "what up, daddy-o?"


# Input: "uh, not much"
# Output: "u"

# Input: "Yikes! my favorite racecar erupted!"
# Output: "e racecar e"

# Strings longer or shorter than complete words are OK.

# All the substrings of "abc" are:
# a, ab, abc, b, bc, c

#create a function to accept the string
#create two variables (count, tmp_count)
#
print (find_palindrome("hha x ath"))


# create function to find longest palindrome, 
#set  len (str) equal to length
#use a counter to count how 
#first for loop calls a function the function is checking the string at length-x for a palindrome, stopping when the values stop being palindromes 
#each time for loop iterates it would pull in the function and that function would check substrings for palindromes.  
#it would return palindromic substring.
    for x in string :


def longest_substring(str):
    tmp_count, pal_count, str_lngth = 0,0,0
    str_lngth = len(str)
    str_rvse = str.reverse()

    for i in str
    if i == str_rvse[tmp_count]
    tmp_count += 1
    if i != str_rvse[pal_count]
    tmp_count = 0
    if find_palindrome(str[1:7]):
        return str[1:7]

