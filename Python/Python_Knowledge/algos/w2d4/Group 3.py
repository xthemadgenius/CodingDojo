
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

# ver 1 works for entire key value

def encode(word):
    dic = {}
    result = ''
    for char in word:
        dic[char] = 0
    for char in word:
        dic[char] += 1
    for letter in dic.keys():
        result += letter
        result += str(dic[letter])
    return result
print(encode('aaaabbcddd'))
print(encode('aaaabbaacddd'))
print(encode(''))
print(encode('a'))


# ver 2 works for consecutive values

def encode_2(string):
    current_letter = ''
    count = 1
    new_str = ''

    current_letter = string[0]
    first_letter = True

    for c in string:

        if first_letter:
            first_letter = False
            continue

        if c != current_letter:
            new_str += current_letter
            new_str += str(count)
            current_letter = c
            count = 1
        
        else:
            count += 1
        
    new_str += current_letter
    new_str += str(count)   

    return new_str

print(encode_2("aaaabbcaaddd"))


# String Decode  

# Create a function that accepts an encoded string, and decodes it

# Input: "a4b2c1d3"
# Output = "aaaabbcddd"

def decode(word):
    ref = [char for char in word]
    result = ''
    for i in range(1, len(ref), 2):
        print(ref[i])
        ref[i] = int(ref[i])
    for i in range(0, len(ref) - 1, 2):
        result += ref[i] * ref[i+1]
    return result
print(decode('a4b2c1d3'))