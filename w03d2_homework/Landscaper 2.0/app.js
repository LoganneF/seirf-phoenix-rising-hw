//=====================================
//      PLAYER OBJECT
//=====================================

const player = {
  name: "player",
  wallet : document.getElementById("wallet"),
  tool: "your teeth", 
  wage: 1,
}; 

// =======================================
//          START METHOD
// =======================================

// const start = () => {
//   //prompt intro and ask for name 
//   //showStatus();
//   askForAction();
// };
  
//   //STATUS
//   const showStatus = () => {
//     alert(`Your tool is ${player.tool}.`)
//   };
  
//   // ACTIONS
//   const askForAction = () => {
//     showStatus();
//     //need prompts here
//    
  
// =======================================
//          GAME PLAY OPTIONS
// =======================================

//LANDSCAPE/CUT GRASS FUNCTION

// const landscape = () => {
//     if (player.tool === 'your teeth') {
//       player.wage = 1;
//       player.wallet += player.wage;
//     if (player.wallet === 5){
//       askForAction(); 
//     } else if (player.tool === 'a pair of rusty scissors') {
//       player.wage = 5;
//       player.wallet += player.wage;
//       askForAction();
//     } else if (player.tool === 'an old-timey push lawnmower') {
//       player.wage = 25;
//       player.wallet += player.wage;
//       askForAction();
//     } else if (player.tool === 'a fancy battery-powered lawnmower') {
//       player.wage = 100;
//       player.wallet += player.wage;
//       askForAction();
//     } else if (player.tool === 'a team of starving students') {
//       player.wage = 250;
//       player.wallet += player.wage;
//       if (player.wallet < 1000) {
//         askForAction();
//       } else {
//       // Game Ends
//         alert('Congratulations!  You have made $' + player.wallet  + ' with the help of your tools! You have won the game!')
//       }
//     }
//   }
//   };

// //BUY TOOL FUNCTION

// // =======================================
// //        CHECK WIN FUNCTION
// // =======================================
//   const checkWin = () => {
//       if(player.wallet  >= 1000 && player.tool === 'team of students'){
//           alert(`${player.name} , you won the game!`)
//       } else {
//           start();
//       }
//   }

// // =======================================
//          CALL START FUNCTION
// =======================================
  //start();

//If using teeth to cut lawns, make 1$ a day
/*while(player.player.tool === "teeth"){
    //player.dayCount + 1, player.wallet  + 1
}

//If player.bank >= 5, can buy scissors
if(player.player.wallet  >= 5){
    console.log("Want to buy scissors for $5? You will make $5 a day!");
    //player inputs buy scissors
    player.player.wallet  -= 5
    player.player.tool = "scissors";
} else {
    //continue player.dayCount + 1 && player.wallet  + 1
}

//If use scissors, make 5$ a day
while(player.player.tool === "scissors"){
    //player.dayCount + 1 && player.wallet  + 5
}

//If using scissors && player.bank >= $25, can buy lawnmower
if(player.player.tool === "scissors" && player.player.wallet  >= 25){
   console.log("Want to buy janky lawnmower? You will make $50 a day!");
    //player inputs buy lawnmower
    player.player.wallet  -= 25
    player.player.tool = "janky lawnmower";
} else {
    //continue player.dayCount + 1 && player.player.wallet  + 5
}

//If using lawnmower, can make 50$ a day
while(player.player.tool === "janky lawnmower"){
    //player.dayCount + 1 && player.player.wallet  + 50 
}

//If using lawnmower && player.bank >= $250, can buy fancy lawnmower
if(player.player.tool === "janky lawnmower" && player.player.wallet  >= 250){
    console.log("want to buy fancy lawnmower? You can make $100 a day!");
    //user inputs fancy lawnmower
    player.player.wallet  -= 250
    player.player.tool === "fancy lawnmower";
}

//If using fancy lawnmower, can make $100 a day
while(player.player.tool === "fancy lawnmower"){
    //player.dayCount + 1 && player.player.wallet  + 100
}

//If using fancy lawnmower && have >= $500, can hire starving students
if(player.player.tool === "fancy lawnmower" && player.player.wallet  >= 500){
    console.log("Want to hire a team of starving students? You can make $250 a day!");
    //user inputs team of students
    player.player.wallet  -= 500
    player.player.tool === "team of students";
}

//If using starving students, can make $250 a day
while(player.player.tool === "team of students"){
    //player.dayCount + 1 && player.player.wallet  + 250
}

*/


