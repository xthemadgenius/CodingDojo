# Return the fibonacci number at the nth position, recursively.

# Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

# The next number is found by adding up the two numbers before it,
# starting with 0 and 1 as the first two numbers of the sequence.

# 1. Base Case
# 2. Forward Progress
# 3. Recursive Call

# I would say that we start out with a list. [0, 1] 
# we know that is going to be the base of the sequence
# 
def fib_num(nth_pos):
    if nth_pos <= 0:
        return 0
    if nth_pos == 1:
        return 0
    if nth_pos == 2:
        return 1
    return fib_num(nth_pos-2)+fib_num(nth_pos-1)

print(fib_num(4))

# LTE for the possibility of getting 0, but yeah if we get in an input that is negative, we still want something back

# That makes sense.



# Recursive Sigma

# Input: integer
# Output: sum of integers from 1 to Input integer

def reSig(top_num):
    if top_num <= 0:
        return 0
    if top_num == 1:
        return top_num
    return reSig(top_num-1) + top_num

print(reSig(5))