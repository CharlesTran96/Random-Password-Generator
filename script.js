var characters = "abcdefghijklmnopqistuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=";
var password = "";

var generate = function() {

    var userChoice = window.confirm ("Please answer the following to determine which password criteria is needed to be met");

    if (!userChoice) {
      return;
    } 

    var lengthChoice = window.prompt ("Amount of Characters Needed?")

    if (lengthChoice <= 7 || lengthChoice >= 129) {
      window.alert ("Password Length must be between 8-128 Characters")
      generate();
    }
  
    var lowercasesChoice = window.confirm ("Include Lowercases?");

    var uppercasesChoice = window.confirm ("Include Upercases?")

    var numbersChoice = window.confirm ("Include Numbers?")

    var symbolschoice = window.confirm ("Include Symbols?")

    if (lowercasesChoice === uppercasesChoice === numbersChoice === symbolschoice) {
      for (var i = 0, n = characters.length; i < lengthChoice; ++i) {
        password += characters.charAt(Math.floor(Math.random() * n));
    }}

    else if (lowercasesChoice === uppercasesChoice === numbersChoice !== symbolschoice) {
      for (var i = 0; i <= lengthChoice; i++) {
        var randomNumber = Math.floor(Math.random() * 62);
        password += characters[randomNumber];
    }}

    else if (lowercasesChoice === uppercasesChoice !== numbersChoice !== symbolschoice) {
      for (var i = 0; i <= lengthChoice; i++) {
        var randomNumber = Math.floor(Math.random() * 52);
        password += characters[randomNumber];
    }}

    console.log(password);

  }

  generate();