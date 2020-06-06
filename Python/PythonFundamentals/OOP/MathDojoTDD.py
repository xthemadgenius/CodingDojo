# import unittest
class MathDojo:
	def __init__(self): 
		self.total = 0

	def add(self, *num): 
		for i in range(0, len(num)):
			if type(num[i]) is list or type(num[i]) is tuple:
				for j in num[i]: 
					self.total += j
			else:
				self.total += num[i]
		return self 

	def subtract(self, *num): 
		for i in range(0, len(num)):
			if type(num[i]) is list or type(num[i]) is tuple:
				for j in num[i]: 
					self.total -= j
			else:
				self.total -= num[i]
		return self

	def result(self): 
		print(self.total)

md = MathDojo().add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result()
addUp = MathDojo().add(1,2,3,4,5).result()
setUp(addUp)
assertEqual(addUp, 15)
assertIn(addUp, 15)

minusDown = MathDojo().subtract(55,33,2).result()
setUp(miusDown)
assertEqual(minusDown, -90)
assertIn(minusDown, -90)