// problem #1
function random(num){
    var arr = []
    for(var i = 0; i < num.length; i++){
        if(num[i] > 0){
            arr[i] = "Big"
        } else{
            arr.push(num[i])
        }
    }
    return arr;
}
console.log(random([1,5,10,-2]))

// problem #2
function lowHigh(num){
    var arr = [];
    var min = Math.min(...num);
    var max = Math.max(...num);
    arr.push(min, max);
    return arr;
}
console.log(lowHigh([1,2,3,4,5,6,7]));

// problem #3
function printOneReturnAnother(arr) {
    var secToLast = arr[arr.length - 2];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            var firstOdd;
            firstOdd = arr[i];
            break;
        }
    }
    console.log(secToLast);
    return firstOdd;
}
var arr = [1,2,3,4,5,6,7];
console.log(printOneReturnAnother(arr))

// problem #4
function double(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}
var arr = [1,2,3,4,5,6,7];
console.log(double(arr))

// problem #5
function countPos(arr) {
    var getTotal = num => num.reduce((a,b) => a + b);
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] *= -1;
        }
    }
    return arr;
}
var arr = [1,2,3,4,-1,6,7];
var newArr = countPos(arr)
newArr.push(newArr.reduce((a,b) => a + b));
console.log(newArr)

// problem #6
function evensAndOdds(arr) {
    var odds = 0;
    var evens = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            continue;
        } else if (arr[i] % 2 != 0) { // odds
            odds += 1;
            if (odds === 3) {
                console.log("That's odd!");
                odds = 0;
                evens = 0;
            }
        } else {
            evens += 1;
            if (evens === 3) {
                console.log("Even more so!");
                evens = 0;
                odds = 0;
            }
        }
    }
}
var arr = [1,2,6,4,-1,6,7];
var newArr = evensAndOdds(arr)
console.log(newArr)

// problem #7
// problem #8
// problem #9
// problem #10
// problem #11
// problem #12
// problem #13
// problem #14