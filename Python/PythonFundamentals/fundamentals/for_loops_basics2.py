#1 Biggie Size
def biggie_size(arr):
    for i in range(len(arr)):
        if arr[i] > 0:
            arr[i] = "big"
    return arr

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
#6 Minimum
#7 Maximum
#8 Ultimate Analysis
#9 Reverse List