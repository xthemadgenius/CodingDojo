import unittest

#1
def reverseList(data_list):
    length = len(data_list)
    s = length
    new_list = [None]*length
    for item in data_list:
        s = s - 1
        new_list[s] = item
    return new_list

print(reverseList([1,2,3,4]))
assertEqual(reverseList([1,2,3,4]), [4,3,2,1])
assertIs(reverseList([1,2,3,4]), [4,3,2,1])
assertNotEqual(reverseList([1,2,3,4]),[4,3,2,1])

#2
def isPalindrome(string):
	left_str = 0
	right_str = len(string) - 1
	while right_str >= left_str:
		if not string[left_str] == string[right_str]:
			return False
		left_str += 1
		right_str -= 1
	return True
test = isPalindrome('aza')
print(test) 
assertTrue(test)
assertEqual(test, True)
asssertFalse(test)
assertIsNot(test, false)
assertIs(test, True)


#3
def coins(c):
	print(c//25, "quarters")
	c = c%25
	print(c//10, "dimes")
	c = c%10
	print(c//5, "nickles")
	c = c%5
	print(c//1, "pennies")
money = coins(99)
change = '3 quarters 2 dimes 0 nickles 4 pennies'
bad =  '4 quarters 2 dimes 0 nickles 4 pennies'
assertNotEqual(money, bad)
assertEqual(money, change)
assertIsNot(money, bad)
assertIs(money, change)
assertIn(money, change)

