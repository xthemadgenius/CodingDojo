function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  var pivot = array[0];
  var left = []; 
  var right = [];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot){
      left.push(array[i])
    } else{
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
};

var unsorted = [23, 45, 16, 37, 3, 99, 22, 122];
var sorted = quickSort(unsorted);

console.log(sorted);