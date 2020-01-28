$( () => {
    let player = 1;

    $('.square').on('click', function(event) {

        let selectedSquare = $(this);

        if(selectedSquare.hasClass('x') || selectedSquare.hasClass('o')) {
            alert('This square has already been selected. Please select another.');
        } else {
            if(player === 1) {
                selectedSquare.addClass('x');
                player = 2;
            } else {
                selectedSquare.addClass('o');
                player = 1;
            }
        }
    });
    const checkWin = (symbol) => {
        
    }
});