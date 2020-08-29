# Return the fibonacci number at the nth position, recursively.

# Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

# The next number is found by adding up the two numbers before it,
# starting with 0 and 1 as the first two numbers of the sequence.

# 1. Base Case
# 2. Forward Progress
# 3. Recursive Call

def fibonacci(num):
    if num < 2:
        return 0
    if num == 2:
        return 1
    return fibonacci(num-2) + fibonacci(num-1)
print(fibonacci(1))
print(fibonacci(2))
print(fibonacci(3))
print(fibonacci(4))
print(fibonacci(5))

# Cloooser

fibonacci(-262) # Is -262 a Fibonacci number? 





# Recursive Sigma

def sigma(num):
    if num < 0:
        return num
    if num < 2:
        return num
    return num + sigma(num - 1)

print(sigma(1))
print(sigma(2))
print(sigma(3))
print(sigma(4))
print(sigma(5))
print(sigma(6))
print(sigma(7))

# Input: integer
# Output: sum of integers from 1 to Input integer

def sigma(num):
    result = 0
    for i in range (num + 1):
        result += i
    return result
print(sigma(1))
print(sigma(2))
print(sigma(3))
print(sigma(4))
print(sigma(5))
print(sigma(6))
print(sigma(7))





def recursive_sum_list(listy):
    if len(listy) == 1:
        return listy[0]
    return listy[0] + recursive_sum_list(listy[1::])




print(recursive_sum_list([1, 2, 3, 4, 5, 6, 7, 8]), 'done with recursion')