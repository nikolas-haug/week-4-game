// javascript and jquery for the crystals game

$(' document ').ready(function() {

    //variable for the player's scored
    playerScore = 0;
    //variable for the number to guess
    var targetNumber = 50;
    //available number value options for each crystal
    var numberOptions = [5, 10, 15, 20];

    //random number variables
    var randomNumbers = [];

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
    
    for(var i = 0; i < numberOptions.length; i++) {
        number = Math.floor(Math.random() * 20);
        randomNumbers.push(number);
        imageCrystal = $('<div>');
        imageCrystal.addClass('div-class');
        // imageCrystal.addClass(divClass[i]);
        // imageCrystal.attr('data-crystalValue', numberOptions[i]);
        imageCrystal.attr('data-crystalValue', randomNumbers[i]);
        $('#crystals').append(imageCrystal);

    }

    $('#crystals').on('click', '.div-class', function() {

        // alert('you clicked this ' + playerScore  + ' times!');
        
        var crystalValue = ($(this).attr('data-crystalValue'));
        crystalValue = parseInt(crystalValue);
        playerScore += crystalValue;
        $('#player-score').text(playerScore);
        console.log(crystalValue);

        //logic to check if targetNumber is equal to the playerScore click value
        if(playerScore === targetNumber) {
            alert('you win');
        } else if(playerScore > targetNumber) {
            alert('you lose');
        }
    });

    //make a function to check the status of the game
    function gameStatus() {

    }

});



