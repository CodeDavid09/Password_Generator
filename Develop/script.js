// Global variables
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

  // Password length must be between 8 and 128 characters, if its not user is promted with the alert.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 - 128 characters")
    return
  }

  // prompts asking what genereated password should include. ok=yes cancel=no
  confirmLower = confirm("Do you want lowercase in password?")
  confirmUpper = confirm("Do you want uppercase in password?")
  confirmNumber = confirm("Do you want use numbers in password?")
  confirmSpecial = confirm("Do you want special characters in password?")

  // if users do not select from the password criteria they will be prompted with the alert. 
  if (
    confirmLower === false &&
    confirmUpper === false &&
    confirmNumber === false &&
    confirmSpecial === false) {
    alert("Please select one character type")
    return
  }
// users selections from criteria prompt and returns what the user selected.
  userChoices = {
    length: passwordLength,
    confirmLower: confirmLower,
    confirmUpper: confirmUpper,
    confirmNumber: confirmNumber,
    confirmSpecial: confirmSpecial,
  }
  return userChoices
}

// function getRandom takes any of the given arrays and gives random index to the array.
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

  // for loop created for random to equal the getRandom of the setCharacters array and push that to the result
  for (var i = 0; i < options.length; i++) {
    var random = getRandom(setCharacters)
    result.push(random)
  }
// if i remeber correctly this is the for loop to genereate the actual password by taking all elements pushed to SetCharacters setting
// them equal to results.
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
