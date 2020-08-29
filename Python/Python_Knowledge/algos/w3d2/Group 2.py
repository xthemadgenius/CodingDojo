
# Given an int to represent how much change is needed,
# calculate the fewest number of coins needed to create that change,
# using the standard US denominations



# Input: 137
# 5 quarters, 1 dime, 0 nickels, 2 pennies
# 125 + 10 + 0 + 2 = 137

#Create a function with  4 variables
#Create a loop for the number
#create an if statements for each value in a coin dictionary

# 
def divide_sum (amount):
    key_values =  {
        "quarter" : 25,
        "dimes" : 10,
        "nickels" : 5,
        "pennys" : 1
    }
    
    # key_values[0] amount//25 = quarter
    # newtotal//10 = dime
    # newtotal-dime*10=newtotal
    # newtotal//5=nickels
    # newtotal-nickels*5=newtotal
    # newtotal//1=pennys
    total_sum = 0
    tmp_var = 0
     
    if total_sum == 0:
     total_sum = key_values[0]//amount     
    if total_sum != total_sum: 
        tmp_var = total_sum * (Key_values[0,1] - (total_sum - amount))
        key_values[0]
    elif amount != 0 and key_values[0]//amount:
        total_sum
    elif key_values[1]//amount:
        quarter = total_sum
    elif key_values[2]//amount:
        quarter = total_sum
    elif key_values[3]//amount:
        quarter = total_sum

print (divide_sum(125))


