function getSum(num){
    var sum = 0;
    for(var i = 0; i < num.length; i++){
        sum += num[i];
        console.log(sum)
    }
    return sum
}
var testArr = [6,3,5,1,2,4]
getSum(testArr)




function getSum(num){
    var sum = 0;
    var arr = []
    for(var i = 0; i < num.length; i++){
        sum = num[i] * i;
        arr.push(sum)
    }
    return arr;
}
var testArr = [6,3,5,1,2,4]
getSum(testArr)