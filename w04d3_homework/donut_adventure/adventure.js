//======================
//  The Characters
//=======================

class Hero {
    constructor(name, health, weapons, catchPhrases) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        };
        this.catchPhrases = ['i\'m fresher than day old pizza', 'you can\'t count my calories'];
    }
    talkSass() {
        console.log(this.catchPhrases[0]);
    }
    announceHealth() {
        console.log(this.health);
    }
    fight(enemy) {
        let weapon = this.weapons.sugarShock;
        enemy.health -= weapon;
        console.log(`Pizza Rat got hit by ${Object.keys(this.weapons)[1]}! His health is now at ${enemy.health}!`)
    }

}
const dougie = new Hero('Dougie the donut');
//console.log(dougie);

class Enemy {
    constructor(name, heatlh, weapons, catchPhrases) {
        this.name = name;
        this.health = 100;
        this.weapons = {
           pepperoniStars: 5,
           cheeseGrease: 10    
        };
        this.catchPhrases = ['i\'m youtube famous','i\'m more dangerous than an uncovered sewer'];
    }
    talkSmack() {
        console.log(this.catchPhrases[0]);
    }
    announceHealth() {
        console.log(this.health);
    }
    fight(enemy) {
        let weapon = this.weapons.cheeseGrease;
        enemy.health -= weapon;
        console.log(`Dougie got hit by ${Object.keys(this.weapons)[1]}! His health is now at ${enemy.health}!`)
    }
}
const pizzaRat = new Enemy('Pizza Rat');
//console.log(pizzaRat);

//======================
//  The Story
//=======================

//=========================
// WALKING DOWN THE STREET
//==========================


dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();

//======================
//      FIGHT!
//=======================
pizzaRat.fight(dougie);
dougie.fight(pizzaRat);
dougie.announceHealth();
pizzaRat.announceHealth();
