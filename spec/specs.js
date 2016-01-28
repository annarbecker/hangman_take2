describe('Hangman', function() {
  it("will create a new game of hangman", function () {
    var testHangman = new Hangman();
    expect(testHangman.words).to.eql(["cat", "harse", "pag"]);
    expect(testHangman.gameWord).to.equal("");
    expect(testHangman.blanksArray).to.eql([]);
  });

  it("selects a random word from an array", function() {
    var testHangman = new Hangman();
    expect(testHangman.randomWord()).to.be.a("array");
  });

  it("replaces the letters in the word with one blank for each letter", function() {
    var testHangman = new Hangman();
    testHangman.randomWord();
    expect(testHangman.replaceWithBlanks()).to.eql(["-", "-", "-"]);
  });

  it("replaces the blanks when the user correcly enters a letter", function() {
    var testHangman = new Hangman();
    testHangman.gameWord = "cat";
    testHangman.userGuess = "a";
    testHangman.blanksArray = ["-", "-", "-"];
    expect(testHangman.replaceWithLetters("a")).to.equal("-a-");
  });
});
