// question #1
function sigma(num){
    var arr = [];
    for(var i = 1; i <= num; i++){
        arr.push(i);
    }
    return arr.reduce((a,b) => a + b);
}
sigma(5);

// question #2
function facrorial(num){
    var arr = [];
    for(var i = 1; i <= num; i++){
        arr.push(i);
    }
    return arr.reduce((a,b) => a * b);
}
facrorial(5);

// question #3
function fibonacci(n) {
    var newNum = 0;
    var prev = 0;
    var curr = 1;
    if (n === 0 || n === 1) {
        return n;
    }
    for (var i = 2; i <= n; i++) {
        newNum = prev + curr;
        prev = curr;
        curr = newNum;
    }
    return curr;
}
fibonacci([21,3,24])

// question #4
function secToLast(arr) {
    if (arr.length <= 2) {
        return null;
    }
    return arr[arr.length - 2];
}
secToLast([42, true, 4, "Liam", 7])

// question #5
function nthToLast(arr, y) {
    if (arr.length < y) {
        return null;
    }
    return arr[arr.length - y];
}
nthToLast([5,2,3,6,4,9,7],3)

// question #6
var getSec = arr => arr.sort(function(a,b){
    return b-a;
})[1];
console.log(getSec([42,1,4,3.14,7,14]));

// question #7
var doubTrop = dup => dup.reduce(function (res, current) {
    return res.concat([current, current]);
}, []);
console.log(doubTrop( [4, "Ulysses", 42, false]));