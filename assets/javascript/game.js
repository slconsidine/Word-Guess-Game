// Guess words to choose from
var words = ["harry", "hermione", "ron", "hogwarts", "voldemort", "dumbledore", "hagrid", "quidditch", "gryffindor", "slytherin", "hufflepuff", "ravenclaw", "polyjuice", "butterbeer", "snape", "lumos", "dementor", "wand", "broomstick", "wizard", ]; // possible word options

// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

// Set up answer array 
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
};
console.log (word.length);
console.log (answerArray);

// Prints guess word spaces to the DOM 
var div = document.getElementById("guessWord");
div.innerHTML = answerArray.join(" ");

// Win Counter
var wins = 0;
var div3 = document.getElementById("winTally");
div3.innerHTML = wins;

// Guess Remaining Counter
var guessesLeft = 12;
var div2 = document.getElementById("remainingGuess");
div2.innerHTML = guessesLeft;

// Notices user text entry and stores letters guessed
var guesses = [];
var guessed = document.getElementById("lettersGuess");

document.onkeyup = function(event) {
    var userGuess = event.key;
    var didPush = false;
    if (!guesses.includes(userGuess)) {
        guesses.push(userGuess);
        guessed.innerHTML = guesses.join(" ");
        didPush = true;
    };
    console.log(guesses.length);
    console.log(userGuess);

// Alerts loss if guesses run out
if (guessesLeft == 1) {
    div.innerHTML = word;
    alert("25 points from Gryffindor. You lose!");
}

// Fills in user guess if in word and marks down counter if it's not
if (word.includes(userGuess)) {
    for (var j = 0; j < word.length; j++) {
        if (word[j] === userGuess) {
            answerArray[j] = userGuess;
            console.log(answerArray);
        } 

        div.innerHTML = answerArray.join(" ");
    }
    if (guessesLeft > 0 && (!answerArray.includes("_"))) {
        alert("10 Points to Gryffindor! You win.");
        wins++;
        div3.innerHTML = wins;
    } 
} else {
    if (didPush) {
        guessesLeft--;
    }
}
div2.innerHTML = guessesLeft;
}



// New word button
document.getElementById("new").addEventListener("click", function(){
    word = words[Math.floor(Math.random() * words.length)];
    answerArray = [];
    guesses = [];
    guessed.innerHTML = guesses;
    console.log(word);
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    div.innerHTML = answerArray.join(" ");
    guessesLeft = 12;
    div2.innerHTML = guessesLeft;
    };
});

