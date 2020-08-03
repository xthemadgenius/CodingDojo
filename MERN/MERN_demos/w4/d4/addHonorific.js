/* 
  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format
  
  Return a new array of strings in this format: "Honorific FirstName LastName"

  Bonus: re-write it with built in functional programming methods
*/

const { testDriver } = require("../../helpers");

const honorific1 = "Mr.";
const names1 = [];
const expected1 = [];

const honorific2 = "Sir";
const names2 = ["Sanchez, Rick", "Smith, Jerry"];
const expected2 = ["Sir Rick Sanchez", "Sir Jerry Smith"];

const honorific3 = "Mrs.";
const names3 = ["HorseDoctor, Beth"];
const expected3 = ["Mrs. Beth HorseDoctor"];

const testCases = [
  { arguments: [honorific1, names1], expected: expected1 },
  { arguments: [honorific2, names2], expected: expected2 },
  { arguments: [honorific3, names3], expected: expected3 },
];
testDriver([addHonorificFunctionalReduce], testCases);

// Time: O(n * m), n = fullNames.length, m = max length of a full name from the split loop
function addHonorificSplit(honorific, fullNames) {
  const namesWithHonorific = [];

  for (const fullName of fullNames) {
    const [lastName, firstName] = fullName.split(", ");
    namesWithHonorific.push(`${honorific} ${firstName} ${lastName}`);
  }
  return namesWithHonorific;
}

// Time: O(n * m), n = fullNames.length, m = max length of a full name from the nested for loop
function addHonorificFunctional(honorific, fullNames) {
  return fullNames.map((fullName) => {
    const [lastName, firstName] = fullName.split(", ");
    return `${honorific} ${firstName} ${lastName}`;
  });
}

function addHonorificFunctionalReduce(honorific, fullNames) {
  return fullNames.map((fullName) =>
    fullName
      .split(", ")
      .reduce((lastName, firstName) => `${honorific} ${firstName} ${lastName}`)
  );
}

// Notice this solution that avoids .split does not improve time complexity
// because the loop that .split does still needs to be done
// Time: O(n * m), n = fullNames.length, m = max length of a full name from the nested for loop
function addHonorific(honorific, fullNames) {
  const namesWithHonorific = [];

  for (const fullName of fullNames) {
    let firstName = "",
      lastName = "",
      commaFound = false;

    for (let i = 0; i < fullName.length; i++) {
      const char = fullName[i];

      if (char === ",") {
        commaFound = true;
      }

      if (char !== " " && char !== ",") {
        if (commaFound === false) {
          lastName += char;
        } else {
          firstName += char;
        }
      }
    }
    namesWithHonorific.push(`${honorific} ${firstName} ${lastName}`);
  }
  return namesWithHonorific;
}
