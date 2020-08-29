# Iterate Through a Dictionary with List Values
# Create a function printInfo(some_dict) that given a dictionary whose values 
# are all lists, prints the name of each key along with the size of its list, and 
# then prints the associated values within each key's list. For example:

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    27: ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

print(len(dojo['locations']), 'locations')
for item in dojo["locations"]:
    print(item)

for key in dojo:
    print(key)
    for item in dojo[key]:
        print(item)

# output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank

