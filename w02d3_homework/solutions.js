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

const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i];
      }
      return sum;

}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
////////////////////////
////  Prime Numbers ////
////////////////////////