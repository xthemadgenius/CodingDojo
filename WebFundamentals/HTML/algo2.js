function multiply(x,y){
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);

answer: 2,3  or undefined


function multiply(x,y){
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));

answer: (6 or undefined), 10


var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
    i = i + 3; 
    console.log(i);
}

answer:3.7



var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);

answer: 15,15,10,15



for(var i=0; i<15; i+=2){
    console.log(i);
}

answer: 0,2,4,6,8,10,12,14



for(var i=0; i<3; i++){
    for(var j=0; j<2; j++){    
        console.log(i*j);
    }
}

answer: 0,1,2



function looping(x,y){
    for(var i=0; i<x; i++){
        for(var j=0; j<x; j++){       
            console.log(i*j);
        } 
    }
}
z = looping(3,3);
console.log(z);

answer: 0,1,2,4



function looping(x,y){
    for(var i=0; i<x; i++){
        for(var j=0; j<y; j++){       
            console.log(i*j);
        } 
    }
    return x*y;
}
z = looping(3,5);
console.log(z);

answer: 0,1,2,3,4,6,8,15

PART 2

function printUpTo(x){
    for(var i = 1; i <= x; i++){
        return i
    }
}
printUpTo(1000000);
y = printUpTo(-10);
console.log(y);


function printSum(x){
    var sum = 0;
    for(var i = 0; i <= 255; i++){
        console.log(i);
        sum += i
    }
    return sum
}
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32640


var printSumArray = x => x.reduce((a,b) => a + b, 0);
console.log(printSumArray([1,2,3])); 