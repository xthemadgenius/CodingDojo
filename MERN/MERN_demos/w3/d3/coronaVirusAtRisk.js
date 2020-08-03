/* 
  Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]

    Friend object keys:
      firstName[string]
      lastName[string]
      isSocialDistancing[bool]
      hasCovid[bool]

    return a new array of the names of people who are at high risk of infection

    A person is at high risk of catching the virus if they meet all below criteria:
      1. not practicing social distancing
      2. have a friend who is not practicing social distancing whom hasCovid

    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const { testDriver } = require("../../helpers");

const friend1 = {
  firstName: "Friend",
  lastName: "One",
  isSocialDistancing: false,
  hasCovid: true,
};

const friend2 = {
  firstName: "Friend",
  lastName: "Two",
  isSocialDistancing: false,
  hasCovid: true,
};

const friend3 = {
  firstName: "Friend",
  lastName: "Three",
  isSocialDistancing: false,
  hasCovid: false,
};

const people = [
  {
    firstName: "Person",
    lastName: "One",
    isSocialDistancing: false,
    friends: [friend2, friend3],
  },
  {
    firstName: "Person",
    lastName: "Two",
    isSocialDistancing: true,
    friends: [friend2, friend1],
  },
  {
    firstName: "Person",
    lastName: "Three",
    isSocialDistancing: false,
    friends: [friend2, friend1],
  },
];

const expected = ["Person One", "Person Three"];

const testCases = [{ arguments: [people], expected: expected }];
testDriver([getAtRiskPeople, getAtRiskPeopleFunctional], testCases);

function getAtRiskPeople(persons) {
  const atRiskPersons = [];

  for (const person of persons) {
    if (person.isSocialDistancing === false) {
      for (const friend of person.friends) {
        if (friend.isSocialDistancing === false && friend.hasCovid === true) {
          atRiskPersons.push(`${person.firstName} ${person.lastName}`);
          // person is at risk already, no need to check them again, break to return to the outer loop and proceed to next person
          break;
        }
      }
    }
  }
  return atRiskPersons;
}

function getAtRiskPeopleFunctional(persons) {
  return persons
    .filter((person) => {
      const riskyFriends = person.friends.filter(
        (friend) => friend.isSocialDistancing === false && friend.hasCovid
      );
      // keep this person if the below is true
      return person.isSocialDistancing === false && riskyFriends.length > 0;
    })
    .map((person) => `${person.firstName} ${person.lastName}`);
}

// Time: O(n * m) where n is length of persons and m is longest length of friends
// Space: O(n) linear
function getAtRiskPeopleFunctional(persons) {
  return persons
    .filter(
      (person) =>
        person.isSocialDistancing === false &&
        person.friends.findIndex(
          (friend) => friend.isSocialDistancing === false && friend.hasCovid
        ) > -1
    )
    .map((person) => `${person.firstName} ${person.lastName}`);
}
