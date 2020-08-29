
# Given a string containing space separated words
# Reverse each word in the string.

# If you need to, use .split to start, then try to do it without.
# Input: "hello"
# Output: "olleh"

# Input: "hello world"
# Output: "olleh dlrow"

# Input: "abc def ghi"
# Output: "cba fed ihg"

# find the character indexes of all spaces
# Load each word into a list
# reverse the value of all of the words in the list
# add that list to a new string with a += at the bottom of the for loop
# edge case spaces on the front or the back

# def edge_reverse_word(param):
#     i = 0
#     j = len(param) - 1
#     a_list = []
#     spaces_list = []
#     starting_spaces = ""
#     ending_spaces = ""
#     while i == " " or i == len(param) - 1:
#         starting_spaces = param[0:i+1]
#         i+=1
#     while j == " " or j == 0:
#         ending_spaces = param[j:len(param)-1]
#         j-=1
    
#     for x in param: # range(i, j, 1):
#         if x >= i and x <= j:
#             if x == " ":
                

def reverse_word(sentence):
    sl = [0]
    wl = []
    ll = []
    output = ""
    for x in range(len(sentence)):
        if sentence[x] != " ":
            ll.append(sentence[x])
        else:
            sl.append(x)
    sl.append(len(sentence))
    i = sl[1]
    for i in sl:
        wl.append(ll[i-1:i])
    print(wl)
    for j in wl:
        j = j[:-1]
    for k in wl:
        output += k
        output += " "
    output = output[0: len(output)-1]
    return output
    

some_string = "oh happy day"
reverse_word(some_string)
# somewhere in the code 
#while len(new_list) > 0:
   # print(new_list[-1], end='')
   # new_list.pop()
   # print(end = '')


# reverses individual words of a string 
def reverserWords(string): 
    st = list() 
  
    # Traverse given string and push all characters 
    # to stack until we see a space. 
    for i in range(len(string)): 
        if string[i] != " ": 
            st.append(string[i]) 
  
        # When we see a space, we print  
        # contents of stack. 
        else: 
            while len(st) > 0: 
                print(st[-1], end= "") 
                st.pop() 
            print(end = " ") 
  
    # Since there may not be space after 
    # last word. 
    while len(st) > 0: 
        print(st[-1], end = "") 
        st.pop() 
  
# Driver Code 
if __name__ == "__main__": 
    string = "Geeks for Geeks"
    reverserWords(string) 


# String: Dedupe

# Remove duplicate characters 
# - (case-sensitive) including punctuation.

# Bonus: Keep only the last instance of each character.

# Input: "aaaaaaaaaaaaaaaaabbccddddddddd"
# Output: "abcd"

# Input: "Snaps! crackles! pops!"
# Output: "Snrackle ops!"
