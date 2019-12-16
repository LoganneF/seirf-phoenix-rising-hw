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

const checkPalindrome = (str) => {
    return str == str.split('').reverse().join('');
}

console.log(checkPalindrome("racecar"));

////////////////////////
////// Sum Array ///////
////////////////////////



////////////////////////
////  Prime Numbers ////
////////////////////////