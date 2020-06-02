#1 Update Values in Dictionaries and Lists
x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]
x[1][0] = 15
print(x)

students[0]['first_name'] = 'Bryant'
print(students)

sports_directory['soccer'][0] = 'Andres'
print(sports_directory)

z[0]['y'] = 30
print(z)

#2 Iterate Through a List of Dictionaries
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

def key_and_value(arr):
    for i in arr:
        print(i)

key_and_value(students)

#3 Get Values From a List of Dictionaries
def iterate_dictionary(arr, key):
    for i in arr:
        print(i[key])

iterate_dictionary(students,'first_name')

def iterate_dictionary2(arr, key):
    for i in arr:
        print(i[key])

iterate_dictionary2(students,'last_name')

#4 Iterate Through a Dictionary with List Values
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def know_your_dojo(arr):
    print((len(arr['locations'])), "LOCATIONS", (arr['locations']))
    print((len(arr['instructors'])), "INSTRUCTORS", (arr['instructors']))

know_your_dojo(dojo)