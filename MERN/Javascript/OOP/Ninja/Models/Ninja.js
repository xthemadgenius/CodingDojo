class NinjaModel{
    constructor(firstName, lastName, health, power, speed){
        this.firstName = firstName;
        this.lastName = lastName;
        this.health = health;
        this.power = power;
        this.speed = speed;
    }
    fullName(){
        return this.firstName + " " + this.lastName;
    }
    sayName(){
        console.log(`My name is ${this.name}`);
    }
    showStats(){
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }
    drinkSake(){
        this.health += 10;
    }
}

export default NinjaModel;