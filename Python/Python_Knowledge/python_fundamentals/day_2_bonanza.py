# # For Loop Basic 1

# # Basic - Print all integers from 0 to 150.

# # for i in range(150+1):
# #     print(i)

# # # Multiples of Five - Print all the multiples of 5 from 5 to 1,000

# # # for i in range(5, 1001):
# # #     if i % 5 == 0:
# # #         print(i)

# # # for i in range(5, 1001, 5):
# # #     print(i)

# # # Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print 
# # # "Coding" instead. If divisible by 10, print "Coding Dojo".

# # # for i in range(0, 101):
# # #     if i % 10 == 0:
# # #         print("Coding Dojo")
# # #     elif i % 5 == 0:
# # #         print("Coding")
# # #     else:
# # #         print(i)

# # # Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.

# # # sum = 0
# # # for i in range(0, 500001, 1):
# # #     if i % 2 != 0:
# # #         sum += i
# # # print(sum)

# # # Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.

# # # for i in range(2018, 1, -4):
# # #     print(i)

# # # Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at 
# # # lowNum and going through highNum, print only the integers that are a multiple of mult. 
# # # For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)

# # low = 2
# # high = 9
# # mult = 3

# # # Pseduo Steps
# # # 1. set vars X 
# # # 2. loop through vars
# #     # 3. print only multiples of mult

# # # for i in range(low, high+1):
# # #     if i % mult == 0:
# # #         print(i)





# # # Functions Basic 1

# # def a():
# #     return 5
# # print(a())

# # def a():
# #     return 5
# #     return 10
# # print(a())

# # def a(b,c):
# #     print(b+c)
# # # print(a(1,2) + a(2,3))

# # def a(b,c):
# #     return str(b)+str(c)
# # print(type(a(2,5)))
# # print(a(2,5))

# # print("2" + "5")
# # print(type(25))
# # # immutable

# # def a():
# #     b = 100
# #     print(b)
# #     if b < 10:
# #         return 5
# #     else:
# #         return 10
# #     return 7
# # print(a() + 10)





# # # Functions Basic 2

# # # Countdown - Create a function that accepts a number as an input. Return a new list 
# # # that counts down by one, from the number (as the 0th element) down to 0 (as the last element).
# # # Example: countdown(5) should return [5,4,3,2,1,0]

# # # 1. new function takes in int param X
# #     # 2. returns a list X
# #         # 3. list contains ints from input param to 0
# #             # 4. loop from input to 0
# #                 # 5. append ints to listy_list

# # def countdown(int):
# #     listy_list = []
# #     for i in range(int, -1, -1):
# #         listy_list.append(i)
# #         print(listy_list)
# #     return listy_list

# # print(countdown(5))


# # # Print and Return - Create a function that will receive a list with two numbers. Print the first value and return the second.
# # # Example: print_and_return([1,2]) should print 1 and return 2

# # def print_and_return(list):
# #     print(list[0])
# #     return list[1]

# # print(print_and_return([1,123]))






# # x = [ [5,2,3], [10,8,9] ] 

# # # Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].

# # my_num_to_change = x[1][0]
# # print(my_num_to_change)
# # print(x)

# # x[1][0] = 15
# # print(x)
# # print(x[1][0])

# # students = [
# #     {'first_name':  'Michael', 'last_name' : 'Jordan'},
# #     {'first_name' : 'John', 'last_name' : 'Rosales'}
# # ]

# # # Change the last_name of the first student from 'Jordan' to 'Bryant'

# # print(students)
# # print(students[0])
# # print(students[0]['last_name'])
# # students[0]['last_name'] = 'Bryant'
# # print(students[0])
# # print(students[0]['last_name'])

# # sports_directory = {
# #     'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
# #     'soccer' : ['Messi', 'Ronaldo', 'Rooney']
# # }

# # # In the sports_directory, change 'Messi' to 'Andres'

# # print(sports_directory['soccer'][0])
# # sports_directory['soccer'][0] = "Andres"
# # print(sports_directory['soccer'][0])

# # z = [ {'x': 10, 'y': 20} ]

# # # Change the value 20 in z to 30

# # print(z[0]['y'])
# # z[0]['y'] = 30
# # print(z[0]['y'])

# # Iterate Through a Dictionary with List Values
# # Create a function printInfo(some_dict) that given a dictionary whose values are all lists, 
# # prints the name of each key along with the size of its list, and then prints the associated values within each key's list. For example:


# dojo = {
#     'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
#     'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
# }


# # output:
# # 7 LOCATIONS
# # San Jose
# # Seattle
# # Dallas
# # Chicago
# # Tulsa
# # DC
# # Burbank

# def print_info(dict):
#     for key_in_dict, listy_lists in dict.items():
#         print(len(listy_lists), "-", key_in_dict)
#         for item_in_list in listy_lists:
#             print(f"{item_in_list}")

# # print_info(dojo)



# # Reverse List - Create a function that takes a list and return that list with values reversed. 
# # Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# # Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]




# # Iterate Through a List of Dictionaries
# # Create a function iterateDictionary(some_list) that, given a list of dictionaries, 
# # the function loops through each dictionary in the list and prints each 
# # key and the associated value. For example, given the following list:



# students = [
#     {'first_name':  'Michael', 'last_name' : 'Jordan'},
#     {'first_name' : 'John', 'last_name' : 'Rosales'},
#     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#     {'first_name' : 'KB', 'last_name' : 'Tonel'}
# ]

# # for key, value in students[0].items():
# #     print(key, value)

import this

# [1, 2, 3]
# {'key':"values"}
# strs = "strings"
# for char in strs:
#     print(char)


# for i in students:
#     keyValue = ''
#     for key, value in i.items():
#         keyValue += key + " - " + value + ", "
#     print(keyValue)
#     keyValue = ''



def length_and_values(num1, num2):
    listy_list = []
    for i in range(num1):
        listy_list.append(num2)
    return listy_list

print(length_and_values(4, 7))