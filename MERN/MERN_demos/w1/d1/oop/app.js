class Person {
  // __init__
  constructor(firstName, lastName) {
    // this instead of self
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // def fullName, shorthand method syntax
  fullName() {
    return this.firstName + " " + this.lastName;
  }

  // long-form method syntax (inside class equal sign, inside plain object, colon would be used)
  fullName2 = function () {
    return this.firstName + " " + this.lastName;
  };
}

// inherit from Person class so that customer will have firstName, lastName, fullName
class Customer extends Person {
  constructor(firstName, lastName, id) {
    // call the parent constructor, the Person constructor
    super(firstName, lastName);
    this.id = id;
  }

  getCoffee(store) {
    // enqueue this whole customer object
    store.orderLine.enqueue(this);
  }
}

class Order {
  constructor(customerName, itemName) {
    this.customerName = customerName;
    this.itemName = itemName;
    this.orderedAt = new Date();
    this.completedAt = null;
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  // add to back
  enqueue(item) {
    this.items.push(item);
  }

  // remove and return first item in line
  dequeue() {
    return this.items.shift();
  }

  len() {
    return this.items.length;
  }
}

class Address {
  constructor(number, street, city, state, zip) {
    this.number = number;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
}

class CoffeeShop {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.processedOrders = [];
    this.pendingOrders = new Queue();
    this.orderLine = new Queue();
    this.takeOrders();
    this.processOrders();
  }

  orderPrompt(customer) {
    const orderText = prompt(
      `Hello ${customer.fullName()}. Place your order at ${this.name}`
    );

    if (orderText === "") {
      return;
    }

    const order = new Order(customer.fullName(), orderText);
    this.pendingOrders.enqueue(order);
    this.printPendingOrders();
  }

  takeOrders() {
    setInterval(() => {
      if (this.orderLine.len() > 0) {
        this.orderPrompt(this.orderLine.dequeue());
      }
    }, 5000);
  }

  printPendingOrders() {
    let str = "";

    for (let i = 0; i < this.pendingOrders.len(); ++i) {
      const order = this.pendingOrders.items[i];

      str += `${i}: ${order.customerName} - ${order.itemName}\n`;
    }
    console.log(str);
  }

  processOrders() {
    setInterval(() => {
      if (this.pendingOrders.items.length > 0) {
        const currentOrder = this.pendingOrders.dequeue();
        currentOrder.completedAt = new Date();
        this.processedOrders.push(currentOrder);

        console.log(
          `Order ready: ${currentOrder.customerName} - ${currentOrder.itemName}\n`
        );
      }
    }, 10000);
  }
}

const brandon = new Customer("Brandon", "Nall", 1);
const casey = new Customer("Casey", "Roy", 2);
const daniel = new Customer("Daniel", "H", 3);
const lostBean = new CoffeeShop(
  "The Bean Whomst Knows Not His Location",
  new Address(3335, "Susan St.", "Costa Mesa", "CA", 92626)
);

brandon.getCoffee(lostBean);
daniel.getCoffee(lostBean);
