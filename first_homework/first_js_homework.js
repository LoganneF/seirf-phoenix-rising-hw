// SECTION 1

/*1. DRY stands for Don't Repeat Yourself. 
Dry code avoids repetition and makes code more readable. 
Loops help keep code dry. 

2. const is the keyword that prevents variables from being reassigned
var is just the keyword for variable but is outdated and avoided thanks to ES6.
let is the keyword that allows variables to be reassigned*/

//  SECTION 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a + b === c);
console.log(a * a === d);
console.log(e !== 'Kevin');
console.log(48 !== '48');
console.log(f !== e);

//Set a new variable g to 0
g = 0;
console.log(g);

//Then set the variable g to be equal to b + c
g = b + c;
console.log(g);

/*1. I used let because I was reassigning the variable.
Var is outdated. Const would have thrown an error.
2. Even without the keyword it still ran the code properly.
3. 10 = g ran this error: SyntaxError: Invalid left-hand side in assignment*/

console.log(a > (b || f) === !f && e < c);

//4 < (53 || false) < true && 'Kelvin' < 57

// SECTION 3

/* 1. This is an infinite loop because nothing
will cause it to equal false and break the loop

2. This is an inifinite loop because the variable 
can't be reassigned so it should throw an error message */

let letters = "A";
let i = 0;

// start a while loop that will run as long as i is less than 10
while (i < 20) {
    //increments the value of variable letters by "A"
    letters += "A";
    //increments the value of i by 1
    i++;
//closes loop. Loop will keep running until condition is met
}
// prints the value of letters to the screen/Terminal window
console.log(letters);
//It should print 20 A's

//  SECTION 4

/* 1. For and while loops basically do the same thing but 
in for loops you have to create a new variable. While loops 
give you more flexibility as to when it will stop or what
goes in it.

2. The first part of the control panel is: the initializer;
The second part of the control panel is: the while condition;
The third part of the control panel is: the incrementer; */


for (let i = 0; i < 999; i++) {
    console.log(i);
}

// BONUS

/* Backslashes are used to escape characters in strings */

for (let i = 999; i > 0; i--) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log("The current value of i is: " + i + " of 10");
}

// BONUS 

for (let i = 1; i <= 10; i++) {
    console.log(`The current value of i is: ${i} of 10`);
}

const starWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for(i = 0; i < starWars.length; i++){
    console.log(starWars[i]);
}

for(i = 0; i < starWars.length; i++){
    console.log(starWars[i] + " " + i);
}
//  BONUS

for(i = 0; i < starWars.length; i += 2){
    console.log(starWars[i]);
}

