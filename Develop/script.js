// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%"]

// Write password to the #password input
function getPwOptions() {
  let passwordLength = parseInt(prompt("How many characters do you want your password to be?"), 10)

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
    confirmSpecial === false) 
    {
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

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomElements = arr[randomIndex]
  
  return randomElements
}

// checking if true or false, adding to the possiblecharacters based on user response
function generatePassword() {
  var options = getPwOptions()
  var result = []
  var possibleCharacters = []
  var setCharacters = []
 
  
  
  // did the person hit okay or cancel 
  if (options.confirmSpecial) {
    possibleCharacters = possibleCharacters.concat(special)
    setCharacters.push(getRandom(special))
  }
  
  if (options.confirmNumber) {
    possibleCharacters = possibleCharacters.concat(number)
    setCharacters.push(getRandom(number))
  }
  
  if (options.confirmLower) {
    possibleCharacters = possibleCharacters.concat(lowercase)
    setCharacters.push(getRandom(lowercase))
  }
  
  if (options.confirmUpper) {
    possibleCharacters = possibleCharacters.concat(uppercase)
    setCharacters.push(getRandom(uppercase))
  }
  
  for (var i = 0; i < options.length; i++) {
    var random = getRandom(setCharacters)
    result.push(random)
  }
  
  for (var i = 0; i < setCharacters.length; ++i) {
    result[i] = setCharacters[i]
  }
  return result.join("")
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
