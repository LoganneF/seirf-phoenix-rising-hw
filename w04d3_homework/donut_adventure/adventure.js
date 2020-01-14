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
    fight() {
        console.log('i\'m ready to rumble');
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
    talkSass() {
        console.log(this.catchPhrases[0]);
    }
    announceHealth() {
        console.log(this.heatlh);
    }
    fight() {
        console.log("i\'m gonna flatten you like a slice of pepperoni!");
    }
}
const pizzaRat = new Enemy('Pizza Rat');
console.log(pizzaRat);