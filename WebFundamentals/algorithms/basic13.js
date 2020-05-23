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

