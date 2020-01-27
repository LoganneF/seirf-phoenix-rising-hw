$( () => {
//when user submits data, a <div class="to-do-item"> is created
//that data is stored and displayed in things to do column

//when user clicks 'completed' button, list item is moved to things that are done column

//when user clicks 'remove' button, it clears it from page 
let toDoItemsArr = []

const createToDoItem = () => {
    console.log($('#input-box').val());

    $newToDoItem = $('<div>').text($('#input-box').val()).addClass("#to-do-item");
    toDoItemsArr.push($newToDoItem);
}



});