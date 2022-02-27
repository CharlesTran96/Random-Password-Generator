var characters = "abcdefghijklmnopqistuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=";
var passwordLength = 8;
var password = "";

var generate = function() {

    var userChoice = window.confirm ("Please answer the following to determine which password criteria is needed to be met");

    if (!userChoice) {
      return;
    } 

    var lengthChoice = window.prompt ("Amount of Characters Needed?")
  
    var lowercasesChoice = window.confirm ("Include Lowercases?");

    var uppercasesChoice = window.confirm ("Include Upercases?")

    var numbersChoice = window.confirm ("Include Numbers?")

    var symbolschoice = window.confirm ("Include Symbols?")

    if (lowercasesChoice === uppercasesChoice === numbersChoice === symbolschoice) {
      for (var i = 0, n = characters.length; i < passwordLength; ++i) {
        password += characters.charAt(Math.floor(Math.random() * n));
    }
    return password;
    }

    console.log(password);

  }

  generate();