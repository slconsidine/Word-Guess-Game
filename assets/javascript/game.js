var words = ["Harry", "Hermione", "Ron", "Hogwarts", "Voldemort", "Dumbledore", "Hagrid", "Quidditch"]; // possible word options

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

var div = document.getElementById("guessWord");
div.innerHTML = answerArray.join(" ");

// document.getElementById('guessWord').textContent = answerArray;

// // Game loop
// while (remainingLetters > 0) {
//     // shows progress
//     alert(answerArray.join(" "));

//     // get player's guess
//     var guess = prompt("Guess a letter");
//     if (guess === null) {
//         break;
//     } else {
//         for (var j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//             }
//         }
//     }
// }

// alert(answerArray.join(" "));


// var winCounter = 0;
// document.getElementById("winTally").innerHTML = wins;
