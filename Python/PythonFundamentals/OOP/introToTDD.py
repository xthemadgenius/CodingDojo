
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
