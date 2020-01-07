const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]

const greaterThan0 = nums.every(num => num >= 0)
//console.log(greaterThan0)
const shorterThan8 = panagram.every(word => word.length < 8)
//console.log(shorterThan8) 

const filterNums = nums.filter(num => num < 4)
//console.log(filterNums)
const filterWords = panagram.filter(word => (word.length % 2 === 0))
//console.log(filterWords)

const findDivFive = nums.find(num => (num % 5 === 0))
//console.log(findDivFive)
const findLongWord = panagram.find(word => word > (word.length % 5 === 0))
//console.log(findLongWord)

//console.log(nums.findIndex(num => (num % 3 === 0)))
//console.log(panagram.findIndex(word => (word.length < 2)))

//nums.forEach(num => console.log(num * 3))
//panagram.forEach(word => console.log(word + '!'))

const map1 = nums.map(x => x * 100)
//console.log(map1) 

const map2 = panagram.map(function(x) { 
    return x.toUpperCase(); 
});
//console.log(map2);


const someNums = nums.some(num => (num % 7 === 0))
//console.log(someNums)
const someWords = panagram.some(word => word.includes('a'))
//console.log(someWords)