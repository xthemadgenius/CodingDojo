const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);
// const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ]; //test 1
const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );
console.log(needThyme);

const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];
console.log(gotTheThyme);

const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];
console.log(notNeceCelery);

// part2
const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
const sortedItems = [...items].sort();
console.log(sortedItems);

const numbers = [10, 5, 3, 12, 22, 8];
numbers.sort();
console.log(numbers);

const sortedGroceries = [...groceryList].sort( (a, b) => a.item > b.item );
console.log(sortedGroceries);

