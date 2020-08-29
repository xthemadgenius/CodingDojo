
# String Encode

# You are given a string that may contain sequences of consecutive characters.
# Create a function to shorten a string by including the character,
# then the number of times it appears. 


# Input = "aaaabbcddd"
# Output: "a4b2c1d3"

# Input = ""
# Output: ""

# Input = "a"
# Output: "a1"

# if given a string with a length of zero return empty string
# if given a string with a length of one return that character 
    # and the number one


def some_string(stringy):
    lengthy = len(stringy)
    output = ""
    counter = 1
    if lengthy == 0:
        return output
    elif lengthy == 1:
        return stringy + "1"
    else:
        output = stringy[0]        
        for i in range(1, lengthy-1):
            if stringy[i] == stringy[i-1]:
                counter += 1
            else:
                output += stringy[i-1]+str(counter)
                counter = 1
        if stringy[len(stringy)-1] != stringy[len(stringy)-2]:
            output += stringy[len(stringy)-1] + "1"
        return output         


a_thing = "aaabbbbbbcccaaaeed"
print(some_string(a_thing))














# String Decode  

# Create a function that accepts an encoded string, and decodes it

# Input: "a4b2c1d3"
# Output = "aaaabbcddd"

# I want to take the odd indexes and loop through 


def numtoletter(stringy):
    counter = 0
    output = ""
    lenthy = len(stringy)
    for i in range(1, len(stringy)-1, 2):
        output += check(stringy[i-1], stringy[i])
    return output

def check(some_str, some_num):
    output = ""
    for i in range(some_num):
        output += some_str
    return 
        
        
string_to_return = "a4b2c1d3"
print(numtoletter(string_to_return))