class Player{
    constructor(name){
        this.name = name;
    }
}
class Ninja extends Player{
    constructor(name){
        super(name);
        this.coins = 10;
        this.power = 10;
        this.res = 10;
        this.cost = 0;
    }
    redBeltNinja(){
        this.cost = 3
        if (this.coins >= this.coins - this.cost){ 
            this.coins -= this.cost;
            this.power += 3;
            this.res += 4;
            console.log(`${this.name} played Red Belt Ninja`);
        } else {
            console.log("Can not afford card");
        }
    }
    blackBeltNinja(){
        this.cost = 4
        if (this.coins >= this.coins - this.cost){ 
            this.coins -= this.cost;
            this.power += 5;
            this.res += 4;
            console.log(`${this.name} played Black Belt Ninja`);
        } else {
            console.log("Can not afford card");
        }
    }
}
class DuelCards extends Ninja{
    constructor(name){
        super(name, 10, 10, 10);
        this.cost = 0;
    }
    hardAlgorithm(){
        this.cost = 2;
        if (this.coins >= this.coins - this.cost){
            this.coins -= this.cost;
            this.res += 3;
            console.log(`${this.name} increaded their resiliance by 3`)
        } else {
            console.log("Can not afford card");
        }
    }
    unhandledPromiseRejection(target){
        this.cost = 1;
        if (this.coins >= this.coins - this.cost){
            this.coins -= this.cost;
            target.res -= 2;
            console.log(`${this.name} reduced ${target.name}'s resiliance by 2`)
        } else {
            console.log("Can not afford card");
        }
    }
    pairProgramming(){
        this.cost = 3;
        if (this.coins >= this.coins - this.cost){
            this.coins -= this.cost;
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
// #1
const player1 = new DuelCards("Roshi");
console.log(player1);
player1.redBeltNinja();
console.log(player1);
// #2
player1.hardAlgorithm();
console.log(player1);
// #3
const player2 = new DuelCards("Crane");
console.log(player2);
player2.blackBeltNinja();
console.log(player2);
// #4
player2.unhandledPromiseRejection(player1);
console.log(player1);
// #5
player1.pairProgramming()
console.log(player1);
// #6
player1.attack(player2);
