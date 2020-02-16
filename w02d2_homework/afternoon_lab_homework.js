/* Easy Does It
let quotes = ["This is a quote.", "This is also a quote.", "This too is a quote."];
*/

/* Random
const randomThings = [1, 10, "Hello", true];

1. console.log(randomThings[0]);
2. randomThings[2] = "World";
console.log(randomThings);
*/

/* We've Got Class
const ourClass = ["Outrun", "Zoom", "Github", "Slack"]

1. console.log(ourClass[2]);
2. ourClass[2] = "Octocat";
3. ourClass.push("Cloud City");
console.log(ourClass);
*/

/* Mix It Up
4. const myArray = [5 ,10 ,500, 20];

5. myArray.push("Egon");
6. myArray.pop();
7. myArray.unshift("Bob Marley");
8. myArray.shift();
9. myArray.reverse();
console.log(myArray);
*/

/* Biggie Smalls
const myArray = [5 ,10 ,500, 20];

for (i = 0; i < myArray.length; i++){
    if(myArray[i] < 100){
        console.log("little number");
    } else {
        console.log("big number");
    }
}
*/

/* Monkey in the Middle
let numEntered = 7;

if(numEntered <5 ) {
    console.log("little number");
} else if(numEntered > 10 ) {
    console.log("big number");
} else {
    console.log("monkey");
}
*/

/* What's in Your Closet
  1. console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
  2. let kristynShoe = kristynsCloset.shift();
  3. kristynsCloset.splice(5, 0, "raybans");
  4. kristynsCloset[4] = "stained knit hat";
  console.log(kristynsCloset);
  5. console.log(thomsCloset[0][0]);
  6. console.log(thomsCloset[1][1]);
  7. console.log(thomsCloset[2][2]);
  8. console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][2] + "!");
  9. thomsCloset[1][2] = "Footie Pajamas";
  console.log(thomsCloset);
  */


  .img_cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
   
 }
 
 .img_card {
    flex: 0 3 32%;
    border-style: solid;
    border-color: rgb(184, 184, 184);
    border-width: 1px;
    border-radius: 7px;
    margin-top: 10px;
    text-align: center;
    overflow: hidden;
}


   display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
