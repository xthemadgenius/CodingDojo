#gave this my best shot had some from one of my friends but
#we both ended up getting confused, this is my best effort at making this work

class Underscore(object):
    def map(self,iterable,callback):
        newList = []
        for i in iterable:
            newList.append(callback(i))
        print(newList)
    
    def reduce(self, iterable, callback):
		newList = []
		total = 0
		for i in iterable: 
			newList.append(callback(i))
		for j in newList:
			total += j
		print total

    def find(self,iterable,callback):
        for i in range(0, len(iterable)):
            if callback(iterable[i]) == True:
                print(iterable[i])
                break
            else:
                return False
    
    def filter(self,iterable,callback):
        result = []
        for i in range(0, len(iterable)):
            if callback(iterable[i]) != True:
                result.append(iterable[i])
        print result

    def reject(self, iterable, callback):
        result = []
        for i in range(len(iterable)):
            if callback(iterable[i]) != True:
                result.append(iterable[i])
        print result

maps  =_.map([1,2,4,8,6], lambda x: x % 2 == 0)
evens = _.filter([1, 2, 4, 8, 6], lambda x: x % 2 == 0)
odds = _.reject([1, 2, 4, 3, 8, 6], lambda x: x % 2 == 0)
findList = _.find([2, 4, 8, 6, 7], lambda x: x % 2 == 0)
reduceList = _.reduce([47,11,42,13], lambda x: x**2)