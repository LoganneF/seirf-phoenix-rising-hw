// Create the Player's ship object:
let playerShip = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    // Add methods for battle here
    attack: enemyShip => {
      console.log("Player attacking Alien ship");
      // Check for hit success based on playerShip accuracy:
      if (Math.random() < playerShip.accuracy) {
        console.log("Attack hit!");
        enemyShip.hull -= playerShip.firepower;
      } else {
        console.log("Attack missed!");
      }
      //console.log(enemyShip);
       // if (Math.random() < alien[0].accuracy) {
      // console.log('You have been hit!');
    }
  };
  
  // Define an AlienShip class
  class AlienShip {
    constructor() {
      // TODO: Make hull random between 3 and 6
      this.hull = Math.floor(Math.random() * 4 + 3);
      // TODO: Make random between 2 and 4
      this.firepower = Math.floor(Math.random() * 3 + 2);
      // TODO: Make random between .6 and .8
      this.accuracy = Math.floor(Math.random() * 3 + 6) * 0.1;
    }
    attack() {
      console.log("Alien Ship attacking");
      // Check for hit or miss:
      if (Math.random() < this.accuracy) {
        console.log("Alien ship hit player!");
        playerShip.hull -= this.firepower;
        console.log(`Player Ship hull remaining: ${playerShip.hull}`);
      } else {
        console.log("Alien ship missed");
      }
    }
  }
    //DEFINE A GAME OBJECT
    let gameState = {
        playerIsAlive: () => {
        //return true if player is alive
            return playerShip.hull >= 0
      },
        checkWin: () => {
           if(enemiesArr.length === 0) {
             alert("All aliens destroyed! You won!")
           } else if(playerShip <= 0) {
             alert("Your ship has been destroyed. Game over!")
           }
        
        }
    };

      //================
      // Start the game
      //=================

      console.log("Generating enemy ships");
      
      const enemiesArr = []

      for(let i = 0; i < 6; i++) {
        enemiesArr.push(new AlienShip());
      }

      //console.log(enemiesArr);
    
    //check if alive and aliens in array to fight
    while(gameState.playerIsAlive() && enemiesArr.length >= 1) {
        let firstAlien = enemiesArr[0];
        for(i = 0; i < enemiesArr.length; i++){
            // Player ship attacks:
          playerShip.attack(firstAlien);

        // Turn by turn logic
        // Check if enemy ship is destroyed:
        if (firstAlien.hull <= 0) {
          console.log("Enemy ship destroyed!");
          enemiesArr.shift();
          console.log(enemiesArr.length + ' ships remaining');
          //ask user if they want to continue or retreat:
          let response = prompt("Alien ship destroyed, attack or retreat?");

            if (response === "retreat") {
              alert("You retreated, game over!");
              break;
                } else if (response === "attack") {
                  //keep looping
                  console.log("Continuing gameplay");
                  playerShip.attack(firstAlien);
                }
                } else {
                  // enemy ship not destroyed, their turn to attack:
                  // Enemy ship attacks:
                  firstAlien.attack(playerShip);
                }
                gameState.checkWin();
                }
              }
      

  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  