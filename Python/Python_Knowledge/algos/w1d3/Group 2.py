
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


# Input string

string = "(asdflkajsdfoiwjlk((msadfh;ass)))df)aaa(asdflkmncxvmalksdfmg)(((())))"
# create a function that intakes a string
# For every open parenthesis you have a close
# You can have multiple open parenthesis in a row as long as they have a correlating number of closed
def parensValid(string):
    counter = 0
    for i in string:
        # If it starts off with a closed parenthesis toss an error
        if counter < 0:
            return False
        if i == "(":
            counter += 1
        elif i == ")":
            counter -= 1
    if counter == 0:
        # Return true if all parenthesis have a closing parenthesis
        return True
    else:
        return False
print(parensValid(string))

# Acronyms

# Create a function that, given a string, returns the string’s acronym 
# (first letter of each word capitalized). (.upper)

# Input: "there's no free lunch - gotta pay yer way."
# Output: "TNFL-GPYW" 

# Input: "Live from New York, it's Saturday Night!"
# Output: "LFNYISN"

#create a function
string_to_pass = "Jon Jones is a good guy"
list_to_not_pass = ["J","o","n"," ","J","o","n","e","s"," ","i","s"," ","a"," ","g","o","o","d"," ","g","u","y"]
def acronym(some_string):
    string_to_return = ''
    for counter in range(len(some_string)):
        if some_string[counter] == ' ':
            if len(some_string) - 1 == counter:
                break
            while some_string[counter + 1] == " ":
                counter += 1    
            string_to_return += some_string[counter + 1]
        elif counter == 0:
            string_to_return += some_string[counter]
        if len(some_string) - 1 == counter:
        elif some_string[counter + 1] == "-":
            string_to_return += some_string[counter]
        counter += 1
    return(string_to_return.upper())

print(acronym("there's no free lunch a - gotta pay yer way."))

#iterate through the string
#capture the first letter and first letter after a space and add to a new string
#capitalize all letters in the new string