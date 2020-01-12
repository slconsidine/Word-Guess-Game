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

// Notices user text entry
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);

    for (var j = 0; j < word.length; j++) {
        if (word[j] === userGuess) {
            answerArray[j] = userGuess;
            console.log(answerArray);

        }
        div.innerHTML = answerArray.join(" ");
    }
}
