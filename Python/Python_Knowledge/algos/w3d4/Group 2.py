
# Missing Value

# You are given a list of length N that contains, in no particular order,
# integers from 0 to N . One integer value is missing.
# Quickly determine and return the missing value.

# Input: [3, 0, 1]
# Output: 2

# Input: [3, 0, 1, 2]
# Output: None

#given an unordered list of integers
#one interger value is missing
#compare values to determine which value is missing
#Return the missing value as the output.

def missingvalue(listy):
    biggest = listy[0]
    for i in range(len(listy)):
        if biggest < listy[i]:
            biggest = listy[i]
    for j in range(0, biggest, 1):
        if j not in listy:
            return j
print(missingvalue([3, 0, 1]))
print(missingvalue([3, 0, 1, 2]))
print(missingvalue([3, 0, 1, 2, 5, 6, 4, 7, 10, 9]))


#Put the list in order first
#Using a Dictionary and only ONE for Loop to determine missing integer

def missingValue2(listy):
    listy.sort(reverse=False)
    for i in range(0, len(listy)-1, 1):
        if listy[i + 1] != listy[i] + 1:
            return (listy[i] + 1)
print(missingValue2([3, 0, 1]))
print(missingValue2([3, 0, 1, 2]))
print(missingValue2([3, 0, 1, 2, 5, 6, 4, 7, 10, 9]))


# First Non-Reapeated

# Given a list of integers

# return the first integer from the list that is not repeated anywhere else
# If there are multiple non-repeated integers in the list,
# the "first" one will be the one with the lowest index.

# Input: [3, 5, 5]
# Output: 3

# Input: [3, 3, 5]
# Output: 5

# Input: [3, 5, 4, 3, 4, 6, 5]
# Output: 6

# Input: [5]
# Output: 5

# Input: []
# Output: None

#haven't tested it yet tho - well it's working for me, so tests not needed
def nonRepeat(input_list):

  temp_list = []
  counts = {}

  for n in input_list:

    if n in counts:
      counts[n] += 1

    else:
      counts[n] = 1 
      temp_list.append(n)

  for n in temp_list:

    if counts[n] == 1:

      return n

  return None

print(nonRepeat([3, 5, 5]))
print(nonRepeat([3, 3, 5]))
print(nonRepeat([1, 2, 3, 5, 4, 3, 4, 6, 5, 1]))
print(nonRepeat([5]))
print(nonRepeat([]))


def nonRepeat2(test):
    counter = {}
    for i in range(len(test)):
        if test[i] not in counter.keys():
            counter[test[i]] = 1
        else:
            counter[test[i]] += 1
    for key in counter:
        if counter[key] == 1:
            return int(key)
print(nonRepeat2([3, 5, 5]))
print(nonRepeat2([3, 3, 5]))
print(nonRepeat2([3, 5, 4, 3, 4, 6, 5]))
print(nonRepeat2([5]))
print(nonRepeat2([]))