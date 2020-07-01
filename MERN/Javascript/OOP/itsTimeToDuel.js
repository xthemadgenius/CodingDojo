class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){

    }
}
class DuelCards extends Unit{
    constructor(name, cost, power, res){
        super(name, cost, power, res);
    }
    redBeltNinja(){
        this.cost -= 3;
        this.power = 3;
        this.resiliance = 4;
    }
    blackBeltNinja(){
        this.cost -= 4;
        this.power = 5;
        this.resiliance = 4;
    }
    hardAlgorithm(){
        this.cost -= 2;
        this.resiliance += 3;
        console.log(`Increase target's resiliance by 3`)
    }
    unhandledPromiseRejection(){
        this.cost -= 1;
        this.resiliance -= 2;
        console.log(`Reduce target's resiliance by 2`)
    }
    pairProgramming(){
        this.cost -= 3;
        this.power += 2;
        console.log(`Increse target's Power by 3`)
    }
}
const player1 = new DuelCards("Jaxx");
player1.redBeltNinja()
player1.redBeltNinja().hardAlgorithm()
const player2 = new DuelCards("Nacho");
player2.blackBeltNinja();
player2.blackBeltNinja().unhandledPromiseRejection();
player1.redBeltNinja().pairProgramming();
player1.attack(player2)
// solution I am turing in for now