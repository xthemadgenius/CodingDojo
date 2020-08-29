
# The 3 & 5 Gallon Die Hard Water Puzzle

# You have a 3 and a 5 gallon water container, each container has no markings except for 
# that which gives you it's total volume. You also have a running tap. 

# You must use the containers and the tap in such away as to exactly measure 
# out 4 gallons of water. How is this done?

#Fill 3 gallon tank 
3 gal = 3
5 gal = 0
#pour 3 gallon tank into 5 gallon tank
3 gal = 0
5 gal = 3
#fill 3 gallon tank
3 gal = 3
5 gal = 3
#fill remaining 2 gallons of 5 gallon tank, 1 gallon remains in 3 gallon tank
3 gal = 1
5 gal = 5
#empty 5 gallon tank
3 gal = 1
5 gal = 0
#fill 5 gallon tank with 1 gallon in 3 gallon tank
3 gal = 0
5 gal = 1
#fill 3 gallon tank to full
3 gal = 3
5 gal = 1
#fill 5 gallon tank with 1 gallon from 3 gallon tank
3 gal = 0
5 gal = 4

# Opening a Safe Without the Combination

# You are to open a safe without knowing the combination. Beginning with the dial set at 
# zero, the dial must be turned counter-clockwise to the first combination number, (then clockwise back to zero), 
# and clockwise to the second combination number, (then counter-clockwise back to zero), 
# and counter-clockwise again to the third and final number, where upon the door shall 
# immediately spring open. There are 40 numbers on the dial, including the zero.

# Without knowing the combination numbers, what is the maximum number of trials required to 
# open the safe (one trial equals one attempt to dial a full three-number combination)?


# The answer is a lower number than that!

then i change my answer to "hit it with a bomb and call it a day", "just drill it", "threaten the guys family till he gives me the combo"
63,960???

def combinations(num):
    possible = 0
    for i in range(0, num, 1):
        possible += 1
        for i in range(0, num-1, 1):
            possible += 1
            for i in range(0, num-2,1):
                possible += 1
    return possible

print(combinations(41))

65,641