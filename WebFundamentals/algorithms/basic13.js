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
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}
console.log(random(255))

// problem #3
function random(num){
    var foo = [];
    for (var i = 1; i <= num; i++) {
        foo.push(i);
    }
    console.log(foo)
    return foo;
}
var addUp = num => num.reduce((a,b) => a + b);
var arr = random(255);
var x = addUp(arr);
console.log(x)

// problem #4
function random(num){
    var foo = [];
    for (var i = 0; i < num.length; i++) {
        foo.push(num[i]);
    }
    return foo;
}
var x = [1,2,3,4];
console.log(random(x));

// problem #5 
var getMax = arr => Math.max(...arr);
var x = [1,2,3,4];
console.log(getMax(x));

// problem #6 
function getMax(arr){
    var x = arr.reduce((a,b) => a + b);
    return x / arr.length;
} 
var x = [1,2,3,4];
console.log(getMax(x));

// problem #7 
function random(num){
    var arr = []
    for(var i = 1; i <= num; i++){
        if(i % 2 !== 0){
            arr.push(i)
        }
    }
    return arr;
}
console.log(random(255));

// problem #8 
function random(num){
    var arr = []
    for(var i = 0; i < num.length; i++){
        arr.push(Math.pow(num[i],2))
    }
    return arr;
}
console.log(random([1,2,9,4]))

// problem #9
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


// problem #10
function random(num){
    var arr = []
    for(var i = 0; i < num.length; i++){
        if(num[i] < 0){
            num[i] = 0;
        }
        arr.push(num[i]);
    }
    return arr;
}
console.log(random([1,0,9,4]));

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


