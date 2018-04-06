// javascript and jquery for the crystals game

$(' document ').ready(function() {

    //variable for the player's scored
    playerScore = 0;
    //random numbers for crystals array variable
    var randomNumbers = [];
    //game status variable
    var gameOver = false;

    //array of different crystal images
    var crystalImgs = [
        "images/red-jewel.png",
        "images/deepblue-jewel.png",
        "images/crystal-verde.png",
        "images/purple-jewel.png",
    ]

    //array of different div classes for the crystals (*previous version)
    // var divClass = [
    //     'div-class1',
    //     'div-class2',
    //     'div-class3',
    //     'div-class4'
    // ];

    //make a function to start the game
    function startGame() {
        playerScore = 0;
        $('#player-score').text(playerScore);
        targetNumber = Math.floor((Math.random() * 101) + 20);
        $('#number-to-guess').text(targetNumber);
        if(!gameOver) {
            for(var i = 0; i < crystalImgs.length; i++) {
                //generate random crystal values and add to randomNumber array
                number = Math.floor((Math.random() * 12) + 1);
                console.log(number);
                randomNumbers.push(number);
                //add the crystal images to the page
                var imageCrystal = $("<img>");
                imageCrystal.addClass("crystal-image");
                imageCrystal.attr("src", crystalImgs[i]);

                //*previous version
                // imageCrystal = $('<div>');
                // imageCrystal.addClass('div-class');
                // imageCrystal.addClass(divClass[i]);
                // imageCrystal.attr('data-crystalValue', numberOptions[i]);

                imageCrystal.attr('data-crystalValue', randomNumbers[i]);
                $('#crystals').append(imageCrystal);
            }
        } 
    }

    //event listener for crystal clicks
    $('#crystals').on('click', '.crystal-image', function() {
        if(gameOver === false) {
            var crystalValue = ($(this).attr('data-crystalValue'));
            crystalValue = parseInt(crystalValue);
            playerScore += crystalValue;
            $('#player-score').text(playerScore);
            //log the click results
            console.log(crystalValue);
            //logic to check if targetNumber is equal to the playerScore click value
            // TO DO make separate function for score check
                if(playerScore === targetNumber) {
                    gameOver = true;
                    $("#game-status").text("You win!");
                    $("#press-enter").text("Press enter to start a new game");
                    gameFinished();
                } else if(playerScore > targetNumber) {
                    gameFinished();
                    $("#game-status").text("You lose");
                    $("#press-enter").text("Press enter to start a new game");
                    gameOver = true;
                }
        }
    });

    //make a function to pause the game before player restarts
    function gameFinished() {
        document.onkeyup = function(event) {
            var userKey = event.key;
            if(gameOver && userKey === "Enter") {
                //reset the variable values
                playerScore = 0;
                randomNumbers = [];
                $("#player-score, #crystals, #game-status, #press-enter").text("");
                gameOver = false;
                startGame();
            }
        }
    }

    //call function to start the game
    startGame();

});



