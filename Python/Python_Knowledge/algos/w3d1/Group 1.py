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

def balancePoint(list):
    front = 0
    back = list[len(list)-1]
    i = 0
    while i < len(list):
        front += list[i]
        i += 1


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



# missing something? LOL 

# Balance Index <-- on and including index

# Here, a balance point is on an index, not between indices.
# Return the balance index where sums are equal on either side
# (exclude its own value).

# Return -1 if none exist.
    
# Input: [-2,5,7,0,3]
# Output: 2

# Input: [9,9]
# Output: -1


# This is not finsihed, but it at least returns -1 when appropriate 
def balance_index(input): 
    leftsum = 0
    rightsum = 0
    total = len(input) 

    #check each index
    for i in range(total): 
        leftsum = 0
        rightsum = 0

        for j in range(i): 
            leftsum += input[j] 

        for k in range(total, i, -1): 
            rightsum += input[k]

        if leftsum == rightsum: 
            return i
        
        return -1











