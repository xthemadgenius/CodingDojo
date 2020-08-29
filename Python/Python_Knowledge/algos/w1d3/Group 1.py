
# Parens Valid

# Given a string that has parentheses in it
# Return whether the parentheses are valid

# Input: "()()()"
# Output: True

# Input: "((()))"
# Output: True

# Input: "((())"
# Output: False

# Input: ")("
# Output: False
#https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/

def parensValid(string):
    stack = []
    for char in string:
        if char in ["(", "{", "["]:
            stack.append(char)
        else:
            if not stack:
                return False
            current_char = stack.pop()
            if current_char == '(':
                if char != ")":
                    return False
            if current_char == '{':
                if char != '}':
                    return False
            if current_char == '[':
                if char != ']':
                    return False

    if stack:
        return False
    return True
    
    if parensValid(string):
        print ("True")
    else:
        print ("False")

string1 = "()()()"
string2 = "((()))"
string3 = "((())"
string4 = ")("
string5 = "{{[}}]"

print(parensValid(string1))
print(parensValid(string2))
print(parensValid(string3))
print(parensValid(string4))
print(parensValid(string5))



# Acronyms

# Create a function that, given a string, returns the string’s acronym 
# (first letter of each word capitalized). 

# Input: "there's no free lunch - gotta pay yer way."
# Output: "TNFL-GPYW"

# Input: "Live from New York, it's Saturday Night!"
# Output: "LFNYISN"

sentence = "A bird in the hand is worth two in the bush"

def Acronyms(sen):
    words = sen.split()
    acro = ""
    for word in words:
        acro = acro + word[0]
    return acro.upper()

print(Acronyms(sentence))
print(Acronyms("there's no free lunch - gotta pay yer way"))





