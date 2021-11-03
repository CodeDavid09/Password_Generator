// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = lowercase.join(",").toUpperCase().split();
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// checking if true or false, adding to the possiblecharacters based on user response
function generatePassword() {
  var options = getPwOptions()
  var result = []
  var possiblecharacters = []
  var setCharacters = []
// did the person hit okay or cancel 
  if (options.confirmSpecial) {
    possiblecharacters = possiblecharacters.concat(special)
    setCharacters.push(getRandom(special))
  }

  if (options.confirmNumber) {
    possiblecharacters = possiblecharacters.concat(number)
    setCharacters.push(getRandom(number))
  }

  if (options.confirmLower) {
    possiblecharacters = possiblecharacters.concat(lowercase)
    setCharacters.push(getRandom(lowercase))
  }

  if (options.confirmUpper) {
    possiblecharacters = possiblecharacters.concat(uppercase)
    setCharacters.push(getRandom(uppercase))
  }

  for (var i = 0; i< setCharacters.length; i++) {
    result[i] = setCharacters[i] 
  }
  return result.join("")  
}

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomElements = arr[randomIndex]

  return randomElements
}


function getPwOptions() {
  passwordLength = parseInt(prompt("How many characters do you want your password to be?"))

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 - 128 characters")
    return
  }

  confirmLower = confirm("Do you want lowercase in password?")
  confirmUpper = confirm("Do you want uppercase in password?")
  confirmNumber = confirm("Do you want use numbers in password?")
  confirmSpecial = confirm("Do you want special characters in password?")

  if (
    confirmLower === false &&
    confirmUpper === false &&
    confirmNumber === false &&
    confirmSpecial === false
  ) {
    alert("Please select one character type")
    return
  }

  userChoices = {
    length: passwordLength,
    confirmLower: confirmLower,
    confirmUpper: confirmUpper,
    confirmNumber: confirmNumber,
    confirmSpecial: confirmSpecial,
  }
  return userChoices
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
