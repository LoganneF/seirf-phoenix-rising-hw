//========================================
// Combine objects, arrays, and functions
//=========================================
let crayonBox = {
    crayons: ["Brick", "Scarlet", "Apricot"],
    count: 120,
    brand: "Crayola"
}
//console.log(crayonBox.crayons[0])
   
let bottle = {cap: {material: 'metal', color: 'blue'}, size: '160z'}
//console.log(bottle.cap.material)

let receipt = ["Walmart", "Target", costco = {guac: 4.99, cheese: 6.99}]
//console.log(receipt[2].guac)

let apartmentBuilding = [tenants= ["Loganne", "Morgan", "John"], "Quail Ridge", "Greenbridge"]
//console.log(apartmentBuilding[0][0])


//==================================================================
// Combine objects, arrays, and functions more than one level deep
//==================================================================
let project = {item: "scarf", size : "6ft"}

const knit = () => {
    console.log(project.item)
}
//knit();
const crayonSelector = () => {
    console.log(crayonBox.crayons[0])
}
//crayonSelector();
const options = (message) => {
    console.log(message)
}
const powerButton = (options) => {
    return options
}
//options("select a song");

//=================================================================
// Model a Vending Machine 
//=================================================================
const vendingMachine = {
    snacks: [
        Chips = {name: "Cheetos", price: "$1"}, 
        Crackers = {name: "Peanut Butter", price: '$1'}, 
        Gum = {name: "Trident", price: "$1"}
    ],
    vend (input) {
        console.log('vending', vendingMachine.snacks[input]);
    }
};

//vendingMachine.vend(0);




//=========================================
// Callbacks
//=========================================
//Make a function add that takes two arguments (numbers) and sums them together
     let add = (num1, num2) => num1 + num2;
     //console.log(add(5, 10))
// Make a function subtract that takes two arguments (numbers) and subtracts them
    let subtract = (num1, num2) => num1 - num2;
    //console.log(subtract(5, 10))
// Make a function multiply that takes two arguments and multiplies them
    let multiply = (num1, num2) => num1 * num2;
// Make a function divide that takes two arguments and divides them
    let divide = (num1, num2) => num1 / num2;
// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback)
    let calculate = (num1, num2, operates) => {
        return operates(num1, num2); 
    }
    // console.log(calculate(10, 5, add))
    // console.log(calculate(10, 5, subtract))
    // console.log(calculate(10, 5, divide))
    // console.log(calculate(10, 5, multiply))

// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
// Call calculate 4 times, each time using one of the operation functions you wrote


//=================================================================
// Function definition placement
//=================================================================


// const bar = () => {
//     console.log('bar here');
// }

// const foo = () => {
//     console.log('foo here');
// }

//bar();
//foo();

//=================================================================
// Error Reading 
//=================================================================

//this needs to be declared after the function
foo();

//missing '=' after foo
const foo =()=>{
    console.log('hi');
}