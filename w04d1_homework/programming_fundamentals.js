//////////////////////////////////
////// COMMON PROG PRINCIPLES/////
//////////////////////////////////

// Write a ~1 sentence summary for each one
// Which ones surprise you (if any)?
// Which one is currently giving you the most struggle?

// DRY
// - DON'T REPEAT YOURSELF! Keep repetition out of code to keep it efficient

// KISS
// - Simple code is easier to read, write and modify

// Avoid creating a YAGNI
// - Don't include things unless you need them now, not later

// Do the simplest thing that could possibly work
// -
// Don't make me think
// Write code for the maintainer
// Single responsibility principle
// Avoid premature optimization
// Separation of concerns
// Answer

//////////////////////////////////
////// COMMON PROG PRINCIPLES/////
//////////////////////////////////

//creates function stored in var f with parameter of l
const f = l => {
    //creates var es, p, c, n and assigns them number values
    let es = 0, p = 0, c = 1, n = 0
    //while(loop) c is less or equal to l then...
    while (c <= l) {
      //reassign n to sum of c plus p
      n = c + p;
      //reassign p to c and c to n?
      [c, p] = [n, c]
      //if c is even then add c to es
      es += (c % 2 === 0) ? c : 0
    }
    //return final value of es
    return es
  }
  //call the function with argument of 55
  console.log(f(55))

////// ANSWERS 
//semantic name = findEvenSum
//I'd rather start with f2
//Yes, because the equal sign in the next line confuses the comp