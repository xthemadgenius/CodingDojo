for(var j = 0; j <= 20; j++){
    if(j % 2 !== 0){
        console.log(j);
    }
}

function count(num){
    var arr = [];
    for(var i = 1; i <= num; i++){
        arr.push(i);
    }
    return arr.reduce((a,b) => a + b);
}
console.log(count(5))