import random
def randomInt(min=10 ,max=50):
    num = (random.random() + min) * max
    return num
print(randomInt())
