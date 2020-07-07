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
}

export default NinjaModel;