# Balance Point <-- between indices

# Write a function that returns whether the given
# list has a balance point between indices, 
# where one side’s sum is equal to the other’s. 

# Input: [1,2,3,4,10]
# Output: true ( between indices 3 & 4 )

# Input: [1,2,4,2,1]
# Output: false 

list = [1,2,3,4,10]

def helper (list): 
    total_sum = 0
    for i in list: 
        total_sum += i

    return total_sum

def balance_point (list): 
    leftsum = 0
    right_sum = (helper(list))/2 
    for i in list: 
        if leftsum == right_sum:
            return True
        else: 
            leftsum += i
    return False

print(balance_point([1,2,3,4,10]))

    



    

# Balance Index <-- on and including index

# Here, a balance point is on an index, not between indices.
# Return the balance index where sums are equal on either side
# (exclude its own value).

# Return -1 if none exist.

# Input: [-2,5,7,0,3]
# Output: 2

# Input: [9,9]
# # Output: -1

# for check needs to start at index 1,

def helper (list): 
    total_sum = 0
    for i in list: 
        total_sum += i

    return total_sum

def balance_point (list): 
    length = (len (list)-1)
    left_sum = 0
    right_sum = 0
    for i in range (1, length, 1): 
        left_sum = helper (list[0:i])
        right_sum = helper (list [i+1:length+1])

        if left_sum == right_sum:
            return i    
    return -1
        
print(balance_point([-2,5,7,0,3]))