var Letter = require("./letter.js");

var Word = function(word) {
  // console.log("the word is: " + word)
  this.word = [];
  this.createWord = function() {
    var wordArr = word.split("");
    for (var i = 0; i < wordArr.length; i ++){
      var letter = new Letter(wordArr[i])
      letter.letter = wordArr[i];
      this.word.push(letter)
      // letter.isCorrect("d")
      // console.log(letter)
    }
    // console.log("word Array: " + this.word)
  };
  this.checkGuess = function(character) {
    console.log("checking guess")
    console.log(this.word)
    this.word.forEach(element => {
      console.log(element)
      element.isCorrect(character)
      console.log(element.isGuessed)
    });
  };
}

var word = new Word("red")
word.createWord("red")
word.checkGuess("d");

// exporting the letter constructor
module.exports = Word;