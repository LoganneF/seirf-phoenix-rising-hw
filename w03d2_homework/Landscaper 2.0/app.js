// =======================================
//          PLAYER OBJECT
// =======================================

const player = {
    name: "player",
    wallet: 0, 
    tool: "your teeth", 
    isWorking: true, 
    dayCount: 0,
};

// =======================================
//          START METHOD
// =======================================

const start = () => {
    showStatus();
    askForAction();
  };
  
  
  // USER INFORMATION
  const showStatus = () => {
    alert(`You have $${player.wallet}.  Your tool is ${player.tool}.`)
  };
  
  // USER ACTIONS AND INPUT
  const askForAction = () => {
    showStatus();
    //need prompts here
  };
  
// =======================================
//          GAME PLAY OPTIONS
// =======================================

//LANDSCAPE/CUT GRASS FUNCTION

const landscape = () => {
    if (tool === 'your teeth') {
      alert('Using ' + tool + ' will earn you $1 each day!')
      money += 1;
      askForAction();
    } else if (tool === 'a pair of rusty scissors') {
      money += 5;
      askForAction();
    } else if (tool === 'an old-timey push lawnmower') {
      money += 50;
      askForAction();
    } else if (tool === 'a fancy battery-powered lawnmower') {
      money += 100;
      askForAction();
    } else if (tool === 'a team of starving students') {
      money += 250;
      if (money <1000) {
        askForAction();
      } else {
      // Game Ends
        alert('Congratulations!  You have made $' + money + ' with the help of your tools!  You have won the game!')
      }
    }
  };

//CHECK TOOL FUNCTION

//BUY FUNCTION TOOL

// =======================================
//        CHECK WIN FUNCTION
// =======================================
  const checkWin = () => {
      if(player.wallet >= 1000 && player.tool === 'team of students'){
          alert(`${player.name} , you won the game!`)
      } else {
          start();
      }
  }

// =======================================
//          CALL START FUNCTION
// =======================================
  start();

//If using teeth to cut lawns, make 1$ a day
/*while(player.tool === "teeth"){
    //player.dayCount + 1, wallet + 1
}

//If player.bank >= 5, can buy scissors
if(player.wallet >= 5){
    console.log("Want to buy scissors for $5? You will make $5 a day!");
    //player inputs buy scissors
    player.wallet -= 5
    player.tool = "scissors";
} else {
    //continue player.dayCount + 1 && wallet + 1
}

//If use scissors, make 5$ a day
while(player.tool === "scissors"){
    //player.dayCount + 1 && wallet + 5
}

//If using scissors && player.bank >= $25, can buy lawnmower
if(player.tool === "scissors" && player.wallet >= 25){
   console.log("Want to buy janky lawnmower? You will make $50 a day!");
    //player inputs buy lawnmower
    player.wallet -= 25
    player.tool = "janky lawnmower";
} else {
    //continue player.dayCount + 1 && player.wallet + 5
}

//If using lawnmower, can make 50$ a day
while(player.tool === "janky lawnmower"){
    //player.dayCount + 1 && player.wallet + 50 
}

//If using lawnmower && player.bank >= $250, can buy fancy lawnmower
if(player.tool === "janky lawnmower" && player.wallet >= 250){
    console.log("want to buy fancy lawnmower? You can make $100 a day!");
    //user inputs fancy lawnmower
    player.wallet -= 250
    player.tool === "fancy lawnmower";
}

//If using fancy lawnmower, can make $100 a day
while(player.tool === "fancy lawnmower"){
    //player.dayCount + 1 && player.wallet + 100
}

//If using fancy lawnmower && have >= $500, can hire starving students
if(player.tool === "fancy lawnmower" && player.wallet >= 500){
    console.log("Want to hire a team of starving students? You can make $250 a day!");
    //user inputs team of students
    player.wallet -= 500
    player.tool === "team of students";
}

//If using starving students, can make $250 a day
while(player.tool === "team of students"){
    //player.dayCount + 1 && player.wallet + 250
}

*/


