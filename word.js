// import the word bank
var wordBank = require ("./wordbank.js");
// import the letters.js

// console.log(wordBank);

var Newword = function() {
    // pick a random word
    this.random = wordBank[Math.floor(Math.random() * wordBank.length)];
    //split into letters
    this.lettersofWord = this.random.split("");
    // display word with underscores at first
}
