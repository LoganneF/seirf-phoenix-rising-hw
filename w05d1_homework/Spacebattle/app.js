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
      console.log(enemyShip);
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
       if(playerShip.hull > 0){
           return true;
        }
      },
        checkWin: () => {
            return enemies.length === 0;
        
        }
    };

   
      // Start the game
      console.log("Generating enemy ships");
      enemy = new AlienShip();
      console.log(enemy);
      
      enemies = []
      for(let i=0; i < 6; i++) {
      enemies.push(new AlienShip());
      }

      console.log(enemies);
    
    while(gameState.playerIsAlive()) {
        for(i = 0; i < enemies.length; i++){
            // Player ship attacks:
          playerShip.attack(enemies[0]);

      // Turn by turn logic
        // Check if enemy ship is destroyed:
        if (enemies.hull <= 0) {
            //if enemy ship destroyed:
          console.log("Enemy ship destroyed!");
          enemies.shift();
          console.log(enemies.length + ' ships remaining');
          //ask user if they want to continue or retreat:
          let response = prompt("Ship Destroyed, attack or retreat?");

          
            if (response === "retreat" || enemies.length === 0) {
              alert("You eliminated all the aliens, game over!");
              break;
                } else if (response === "attack") {
                  //keep looping
                  console.log("Continuing gameplay");
                }
                } else {
                  // enemy ship not destroyed, their turn to attack:
                  // Enemy ship attacks:
                  enemies[0].attack();
                }
                }
              }
      
  // End game logic
  //player lost or retreated
  if (gameState.checkWin()) {
    console.log("Game over");
  }
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  