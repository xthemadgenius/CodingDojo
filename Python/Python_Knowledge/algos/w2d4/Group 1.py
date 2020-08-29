
# String Encode

# You are given a string that may contain sequences of consecutive characters.
# Create a function to shorten a string by including the character,
# then the number of times it appears consecutively. 


# Input = "aaaabbcddd"
# Output: "a4b2c1d3"

# Input = "aabaaddd"
# Output: "a2b1a2d3"

# Input = ""
# Output: ""

# Input = "a"
# Output: "a1"

# function
# if check for len of string > 1 = checks that we aren't beyond string length
# for i in range(1, len(word)) = iterater through the string
# if check, to check the values in the string to verify if they're the same or not
# else to move the counter if the values dont match
# 

string="aaaabbcddd"
# Output: "a4b2c1d3"

def string_check ():
    count=1
    output= ""

    if len(string)>1:
        for i in range(1, len(string)):
            if string[i-1]==string[i]:
            count+=1
        
        else :
            output+=string[count]+string[i-1]
            count=1
    output += ("")
    return= output

print (string_check(string))

# Dictionary to list to string solution
def letter_count(string):
    new_dict = {}
    dict_list = []
    for i in string:
        if i in new_dict:
            new_dict[i] += 1
        else:
            new_dict[i] = 1
    for key, value in new_dict.items():
        temp =[key,value]
        dict_list.append(key)
        value = str(value)
        dict_list.append(value)
        final_string=''.join(dict_list)
        # print(dict_list)
    return (final_string)

print(letter_count("aaaaaaabbcddd"))



# String Decode  

# Create a function that accepts an encoded string, and decodes it

# Input: "a4b2c1d3"
# Output = "aaaabbcddd"

encoded_string = "a4b2c1d3"

def decoding(encoded_string):
    splitlist=list(encoded_string)
    print(splitlist)
    if len(encoded_string)>1:
        for i in range(1, len(encoded_string)):



# splitlist = ['a', '4', 'b', '2', 'c', '1', 'd', '3']