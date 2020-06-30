// 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
console.log(randomCar)
console.log(otherRandomCar)
// console logs: Tesla, Mercedes

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
console.log(name);
console.log(otherName);
// shows error since there is no array in objects

// 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
console.log(password);
console.log(hashedPassword);
// console log shows: 12345 and undefined/error

// 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
console.log(first == second);
console.log(first == third);
// console logs: true, false

// 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// console logs: value, [1, 5, 1, 8, 3, 3], 1, 5
