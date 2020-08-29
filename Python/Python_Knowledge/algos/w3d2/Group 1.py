
# Given an integer to represent how much change is needed,
# calculate the fewest number of coins needed to create that change,
# using the standard US denominations


# if num is >25, increase quarter counter by 1, then decrease num by quarter ammount
# then run similar checks for dime, nickel, and penny until num == 0
# return values in dictionary

# Input: 137
# 5 quarters, 1 dime, 0 nickels, 2 pennies
# 125 + 10 + 0 + 2 = 137

# solution 1
def make_change(num):
    change = {
    'quarters' : 0,
    'dimes' : 0,
    'nickels' : 0,
    'pennies' : 0
    }
    while num > 0:
        if num >= 25:
            change['quarters'] += 1
            num -= 25
        elif num >= 10:
            change['dimes'] += 1
            num -= 10
        elif num >= 5:
            change['nickels'] += 1
            num -= 5
        else:
            change['pennies'] += 1
            num -= 1
    return change
print(make_change(137))


# solution 3 (starting with input, we divide input by largest coin and use the remainder, we decrement down using remainders after each coin)
def coins(num):
    changeLeft = num
    if changeLeft > 24:
        print(changeLeft//25, "quarters")
        changeLeft = num%25
    if changeLeft > 9:
        print(changeLeft//10, "dimes")
        changeLeft = changeLeft%10
    if changeLeft > 4:
        print(changeLeft//5, "nickles")
        changeLeft = changeLeft%5
    if changeLeft > 0
        print(changeLeft//1, "pennies")
    return changeLeft # changeLeft should be 0 at this point and the prints should show how many of each coin

print(coins(137))

# solution 4 (this method takes in the input num and outputs all change efficiently required to make the input, including a descriptive 0 when a coin isn't needed along with the Input)
def leastCoins(num):
    quarters = 0
    dimes = 0
    nickels = 0
    pennies = 0

    total = num

    while total != 0:
        if total >= 25:
            quarters += 1
            total -= 25

        elif total >= 10:
            dimes += 1
            total -= 10
        
        elif total >= 5:
            nickels += 1
            total -= 5

        elif total >= 1:
            pennies += 1
            total -= 1

    print(f"Input: {num}" )

    print(f"Using: {quarters} quarters, {dimes} dimes, {nickels} nickels, {pennies} pennies")