var currentPlayer = 'x';

var count = 0;

function fillValue(btnId) 
{
    var button = document.getElementById(btnId);

    if (button.innerText === '') 
    {
        button.innerText = currentPlayer;
        count++;
        
        if (winner(currentPlayer, count)) {
            document.getElementById('display').innerText = 'Player ' + currentPlayer + ' wins!';
            showResetButton();
            return;
        } else if (count === 9) {
            document.getElementById('display').innerText = 'It\'s a tie!';
            showResetButton();
            return;
        }

        currentPlayer = (currentPlayer === 'x') ? 'o' : 'x';
    }
}

function winner(player, C)
{
    if(C > 4){
        if (checkRow(1, 2, 3) || checkRow(4, 5, 6) || checkRow(7, 8, 9) ||
        checkRow(1, 4, 7) || checkRow(2, 5, 8) || checkRow(3, 6, 9) ||
        checkRow(1, 5, 9) || checkRow(3, 5, 7)) 
        {
        return true;
        }
    return false;
    }
}

function checkRow(a, b, c) {
    return (getValue(a) === getValue(b) && getValue(b) === getValue(c) && getValue(a) !== '');
}

function getValue(id) {
    return document.getElementById(id).innerText;
}

function resetGame() {
    currentPlayer = 'x';
    count = 0;
    document.getElementById('display').innerText = '';
    
    for (var i = 1; i <= 9; i++) {
        document.getElementById(i).innerText = '';
    }
    hideResetButton();
}

function showResetButton() {
    var resetButton = document.getElementById('reset-btn');
    resetButton.style.display = 'block'; // Show the reset button
}

function hideResetButton() {
    var resetButton = document.getElementById('reset-btn');
    resetButton.style.display = 'none'; // Hide the reset button
}