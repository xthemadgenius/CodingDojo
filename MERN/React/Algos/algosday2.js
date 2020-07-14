// import { testDriver } from './helpers';

// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

// const { testDriver } = require("./helpers");

const squareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
// const expected = 2;
/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

// const testCases = [{ arguments: [squareMatrix], expected: expected }];

// testDriver([diagonalDifference], testCases);

const diagonalDifference = (matrix) => {
    let size = matrix.length - 1;
    let [left, right, absoluteDiff] = [0, 0, 0];
    for (let i = 0; i <= size; i++) {
        left += matrix[i][i];
        right += matrix[i][size - i];
    }
    absoluteDiff = right - left;
    if (absoluteDiff < 0) {
        return absoluteDiff * -1;
    }
    else {
        return absoluteDiff;
    }
}
console.log(diagonalDifference(squareMatrix));


function difference(arr) {
    let diff = 0;
    const length = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        diff += arr[i][i] - arr[i][length - i];
    }
    return Math.abs(diff);
}

difference(squareMatrix)
// **************************************************************************************************************//

