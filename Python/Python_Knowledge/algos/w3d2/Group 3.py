
# Given an int to represent how much change is needed,
# calculate the fewest number of coins needed to create that change,
# using the standard US denominations

def makeChange(amount):
    quarters = 0
    dimes = 0
    nickels = 0
    pennies = 0
    for i in range(amount, 0, -1):
        if i % 25 == 0:
            quarters = i // 25
            break
    amount = amount - (quarters * 25)
    for i in range(amount, 0, -1):
        if i % 10 == 0:
            dimes = i // 10
            break
    amount = amount - (dimes * 10)
    for i in range(amount, 0, -1):
        if i % 5 == 0:
            nickels = i // 5
            break
    amount = amount - (nickels * 5)
    pennies = amount
    return (f'{quarters} quarters, {dimes} dimes, {nickels} nickels, {pennies} pennies')
print(makeChange(137))
print(makeChange(100))
print(makeChange(327))
print(makeChange(217))
print(makeChange(17))


# ----------------------------------------------

# Input: 137
# 5 quarters, 1 dime, 0 nickels, 2 pennies
# 125 + 10 + 0 + 2 = 137
def helper(amount, coin):
    i = 0
    while amount > coin:
        amount -= coin
        i += 1
    return i

def makeChange2(amount):
    quarters = helper(amount, 25)
    amount = amount - (quarters * 25)
    dimes = helper(amount, 10)
    amount = amount - (dimes * 10)
    nickels = helper(amount, 5)
    amount = amount - (nickels * 5)
    pennies = amount
    return (f'{quarters} quarters, {dimes} dimes, {nickels} nickels, {pennies} pennies')
print(makeChange2(137))
print(makeChange2(100))
print(makeChange2(327))
print(makeChange2(217))
print(makeChange2(17))

# ----------------------------------------------

def helper2(amount, coin):
    i = 0
    while amount >= result[coin][0]:
        amount -= result[coin][0]
        i += 1
    result[coin][1] = i
    return amount

result = {
        'quarters': [25, 0],
        'dimes': [10, 0],
        'nickels': [5, 0],
        'pennies': [1, 0],
    }

def makeChange3(amount):
    for coin in result.keys():
        amount = helper2(amount, coin)
    return result
print(makeChange3(137))
print(makeChange3(100))
print(makeChange3(327))
print(makeChange3(217))
print(makeChange3(17))

# ----------------------------------------------

result2 = {
        'quarters': {'value': 25, 'quantity': 0},
        'dimes': {'value': 10, 'quantity': 0},
        'nickels': {'value': 5, 'quantity': 0},
        'pennies': {'value': 1, 'quantity': 0},
    }
def helper3(amount, coin):
    i = 0
    while amount >= result2[coin]['value']:
        amount -= result2[coin]['value']
        i += 1
    result2[coin]['quantity'] = i
    return amount

def makeChange4(amount):
    for coin in result2.keys():
        amount = helper3(amount, coin)
    return result2
print(makeChange4(137))
print(makeChange4(100))
print(makeChange4(327))
print(makeChange4(217))
print(makeChange4(17))