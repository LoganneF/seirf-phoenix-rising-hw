//===============
// HAMSTER
//================

class Hamster {
    constructor(owner, name, price) {
        this.owner = owner;
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
    console.log("squeak squeak");
    }   
    eatFood() {
        console.log("nibble nibble");
    }
    getPrice() {
        console.log(this.price);
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
        this.hamsters = [];
        this.bankAccount = 0;
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
        this.mood++;
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
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}

//======================
// PERSON CLASS STORY
//======================
const timmy = new Person('Timmy');
for(let i = 0; i < 5; i++){
    timmy.ageUp();
}

for(let i = 0; i < 5; i++) {
    timmy.eat();
}

for(let i = 0; i < 5; i++){
    timmy.exercise();
}

for(let i = 0; i < 9; i++) {
    timmy.ageUp();
}

const gus = new Hamster("Timmy","Gus");

timmy.buyHamster(gus);
 
for(let i = 0; i < 15; i++) {
    timmy.ageUp();
}   

for(let i = 0; i < 2; i++) {
timmy.eat();
timmy.exercise();
}
//console.log(timmy);