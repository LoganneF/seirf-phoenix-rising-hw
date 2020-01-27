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
}

//user clicking submit button activates function 
$('#submit').on('click', createToDoItem)


});