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
print(isPalindrome('aza')) 
