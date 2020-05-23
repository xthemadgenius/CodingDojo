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