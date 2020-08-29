
#   List: Remove Duplicates

#   Given a SORTED list of integers, de-dupe the list 
#   Because list elements are already in order, all duplicate values will be grouped together.

#   Ok to use a new list

#   Bonus: do it in O(n) time (no nested loops, new list ok)
#   Bonus: Do it in-place (no new list)
#   Bonus: Do it in-place in O(n) time and no new list

#   Sensei Bonus: Keep it O(n) time even if it is not sorted

# Input: [1, 1, 1, 1]
# Output: [1]

# Input: [1, 1, 2, 2, 3, 3]
# Output: [1, 2, 3]

# Input: [1, 1, 2, 3, 3, 4]
# Output: [1, 2, 3, 4]

# Input: [5, 2, 8, 2, 345, 1]
# Output: [5, 2, 8, 345, 1]

#create a function and iterate through the list. 
#create a new list
# while iterating, if [x] == [x+1], keep iteration going, if not append into new list?

#go through a for loop with an if check and then go through another for loop with another if check.
#for the values in the list, if the value 




def remove_dupes(list):
    new_list= []
    for x in list:  
        if x not in new_list: 
            new_list.append(x)
    return new_list

print (remove_dupes([1, 1, 1, 1]))
print (remove_dupes([1, 1, 2, 2, 3, 3]))
        

# set list equal to a dictionary and then back to a list (removes dupes and keys can't have duped values)

def list_dict_list (x):
    x = list(dict.fromkeys(x))
    return x
print (list_dict_list([1,1,1,1]))







