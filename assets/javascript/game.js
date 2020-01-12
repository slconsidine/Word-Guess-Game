// Guess words to choose from
var words = ["harry", "hermione", "ron", "hogwarts", "voldemort", "dumbledore", "hagrid", "quidditch"]; // possible word options

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

// Guess Remaining Counter
var guessesLeft = 12;
var div2 = document.getElementById("remainingGuess");
div2.innerHTML = guessesLeft;

// Notices user text entry
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);

// Alerts loss if guesses run out
if (guessesLeft === 1) {
    div.innerHTML = word;
    alert("You lost");
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
} else {
    guessesLeft--;
}
div2.innerHTML = guessesLeft;
}

// User guesses word
if (!answerArray.includes("_")) {
    alert("You win");
} 

// New word button
document.getElementById("new").addEventListener("click", function(){
    word = words[Math.floor(Math.random() * words.length)];
    answerArray = [];
    console.log(word);
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    div.innerHTML = answerArray.join(" ");
    guessesLeft = 12;
    div2.innerHTML = guessesLeft;
    };
});

