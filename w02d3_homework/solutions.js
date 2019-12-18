////////////////////////
//// Verbal Questions///
////////////////////////
/* 
What is the difference between a parameter and an argument?
- A parameter is a variable name declared within a function.
Arguments are the data passed into the function.

Within a function, what is the difference between return and console.log?
- Return is used for returning values from a function. 
Console.log logs out information in console.
*/
////////////////////////
////// Palindrome //////
////////////////////////
/*
const checkPalindrome = (str) => {
    return str == str.split('').reverse().join('');
}

console.log(checkPalindrome("racecar"));
*/

////////////////////////
////// Sum Array ///////
////////////////////////
/*
const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i];
      }
      return sum;

}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
*/

////////////////////////
////  Prime Numbers ////
////////////////////////

/* MY CODE IS STILL RETURNING PRIME NUMBERS*/


const checkPrime = (value) => {
    for(let i = 2; i <= Math.sqrt(value); i++) {
        if(value % i === 0) {
            return false;
        } else { 
            return true;
        }
    }
}
console.log(checkPrime(4));
console.log(checkPrime(5));
console.log(checkPrime(9)); // <= 9 NOT PRIME BUT RETURNS TRUE

const printPrime = (num) => {
    for(let i = 0; i <= num; i++) {
        if(checkPrime(i) == true) {
            console.log(i);
        }
    }
}
printPrime(97);



//////////////////////////////
////  ROCK PAPER SCISSORS ////
//////////////////////////////

//DONT UNDERSTAND A LOT OF WHAT I DID HERE//
const randomMove = () => {
    const moveArray = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * (moveArray.length))
    console.log(randomNum)
    return moveArray[randomNum]
}

let computersMove = randomMove();
let usersMove = randomMove();

const rockPaperScissors = (computersMove, userMove) => {
    console.log('Computer played', computersMove)
    console.log('User played', userMove)
    if(computersMove === usersMove) {
        console.log('Tie!');
    } else if(computersMove === 'rock') {
        if(usersMove === 'paper') { console.log('paper beats rock, user wins') }
      else if(usersMove === 'scissors') { console.log('rock beats scissors, computer wins') }
    }else if(computersMove === 'paper') {
        if(usersMove === 'rock') { console.log('paper beats rock, computer wins') }
        else if(usersMove === 'scissors') { console.log('scissors beats rock, user wins') }
        else {
            if(usersMove === 'rock') { console.log('rock beats scissors, user wins') }
            else if(usersMove === 'paper') { console.log('scissors beats paper, computer wins') }
        }
      }
    }
      rockPaperScissors(computersMove, usersMove)
      
