const express = require("express");
const faker = require("faker");
const app = express();

class Product {
    constructor(){
        this.name = faker.commerce.productName();
        this.price = faker.commerce.price();
        this.department = faker.commerce.department();
    }
}
console.log(new Product());

class User {
    constructor(){
        this.firstName = faker.commerce.productName();
        this.lastName = faker.commerce.price();
        this.phoneNumber = faker.commerce.department();
        this.email = faker.commerce.price();
        this.password = faker.commerce.department();
    }
}
console.log(new User());