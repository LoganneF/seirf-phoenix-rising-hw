//===============
// HAMSTER
//================

class Hamster {
    constructor(owner, name, price) {
        this.owner = "";
        this.name = name;
        this.price = 15;
    }
    wheelRun () {
    console.log("squeak squeak");
    }   
    eatFood () {
        console.log("nibble nibble");
    }
    getPrice () {
        console.log(this.price)
    }
}
//===============
// PERSON
//================

class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        hamsters = [];
        bankAccount = 0;
    }
    getName() {
        console.log(this.name);
    }
    getAge() {
        console.log(this.age);
    }
    getName() {
        console.log(this.name);
    }
    getWeight() {
        console.log(this.weight);
    }
    greet() {
        console.log('Hi, I am ' + this.name);
    }
    eat() {
        this.weight++;
        this.height++;
    }
    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++; 
        this.height++;
        this.mood--;
        this.bankAccount += 10;
    }
    buyHamser(Hamster) {
        this.hamsters.push(Hamster);
        this.mood += 10;
        this.bankAccount -= Hamster.getPrice();
    }
}

   
    