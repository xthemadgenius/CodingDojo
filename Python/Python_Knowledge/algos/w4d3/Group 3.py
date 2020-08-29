# Return the fibonacci number at the nth position, recursively.

# Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
# The next number is found by adding up the two numbers before it,
# starting with 0 and 1 as the first two numbers of the sequence.

# 1. Base/Break Case
# 2. Forward Progress
# 3. Recursive Call

#create base case

def fib_nums(x):
    if x<=1:
        return 0
    if x==2: 
        return 1
    return fib_nums(x-1) + fib_nums(x-2)

print (fib_nums(100))
# ^ Cloooser





function Fibonacci(num):
    x = 0
    y = 1
    temp = 0
    sum = 0
    i = 0
    while (i <= num):
        if (i == 0):
            sum = x
        
        else if (i == 1):
            sum = y
        
        else:
            sum = x + y
            temp = y
            y = x + y
            x = temp
        i++
    
    return sum
fibo = Fibonacci(4)
print(fibo)

# This is not recursive, but should explain the Fibonacci sequence better 

def do_fibonacci( num ):

    alpha = 0
    beta = 1
    
    for i in range( num ):
        
        gamma = alpha + beta 
        alpha = beta
        beta = gamma 

    return gamma


# Recursive Sigma

# Input: integer
# Output: sum of integers from 1 to Input integer

def sigma (y): 
    if y <=1: 
        return y
    return sigma(y-1) + y

print (sigma(10))

# create recursive function to track when character is breaking down a breakable_boulder
# concept is kick decreases hp(starting counter) of the breakable_boulder at a -1 hp per kick
