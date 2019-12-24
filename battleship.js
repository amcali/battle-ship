/*
Declare three variables to hold the location of each 
cell of the ship. 
Let's call them 'location1', 'location2', and 'location3'

Declare a variable to hold the user's current guess.
Let's call it 'guess'.

Declare a variable to hold the number of hits. 
We'll call it 'hits' and set it to 0.

Declare a variable to hold the number of guesses.
We'll call it 'guesses' and set it to 0.

Declare a variable to keep track of whether the ship is sunk or not.
Let's calle it isSunk and set it to false.

Program logic:

LOOP: while the ship is not sunk
    GET the user's guess
    COMPARE the user's input to valid input values

    IF the user's guess is invalid
        TELL user to enter a valid number

    ELSE
        ADD one to guesses

        IF the user's guess matches a location

            ADD one to the number of hits

            IF number of hits is 3
                SET isSunk to true
                TELL user 'You sank my battleship'
            END IF

        END IF
    
    END ELSE

END LOOP

TELL user stats

-- end of logic
*/

// The following variables are required  to get the program happening.
// location1, location2, location3
// guess -- this is the guess entered by the user
// guesses = number of guesses made by the user
// hits - number of hits made by the user's guess
// isSunk - whether or not the ship has sunken

var location1 = 2;
var location2 = 3;
var location3 = 4;
var guess;
var guesses = 0;
var hit = 0;
var isSunk = false;

//whilst the ship has not sunken, get the user's guess
while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a digit between 0-6):");
        if (guess < 0  || guess >6) {
            alert("Please enter a valid number");
        }
        else {
            guesses += 1;
        }

}

console.log(guesses);
