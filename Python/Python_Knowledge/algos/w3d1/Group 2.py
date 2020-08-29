# Balance Point <-- between indices

# Write a function that returns whether the given
# list has a balance point between indices, 
# where one side’s sum is equal to the other’s. 


# write a function that takes in a list
# iterate forwards and backwards summing as you go
# check the sums against one another, if they prove equal return true
# if they do not, return false

# Input: [1,2,3,4,10,10]
# Output: true ( between indices 3 & 4 )
# print('true', 'between )

# Input: [1,2,4,2,1]
# Output: false 

# Input: [ 5, 6, 7, 8, 9, 10]
# 2 sums [5, 11, 18...], [10, 19, 18, 25...]

# Input: [ 2,4,4,2]
# Output: true (between indices 1 & 2)

def bal_pnt(list):
    sum_forward = 0
    sum_backward = 0
    x = len(list-1)
    for i in list :
        sum_forward += i
        sum_backward += list[x] 
        x - 1
        if ((i+1) ==x):
            if (sum_forward == sum_backward):
                return True
            else:
                return False

bal_point = bal_pnt([1,2,3,4,10,10])
print(bal_point)


# How to use range in python:     
# x = range(3, 20, 2)
# for n in x:
#   print(n)

# range(start, stop, step)



# Balance Index <-- on and including index

# Here, a balance point is on an index, not between indices.
# Return the balance index where sums are equal on either side
# (exclude its own value).

# Return -1 if none exist.

# Input: [-2,5,7,0,3]
# Output: 2

# Input: [9,9]
# Output: -1

