$( () => {
    let player = 1;

    $('.square').on('click', function(event) {

        let selectedSquare = $(this);

        if(selectedSquare.hasClass('x') || selectedSquare.hasClass('o')) {
            alert('This square has already been selected. Please select another.');
        } else {
            if(player === 1) {
                selectedSquare.addClass('x').text('X');
                if(checkWin('x')) {
                    alert('Congrats! Player ' + player + ' has won!');
                } else {
                    player = 2;
                }
            } else {
                selectedSquare.addClass('o').text('O');
                if(checkWin('o')) {
                    alert('Congrats! Player ' + player + ' has won!');
                } else {
                    player = 1;
                }
            }
        }
    });
    const checkWin = (symbol) => {
        // WIN LOGIC HORIZONTALLY
        if($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) {
            return true;
        } else  if($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
            return true;
        } else  if($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
            return true;
        // WIN LOGIC VERTICALLY 
        } else  if($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
            return true;
        } else  if($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
            return true;
        } else  if($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
            return true;
        // WIN LOGIC DIAGONALLY
        } else  if($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
            return true;
        } else  if($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
            return true;
        } else {
            return false;
        }
    }   
});