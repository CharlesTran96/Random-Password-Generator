var characters = [];
// var password = "";

var generate = function() {

    var userChoice = window.confirm ("Please answer the following to determine which password criteria is needed to be met");

    if (!userChoice) {
      return;
    }; 

    var lengthChoice = window.prompt ("Amount of Characters Needed?");

    if (lengthChoice <= 7 || lengthChoice >= 129) {
      window.alert ("Password Length must be between 8-128 Characters");
      var lengthChoice = window.prompt ("Amount of Characters Needed?");
    }

    var lowercasesChoice = window.confirm ("Include Lowercases?");

    if (lowercasesChoice === true) {
      characters.push ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    }

    console.log(characters);

    var uppercasesChoice = window.confirm ("Include Upercases?")

    if (uppercasesChoice === true) {
      characters.push ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    }

    console.log(characters);

    var numbersChoice = window.confirm ("Include Numbers?");

    if (numbersChoice === true) {
      characters.push ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    }

    console.log(characters);

    var symbolsChoice = window.confirm ("Include Symbols?");

    if (symbolsChoice === true) {
      characters.push ("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+");
    }

    console.log(characters);

    // for (var i = 0; i = lengthChoice; i++) {
      var index = Math.floor(Math.random() * characters.length);
      var password = characters[index] * lengthChoice;
    // }

    console.log(password);

  }

  generate();