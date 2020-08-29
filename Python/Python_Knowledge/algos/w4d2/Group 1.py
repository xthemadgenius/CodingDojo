# 1. Base/Break Case | stop doing 
# 2. Forward Progress | move function along
# 3. Recursive Call | call the function inside itself

# Iterative | loops
# Recursive | Recursion

#                    [1, 2, 3] |   |   |   |  O(n)
def recursive_sum_list(listy):
    if len(listy) == 1:
        return listy[0]
    return listy[0] + recursive_sum_list(listy[1::])




print(recursive_sum_list([1, 2, 3, 4, 5, 6, 7, 8]), 'done with recursion')

# def sum_list(list):   |    |  O(n)
#     sum = 0
#     for i in list:
#         sum += i
#     return sum

# print(sum_list([1, 2, 3]))

num = 0
while num < 10:
    print(num)
    num += 1
