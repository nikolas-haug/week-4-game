// javascript and jquery for the crystals game

$(' document ').ready(function() {

    //variable for the player's scored
    playerScore = 0;
    //variable for the number to guess
    var targetNumber = 50;
    //random number variables
    var randomNumbers = [];
    //game status variable
    var gameOver = false;

    //array of different div classes for the crystals
    var divClass = [
        'div-class1',
        'div-class2',
        'div-class3',
        'div-class4'
    ];

    $('#number-to-guess').text(targetNumber);
    // $('#player-score').text(playerScore);

    //make a function to start the game
    function startGame() {
        playerScore = 0;
        if(!gameOver) {
            for(var i = 0; i < 4; i++) {
                number = Math.floor(Math.random() * 15);
                randomNumbers.push(number);
                imageCrystal = $('<div>');
                imageCrystal.addClass('div-class');
                // imageCrystal.addClass(divClass[i]);
                // imageCrystal.attr('data-crystalValue', numberOptions[i]);
                imageCrystal.attr('data-crystalValue', randomNumbers[i]);
                $('#crystals').append(imageCrystal);
            }
        } 
    }

 
    //event listener for crystal clicks
    
    $('#crystals').on('click', '.div-class', function() {
        if(gameOver === false) {
            var crystalValue = ($(this).attr('data-crystalValue'));
            crystalValue = parseInt(crystalValue);
            playerScore += crystalValue;
            $('#player-score').text(playerScore);
            //log the click results
            console.log(crystalValue);
            //logic to check if targetNumber is equal to the playerScore click value
                if(playerScore === targetNumber) {
                    alert('you win');
                    gameOver = true;
                    gameFinished();
                } else if(playerScore > targetNumber) {
                    gameFinished();
                    alert('you lose');
                    gameOver = true;
                }
        }
        

        
    });

    //make a function to check the status of the game
    function gameFinished() {
        document.onkeyup = function(event) {
            var userKey = event.key;
            if(gameOver && userKey === "Enter") {
                playerScore = 0;
                randomNumbers = [];
                $("#player-score").text("");
                $("#crystals").text("");
                gameOver = false;
                startGame();
            }
        }
    }

    //call function to start the game
    startGame();

});



