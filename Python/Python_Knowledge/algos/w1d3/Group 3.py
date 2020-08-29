
# Parens Valid

# Given a string that has parenthesis in it
# Return whether the parenthesis are valid

# Input: "()()()"
# Output: True

# Input: "((()))"
# Output: True

# Input: "((())"
# Output: False

# Input: ")("
# Output: False



def parens_Valid(newStr):
    new_list = []
    for myStr in string:
        if string in ["{", "[","("]:
            new_list.append(i)
        else:
            if not new_list:
                return False
            newStr = new_list.pop()
            if newStr == "(":
                if myStr != ")":
                    return False
            if newStr == "{":
                if myStr != "}":
                    return False
            if newStr == "[":
                if myStr != "]":
                    return False
        

            


print(parens_valid("()()()"))
print(parens_valid("((()))"))
print(parens_valid("((())"))
print(parens_valid(")("))

            
            


https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/



# Acronyms

# Create a function that, given a string, returns the string’s acronym 
# (first letter of each word capitalized). 

# Input: "there's no free lunch - gotta pay yer way."
# Output: "TNFL-GPYW"

# Input: "Live from New York, it's Saturday Night!"
# Output: "LFNYISN"

phrase = "there's no free lunch - gotta pay yer way."
listy_list = splice.phrase

