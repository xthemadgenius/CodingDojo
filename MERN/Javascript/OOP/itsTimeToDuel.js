class Player{
    constructor(name){
        this.name = name;
    }
}
class Ninja extends Player{
    constructor(name, cost, power, res){
        super(name);
        this.cost = cost;
        this.power = power;
        this.res = res;
    }
    redBeltNinja(){
        var price = 3
        if (this.cost >= this.cost - price){ 
            this.cost -= price;
            this.power += 3;
            this.res += 4;
        } else {
            console.log("Can not afford card");
        }
    }
    blackBeltNinja(){
        var price = 4
        if (this.cost >= this.cost - price){ 
            this.cost -= price;
            this.power += 5;
            this.res += 4;
        } else {
            console.log("Can not afford card");
        }
    }
}
class DuelCards extends Ninja{
    constructor(name, cost, power, res){
        super(name, cost, power, res);
    }
    hardAlgorithm(){
        var price = 2;
        if (this.cost >= this.cost - price){
            this.cost -= price;
            this.res += 3;
            console.log(`${this.name} increaded their resiliance by 3`)
        } else {
            console.log("Can not afford card");
        }
    }
    unhandledPromiseRejection(target){
        var price = 1;
        if (this.cost >= this.cost - price){
            this.cost -= price;
            target.res -= 2;
            console.log(`${this.name} reduced ${target.name}'s resiliance by 2`)
        } else {
            console.log("Can not afford card");
        }
    }
    pairProgramming(){
        var price = 3;
        if (this.cost >= this.cost - price){
            this.cost -= price;
            this.power += 2;
            console.log(`${this.name} incresed their Power by 3`)
        } else {
            console.log("Can not afford card");
        }
    }
    attack(target){
        target.res -= this.power;
        console.log(`${this.name} attacked ${target.name} doing a damage of ${this.power}`)
        if( target.res > this.power){
            console.log(`${target.name} survied the attack`);
        } else {
            console.log(`${target.name} lost the battle`);
        }
    }
}
//#1
const player1 = new Player("Jaxx");
const red = new Ninja(player1.name, 10, 10, 10)
console.log(red);
red.redBeltNinja()
console.log(red);
// #2
const fighter1 = new DuelCards(red.name, red.cost,red.power, red.res);
fighter1.hardAlgorithm(fighter1)
console.log(fighter1);
// #3
const player2 = new Player("Nacho");
const black = new Ninja(player2.name,10, 10, 10);
console.log(black);
black.blackBeltNinja();
console.log(black);
// #4
const fighter2 = new DuelCards(black.name, black.cost,black.power, black.res);
fighter2.unhandledPromiseRejection(fighter1);
console.log(fighter1);
// #5
fighter1.pairProgramming();
console.log(fighter1);
// #6
fighter1.attack(fighter2);