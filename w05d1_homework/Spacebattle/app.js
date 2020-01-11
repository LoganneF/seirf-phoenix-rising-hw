
//===============
// PSUEDOCODE
//================

/*
1. CREATE PLAYER'S SHIP:
    - USS SCHWARZENEGGER SPACESHIP
        -HULL(HITPOINTS): 20; 0 = DESTROYED
        -FIREPOWER: 5;
        -ACCURACY: .7;
        -ATTACK METHOD
        -LOOPS FOR ATTACKING EACH OTHER UNTIL ONE DESTROYED
        -GET TO ATTACK FIRST
        -CAN ONLY ATTACK ONE AT A TIME
*/
let playerShip = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    //add methods for battle here
    attack: enemyShip => {
       console.log("Attacking")

       //check for hit success based on playerShip accuracy
       if(Math.random() < playerShip.accuracy) {
           console.log("Attack Hit!")
        enemyShip.hull -= playerShip.firepower;
       } else {
           console.log("Attack Missed!");
       }
            console.log(enemyShip);

 //calculate chance attack will damage other ship w Math.random
       //if (Math.random() < alien[0].accuracy) {
           //console.log('Youve been hit!');
      // }
      
    }
};


//CREATE CLASS FOR SIX ALIEN SPACESHIPS
        
class AlienShip {
    constructor() {
    //TODO: make hull random bw 3 and 6
    this.hull = 3
    //TODO: make firepower random bw 2 and 4
    this.firepower = 2
    //TODO: make acccuuracy random bw .6 and .8
    this.accuracy = 0.6
}
attack(){
    console.log("Alien ship atttacking")
}
}
//START THE GAME
console.log("generating enemy ships")
enemy = new AlienShip();
console.log(enemy);


//HIT IS BASED OFF OF ACCURACY. MATH.RANDOM ACCURACY TO DETERMINE IF YOU MET THRESHOLD TO HIT THE ALIEN OR IF THEY HIT YOU 
// HAVE BUTTON REP SHIPS. IF BUTTON CLICKED EQUAL ATTACK, THIS SETS OFF HIT FUNCTION 


//CREATE A GAME OBJECT
// END GAME LOGIC
//  - player wins when alien.hull = 0

// TURN BY TURN LOGIC
playerShip.attack(enemy);

// BATTLE

// RETREAT OPTION 
/*
. GAME ROUND .

You attack the first alien ship

If the ship survives, it attacks you

If you survive, you attack the ship again

If it survives, it attacks you again

Etc.

If you destroy the ship, you have the option to attack the next ship or to retreat

If you retreat, the game is over, perhaps leaving the game open for further developments or options.

You win the game if you destroy all of the aliens.

You lose the game if you are destroyed.

*/
/*
enemyShip = {
shipNum: 1,
health: 100,
isAttacking:false
}

const attackEnemy = (enemyShip) => {

    console.log("Boom! you have been hit");
    enemyShip.health -= 10;
}
*/