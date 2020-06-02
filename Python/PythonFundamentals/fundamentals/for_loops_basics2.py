#1 Biggie Size
def biggie_size(arr):
    for i in range(len(arr)):
        if arr[i] > 0:
            arr[i] = "big"
    return arr
print(biggie_size([1,-4,-5,3]))

#2 Count Positives
def count_positives(arr):
    sum = 0
    for i in range(len(arr)):
        if arr[i] > 0:
            sum += 1
    arr[-1] = sum
    return arr
print(count_positives([1,6,-4,-2,-7,-2]))

#3 Sum Total
def sum_total(arr):
    sum = 0
    for i in range(len(arr)):
        sum = sum + arr[i]
    return sum
print(sum_total([1,6,-4,-2,-7,-2]))

#4 Average
def average(arr):
    sum = 0
    for i in range(len(arr)):
        sum = sum + arr[i]
    return sum / len(arr)
print(average([1,6,4,5,7]))

#5 Length
def length(arr):
    return len(arr)
print(length([1,6,4,5,7]))

#6 Minimum
def minimum(arr):
    min = arr[0]
    if len(arr) == 0:
        return False
    for i in arr:
        if i < min:
            min = i
    return min
print(minimum([1,6,4,5,7]))

#7 Maximum
def maximum(arr):
    max = arr[0]
    if len(arr) == 0:
        return False
    for i in arr:
        if i > max:
            max = i
    return max
print(maximum([37,2,1,-9]))
#8 Ultimate Analysis
def ultimate_analyze(arr):
    analysis = {
        'sumtotal' : sum_total(arr),
        'avg' : average(arr),
        'min' : minimum(arr),
        'max' : maximum(arr),
        'len' : length(arr)
    }
    return analysis
print(ultimate_analyze([37,2,1,-9]))


#9 Reverse List
def reversed(arr):
    arr = arr[::-1]
    return arr
print(reversed([1,6,4,5,7]))