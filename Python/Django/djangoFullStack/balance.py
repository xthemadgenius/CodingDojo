# Balance Point <-- between indices

# Write a function that returns whether the given
# list has a balance point between indices, 
# where one side’s sum is equal to the other’s. 

# Input: [1,2,3,4,10]
# Output: True ( between indices 3 & 4 )

# Input: [1,2,4,2,1]
# Output: False 

# Input: [1, 2, 3, 6]
# Output: True

def balancePoint (list): 
    front = 0
    mid = (sum(list))/2 
    for i in list: 
        if front == mid:
            return True
        else: 
            front += i
    return False
    
print(balancePoint([1,2,3,4,10]))
print(balancePoint([1,2,4,2,1]))
print(balancePoint([1, 2, 3, 6]))