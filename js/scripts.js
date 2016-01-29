function Hangman(words, gameWord, blanksArray, wrong, wrongAnswerCount) {
  this.words = ["cat", "harse", "pag"];
  this.gameWord = "";
  this.blanksArray = [];
  this.wrong = [];
  this.wrongAnswerCount = 0;
}

Hangman.prototype.randomWord = function() {
  var randomWordChoice = this.words[Math.floor(Math.random() * this.words.length)];
  return this.gameWord = randomWordChoice.split("");
}

Hangman.prototype.replaceWithBlanks = function() {
  for(var i=0; i < this.gameWord.length; i++){
      this.blanksArray.push("-");
  }
  return this.blanksArray;
}

Hangman.prototype.replaceWithLetters = function(userGuess) {
  for (var i = 0; i < this.gameWord.length; i++) {
      if (this.gameWord[i] === userGuess) {
        this.blanksArray[i] = userGuess;
        return this.blanksArray.join("");
      }
    }
}

Hangman.prototype.wrongGuess = function(userGuess) {
  this.gameWord.join("");
  for (var i = 0; i < this.gameWord.length; i++) {
    if (this.gameWord.indexOf(userGuess) === -1) {
      this.wrong.push(userGuess);
      return this.wrong;
    }
  }
}

Hangman.prototype.increaseWrongAnswerCount = function () {
  for(var i = 0; i < 7; i++){
    this.wrongAnswerCount++;
  }
  return this.wrongAnswerCount;
}


$(document).ready(function() {

  var myHangman = new Hangman();
  myHangman.randomWord();
  $("#hangmanResult").append(myHangman.replaceWithBlanks());

  $("form#hangmanForm").submit(function(event) {

        var letterGuess = $("input#userInput").val();
        $("#hangmanResult").text (myHangman.replaceWithLetters(letterGuess));
        $("#wrongGuess").text(myHangman.wrongGuess(letterGuess));
    event.preventDefault();
    var bodyPart = myHangman.increaseWrongAnswerCount().toString();
    $("input#userInput").val("");
  $("#drawing").append("<img src='img/img_"+bodyPart+".png'>")

  });
});
