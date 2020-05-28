// 
//   Array: Find Minimum
//   No built in methods

//   Input: array of ints
//   Output: Minimum value in the array
//   Input: [1, 5, 2, 9]
//   Output: 1
//   Input: [5, 1 ,0, 2, 3]
//   Output: 0
//


function minArray(arr) {
    var min = Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return min;
}

console.log(minArray());

// // //"/* 
// // Array: Find Minimum Index
// No built in methods

// Input: array of ints
// Output: Index of minimum value in the array
// Input: [1, 5, 2, 9]
// Output: 0
// Input: [5, 1 ,0, 2, 3]
// Output: 2
// */
// "

function minIndex(arr) {
    var min = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[min]) {
            min = i;
        }
    }
    return min;
}
console.log(minIndex([1, 5, 2, 9]));

// "/* 
//   Array: Min to Front
//   No built in methods

//   Input: array of ints
//   Output: Same array in same order except min int moved to front
//   Input: [1, 5, 2, 9]
//   Output: [1, 5, 2, 9]
//   Input: [5, 1 ,0, 2, 3, 1]
//   Output: [0, 5, 1, 2, 3, 1]
// we find the min , 
// we could push min to the end of the array, set all arr[i+1], set arr[0]=min; pop the last number off the array.
// we add the min into arr[0]
function minFront(arr) {
    var min = arr[0];
    var index = 0;
    for(var x = 0; x <= array.length - 1; x++){
        if(arr[x] < min){
            min = arr[x];
            index = x;
        }
    }
    for(var j = index -1; j >= 0; j--){
        arr[j + 1] = arr[j];
    }
    arr[0] = min;
    return arr;
}

function minFront(arr) {
    var small = Math.min(...arr);
    arr = arr.slice();
    arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1)
    arr.unshift(small);
    return arr;
}
// "/*
//   Array: Remove At
//   Input: array, index
//   Output: The item that was removed
//   What will you do if the provided index is out of bounds?

//   No built-in array methods except pop().
//   Input: ['a', 'b', 'c'], 1
//   Output: 'b'
//     - the given array should now be ['a', 'c']
// */"

function removeAt(arr, n) {
    var index = arr.indexOf(n);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

function removeAt(arr,y){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if (arr[i] !== arr[y]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}