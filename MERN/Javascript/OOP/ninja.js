function Ninja (name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;

    Ninja.prototype.sayName = () => console.log(`Hello ${this.name}`);
    // or
    // Ninja.prototype.sayName = function(){
    //     console.log("Hi my name is "+name+"!");
    // }
    Ninja.prototype.showStats = () => console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    // or 
    // Ninja.prototype.showStats = function(){
    //     console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
    // }
    Ninja.prototype.drinkSake = () => this.health = this.health + 10;
    // or
    // Ninja.prototype.drinkSake = function(){
    //     this.health = this.health + 10;
    // }
}