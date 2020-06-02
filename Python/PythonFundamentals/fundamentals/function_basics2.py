#1 countdown
def countdown(num):
    new = list(range(0, num))
    new.reverse()
    return new
print(countdown(6))

#2 print and return
def print_and_return(a,b):
    print(a)
    return b
print_and_return(1,2) 

#3 first plus length
def first_plus_length(array):
    print(array[0] + len(array))
first_plus_length([1,2,3,4,5])

#4values greater than Second
def values_greater_than_second(arr):
    for val in arr:
        if val == 3:
            break
        print(val)
values_greater_than_second([5,2,3,2,1,4])

#5this length, that value
def length_and_value(a,b):
    print(a* str(b))
length_and_value(6,2)