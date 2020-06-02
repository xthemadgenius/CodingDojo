#basic
for x in range(0, 151, 1):
    print(x)

#multiple of 5
for x in range(0, 1000, 5):
    print(x + 5)

#Counting the Dojo Way
txt = "Coding"
for i in range(101):
    if i % 10 == 0:
        print(txt + "Dojo")
    elif i % 5 == 0:
        print(txt)
    else:
        print(i)

#whoa that Suckers Huge
sum = 0 
for z in range(1,500000):
    if z % 2 != 0:
        sum += z
print(sum)

#Countdown by Fours
for f in range (2018, 1, -4):
    print(f)

#Flixible Counter
counter = { "lowNum": "3", "HighNum": "6", "mult": "9" }
for k in counter.values():
    print(k)

def countdown(int):
    listy_list = []
    for i in range(int, -1, -1):
        listy_list.append(i)
        print(listy_list)
    return listy_list

print(countdown(5))