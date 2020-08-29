import random
# variables

my_num = 10

my_bigger_num = my_num + 5

my_string = "This is a string now"

# built-in functions

# console.log()
# print(my_num)

# print("this is a stringy string")

# print(my_num + my_bigger_num)
# print(25)

# print(len(my_string))

# data structures

my_list = [10, 15, "string", True, False]

my_other_num = my_num + my_list[0]

# print(my_other_num)

person = {
    'name' : 'George',
    "fav_num" : 27,
    'skills' : ['gaming', 'cooking', 'teaching']
}

cooking = person['skills'][1]
# print(person)
# print(person['skills'])
# print(person['skills'][1])
# print(cooking)

# operators/comparisons

my_test = 50

# print(20 <= 15)
# print(10 >= 1)
# print(50 == my_test)


# conditionals

# if( 10 > 1 ){
#   console.log("yippe it is!")
# }

if my_num < 1:
    print('yippe it is!')
elif 10 > my_bigger_num:
    print('totes bigger')
else:
    print('all things above fail')


# loops
# for

my_range = range(5)
# print(my_range)


# my_list = [10, 15, "string", True, False]


for i in range(len(my_list)):
    my_list[i] = 100
    # print(my_list)

# while

my_while_end = 5
i = 0
while i < my_while_end:
    print(i)
    i += 1


# functions 

# function funcName(oparam){
#   stuff
# }


# def function_name():
#     return "I am the returned item!"


# my_return_string = function_name()


def add(number1, number2):
    print("iusndfljkhadsbrlkjjadsen")
    return number1 + number2

# print(my_bigger_num + add(100, 10))
# print(my_bigger_num + 110)
# print(15 + 110)


print(f"Hello {add(5, 5)}!")





# Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".
j = 0
txt = "Coding"
while j < 101:
    if j % 10 == 0:
        print(txt + "Dojo") # this condition doesn't need to add to the iterator because condition 1 should concatinate with this and increment
    elif j % 5 == 0:
        print(txt)
    else:
        print(j)
    j += 1

txt = "Coding"
for i in range(101):
    if i % 10 == 0:
        print(txt + "Dojo") # this condition doesn't need to add to the iterator because condition 1 should concatinate with this and increment
    elif i % 5 == 0:
        print(txt)
    else:
        print(i)

# Why is this stuck in an infinite loop printing Coding and Coding Dojo

5000
kjsxndkjn



"adding changes from the june-clone directory"

test_dict = {
    'fav_num' : 27,
    'name' : "Jorge"
}

for banana, aarvardark in test_dict.items():
    print(banana, aarvardark)


import random
def randInt(min=10, max=100):
    num = random.random() * max
    return int(num)

print(randInt())