class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
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

class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Bugs only exist in the mind, errors exist in people");
    }
}

let ninja = new Ninja("Donatello", 100);
ninja.showStats();
ninja.drinkSake();
ninja.showStats();
let sensei = new Sensei("Master Splinter");
sensei.showStats();
sensei.speakWisdom();
sensei.showStats();