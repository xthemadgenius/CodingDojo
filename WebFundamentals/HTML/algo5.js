function greaterY(arr, Y) {
    var count=0;
    arr.forEach(function(elem){
        if (elem>Y){
            count++;
        }
    });
    return count;
}

function maxMinAvg(arr) {
    var arrnew=[];
    var sum = 0;
    arr.forEach(function(elem){
        sum += elem;
    });
    arrnew.push(Math.max.apply(null,arr));
    arrnew.push(Math.min.apply(null,arr));
    arrnew.push(sum/arr.length);
    return arrnew; 
}
maxMinAvg([1,2,8]);


function turnDojo(arr){
    for (var i=0;i<arr.length;i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

var x = [-1,3,5,-5];
console.log(turnDojo(x));


function removeVals(arr,start, end){
    end = end - 1;
    arr.splice(start, end)
    return arr;
}
removeVals([20,30,40,50,60,70],2,4)
