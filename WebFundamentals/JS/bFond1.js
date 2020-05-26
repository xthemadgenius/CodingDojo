// problem 1 
function random(num){
    for(var i = 0; i <= num; i++){
        console.log(i);
    }
}
console.log(random(255))

// problem #2 
function random(num){
    for(var i = 0; i <= num; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
console.log(random(1000))

// problem #3
function random(num){
    var arr = [];
    for(var i = 0; i <= num; i++){
        if(i % 2 !== 0){
            arr.push(i)
        }
    }
    return arr;
}
var newArr = random(5000);
console.log(newArr);
newArr.reduce((a,b) => a + b);

// problem #4
function random(num){
    var sum = 0
    for(var i = 0; i < num.length; i++){
        sum += num[i];
    }
    return sum
}
var newArr = random([1,2,3,4]);
console.log(newArr);

// problem #5
var getMax = arr => Math.max(...arr);
var x = [1,2,3,4];
console.log(getMax(x));

// problem #6
var getAvg = arr => (arr.reduce((a,b) => a + b) / arr.length);
var x = [1,2,3,4];
console.log(getAvg(x));

// problem #7
function getOdd(num){
    var arr = [];
    for(var i = 0; i <= num; i++){
        if(i % 2 !== 0){
            arr.push(i)
        }
    }
    return arr;
}
var newArr = getOdd(50);
console.log(newArr);

// problem #8
function random(num, y){
    var arr = []
    for(var i = 0; i < num.length; i++){
        if(num[i] > y){
            arr.push(num[i]);
        }
    }
    return arr;
}
console.log(random([1,2,9,4,12], 4))

// problem #9
function random(num){
    var arr = []
    for(var i = 0; i < num.length; i++){
        arr.push(Math.pow(num[i],2))
    }
    return arr;
}
console.log(random([1,5,10,-2]))

// problem #10
function random(num){
    var arr = []
    for(var i = 0; i < num.length; i++){
        if(num[i] < 0){
            arr[i] = 0
        } else{
            arr.push(num[i])
        }
    }
    return arr;
}
console.log(random([1,5,10,-2]))

// problem #11
function random(num){
    var arr = [];
    var min = Math.min(...num);
    var avg = (num.reduce((a,b) => a + b)/ num.length);
    var max = Math.max(...num);
    arr.push(max, min, avg);
    return arr;
}
console.log(random([1,2,3,4,5,6,7]));

// problem #12
function shiftArrayToRight(arr, places) {
    for (var i = 0; i < places; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(shiftArrayToRight([1,2,3,4,5,6,7],1));

// problem #13
function turnDojo(arr){
    for (var i=0;i<arr.length;i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}
console.log(turnDojo([-1,3,5,-5]));

