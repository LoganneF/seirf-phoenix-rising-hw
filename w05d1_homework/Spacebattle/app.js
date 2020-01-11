
//===============
// PSUEDOCODE
//================

/*
1. CREATE ACTOR OBJECT FOR MY SHIP:
    - USS SCHWARZENEGGER SPACESHIP
        -HULL(HITPOINTS): 20; 0 = DESTROYED
        -FIREPOWER: 5;
        -ACCURACY: .7;
        -ATTACK METHOD
        -LOOPS FOR ATTACKING EACH OTHER UNTIL ONE DESTROYED
        -GET TO ATTACK FIRST
        -CAN ONLY ATTACK ONE AT A TIME
*/
let ussSchwarz = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    //add methods for battle here
    attack: () => {
       console.log("Attacking")
       //calculate chance attack will damage other ship w Math.random
    }
};


/*
2. CREATE CLASS FOR SIX ALIEN SPACESHIPS
        -SIX ALIEN SPACESHIPS
The alien ships should each have the following ranged properties determined randomly:
        -HULL(HITPOINTS): BETWEEN 3 AND 6; 0 = DESTROYED
        -FIREPOWER: BETWEEN 2 AND 4;
        -ACCURACY: BETWEEN .6 AND .8;
        -ATTACK METHOD
        -LOOPS FOR ATTACKING EACH OTHER UNTIL ONE DESTROYED
        -WEAKNESS= ATTACK ONE AT A TIME
*/
class Alien {
    constructor(hull, firepower, accuracy, attack)
    this.hull
    this.firepower
    this.accuracy
}

//CREATE A GAME OBJECT
let game = {
    hero: ussSchwarz,
    villain: Alien,

}
enemyShip = {
shipNum: 1,
health: 100,
isAttacking:false
}

const attackEnemy = (enemyShip) => {

    console.log("Boom! you have been hit");
    enemyShip.health -= 10;
}

//HIT IS BASED OFF OF ACCURACY. MATH.RANDOM ACCURACY TO DETERMINE IF YOU MET THRESHOLD TO HIT THE ALIEN OR IF THEY HIT YOU 
// HAVE BUTTON REP SHIPS. IF BUTTON CLICKED EQUAL ATTACK, THIS SETS OFF HIT FUNCTION 
/*
START THE GAME
//WHen USS schwartz clicked, signal user to click alien button 


END GAME LOGIC
 - player wins when alien.hull = 0

TURN BY TURN LOGIC
 - if ussSwartz shoots & alien != hit, then alien turn
 -ussS

BATTLE

RETREAT OPTION 

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