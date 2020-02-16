$( () => {

//=====================
//  Big Picture 
//=====================
//when user submits data, a div item is created
//that data is stored and displayed in things to do column
//when user clicks 'completed' button, list item is moved to things that are done column
//when user clicks 'remove' button, it clears it from page 


//=======================
//  Step by Step
//=======================

//create todo items array
let toDoItemsArr = []

//create function to create todo divs
const createToDoItem = () => {
    //log user input
    console.log($('#input-box').val());

    //create todo item div from user input <div class="to-do-item"> 
    $newToDoItem = $('<div>').text($('#input-box').val()).addClass("to-do-item");
    //push new div into array
    toDoItemsArr.push($newToDoItem);

    //append user todo items array to ToDo List column
    $('#to-do-list').append(toDoItemsArr)
    //prevent page from refreshing
    event.preventDefault();




//need a completed button appended to the $newToDoItem div
$completeButton = $('<button>').text('COMPLETED')
$newToDoItem.append($completeButton);
}

//user clicking submit button activates function 
$('#submit').on('click', createToDoItem)
//when user clicks that button, it moves to "been done" column
//change color and adds 'remove' button when moves to that column
//when user clicks 'remove' item is removed from page 
});