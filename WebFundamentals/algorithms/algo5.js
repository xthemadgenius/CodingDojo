// problem #1
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

// problem #2
function shiftArrayToRight(arr, places) {
    for (var i = 0; i < places; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(shiftArrayToRight([1,2,3,4,5,6,7],1));

// problem #3
function turnArray(arr){
  return arr.reverse();
}
console.log(turnArray([1,2,3,4,5]));

// problem #4
function repeatTwice(arr) {
   return arr.concat.apply([], arr.map(function (x) { return [x, x] }));
}
console.log(repeatTwice([4,"Ulysses", 42, false]));
