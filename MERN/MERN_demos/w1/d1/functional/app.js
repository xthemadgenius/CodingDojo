// regular function:
function helloName1(name) {
  return "Hello " + name;
}

// store function in variable, is not hoisted, meaning must be declared before executed
const helloName2 = function (name) {
  return "Hello " + name;
};

// Arrow function syntax variations, same as regular function, re-written in arrow syntax. To left of arrow are parameters, right of arrow is function body
// long-form, RECOMMENDATION: always use this until you are really comfortable, because this form works in all cases
const helloName3 = (name) => {
  // explicit return
  return "Hello " + name;
};

// shorthand, parenthesis around parameter are not required if there is only 1 param, are required if more than 1 param
// implicit return statement, if function body is one line, no curly braces are needed, result of one line is auto returned
const helloName4 = (name) => "Hello " + name;

// console.log(helloName1("Neil"));
// console.log(helloName2("Neil"));
// console.log(helloName3("Neil"));
// console.log(helloName4("Neil"));

const numbers = [1, 2, 3, 4, 5];
const students = [
  { name: "bob", attendedLecture: false },
  { name: "rob", attendedLecture: false },
  { name: "barb", attendedLecture: false },
];

function printAllItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`The item is: ${arr[i]}`);
  }
}

// printAllItems(numbers);

const printOneItem = (item) => {
  console.log(`The item is: ${item}`);
};

// using a named function as arg1 passed to forEach function
// numbers.forEach(printOneItem);

// using anonymous arrow callback function on-the-fly, can also use a regular function
// numbers.forEach((item, idx) => {
//   console.log(`The item is: ${item} at idx ${idx}`);
// });

// same thing using a regular function as the callback function
// numbers.forEach(function (item, idx) {
//   console.log(`The item is: ${item} at idx ${idx}`);
// });

// .forEach recreated to see behind the scenes

const studentsAttendingLecture = ["bob", "barb"];
// console.log(students);

students.forEach((student, idx) => {
  if (studentsAttendingLecture.includes(student.name)) {
    student.attendedLecture = true;
  }
});
// console.log(students);

// add a new key, called forEvery whose value is a function onto the capital Array.prototype so that all arrays inherit this new method
Array.prototype.forEvery = function (callbackFn) {
  // this refers to whichever array .forEvery is called on

  for (let i = 0; i < this.length; i++) {
    callbackFn(this[i], i);
  }
};

// recreated .forEach
// numbers.forEvery((item, idx) => {
//   console.log(`The item is: ${item} at idx ${idx}`);
// });

// .map loops over an array and returns a new array where every item is replaced with whatever the provided callback function returns

const numsDoubled = numbers.map((num) => {
  return num * 2;
});
// console.log(numsDoubled);

const evenNumsDoubled = numbers.map((num) => {
  if (num % 2 === 0) {
    return num * 2;
  } else {
    return num;
  }
});
// console.log(evenNumsDoubled);

// recreate .map
Array.prototype.map2 = function (callbackFn) {
  // this refers to whichever array .forEvery is called on

  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    const newItem = callbackFn(this[i], i);
    newArr.push(newItem);
  }
  return newArr;
};

const evenNums2 = numbers.map2((num) => {
  return num * 2;
});

// console.log(evenNums2);

// .filter loops over an array and returns a new array where only the items that the callback function returns true for are kept
const delinquentStudents = students.filter((student) => {
  return student.attendedLecture === false;
});

// console.log(delinquentStudents);

const goodBois = students.filter((student) => {
  return student.attendedLecture === true;
});

// console.log(goodBois);

// .filter recreated
Array.prototype.where = function (callbackFn) {
  // this refers to whichever array .forEvery is called on

  const filteredArr = [];

  for (let i = 0; i < this.length; i++) {
    const keepItem = callbackFn(this[i], i);

    if (keepItem) {
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
};

const goodBois2 = students.where((student) => {
  return student.attendedLecture === true;
});

console.log(goodBois2);
