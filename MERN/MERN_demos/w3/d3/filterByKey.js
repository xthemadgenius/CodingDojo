/* 
  Given an array of objects, a searchFor string, and searchBy key that exists in the object
  return a new array of only those objects whose value for the given key starts with the given search string

  You can assume the key will exist on the object and the value of that key will be a string

  Bonus: make the search case insensitive
  Bonus: re-write it with functional programming in mind, using built in methods
  Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
    - you can assume the searchMethod will be valid
*/

const { testDriver } = require("../../helpers");

const people = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "Eddy",
    lastName: "Lee",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
  {
    firstName: "Edward",
    lastName: "Kim",
  },
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
const expected2 = [];
// Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
];

// Bonus
const searchFor4 = "E";
const searchBy4 = "lastName";
const searchMethod4 = "includes";
const expected4 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "Eddy",
    lastName: "Lee",
  },
];

const testCases = [
  { arguments: [people, searchFor1, searchBy1], expected: expected1 },
  { arguments: [people, searchFor2, searchBy2], expected: expected2 },
  { arguments: [people, searchFor3, searchBy3], expected: expected3 },
  {
    arguments: [people, searchFor4, searchBy4, searchMethod4],
    expected: expected4,
  },
];
testDriver([filterByKey], testCases);

// Time: O(n * m * p) where n = items.length, m = item[searchBy].length, p = searchFor.length
// Space: O(n)
function filterByKey(items, searchFor, searchBy, searchMethod = "startsWith") {
  return items.filter((item) =>
    item[searchBy].toLowerCase()[searchMethod](searchFor.toLowerCase())
  );
}

/* 
  Reminder - bracket notation is needed instead of dot notation when: 
    - the key / prop is stored in a variable
    - key is not a string, the brackets will auto convert it to a string (like with array bracket indexing)

  Bracket or dot notation simply accessess / retrieves the value of that key, whatever comes after is acting on the value
*/
console["log"]("bracket console log.");

// access the log method and save it as a to a var via reference to the original log method
const print1 = console.log;
const print2 = console["log"];

print1("the print var references the log method from dot notation.");
print2("the print var references the log method from bracket notation.");

let consoleMethod = "log";
console[consoleMethod]("name of method saved to var.");

consoleMethod = "table";
console[consoleMethod](["a", "b", "c"]);

function filterByKeyStartsWith(items, searchFor, searchBy) {
  const filteredItems = [];

  for (const item of items) {
    if (item[searchBy].toLowerCase().startsWith(searchFor.toLowerCase())) {
      filteredItems.push(item);
    }
  }
  return filteredItems;
}

// early exit via not commiting to lowerCasing full string
function filterByKeyStartsWith2(items, searchFor, searchBy) {
  const filteredItems = [];

  for (const item of items) {
    let match = true;
    let searchVal = item[searchBy];

    for (let i = 0; i < searchFor.length; i++) {
      if (searchVal[i].toLowerCase() !== searchFor[i].toLowerCase()) {
        match = false;
        break;
      }
    }
    if (match) {
      filteredItems.push(item);
    }
  }
  return filteredItems;
}
