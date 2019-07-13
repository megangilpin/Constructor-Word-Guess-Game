// constructor function for creating to either display an underlying character or a blank placeholder

var Letter = function(character) {
  this.letter = "";
  this.isGuessed = false;
  this.toString = function () {
    if (this.isGuessed === false){
      var letter = "_"
      // console.log(letter)
      return letter;
    }
    else{
      // console.log(this.letter)
      return this.letter
    }
  };
  this.isCorrect = function (character) {
    console.log("character: " + character)
    if (this.letter === character){
      this.isGuessed = true;
    }
    // console.log(this.isGuessed)
    // else {
    //   console.log("Guess again")
    // }
  };
}

// var letter = new Letter("e")

// letter.isCorrect("e")
// letter.toString()
// exporting the letter constructor
module.exports = Letter;