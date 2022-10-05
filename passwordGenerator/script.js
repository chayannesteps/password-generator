// Assignment code here
function generatePassword() {
  var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz' 
  var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
  var numbers = '1234567890' 
  var specialChar = '!@#$%^&*()' 

  var length = prompt('How long?')
  var hasLower = confirm ('lower?')
  var hasUpper = confirm ('upper?')
  var hasNumber = confirm ('number?')
  var hasSpecialChar = confirm ('special char?')

  var charOptions = ""

  if(
    hasLower
  ){
    charOptions += lowercaseLetters
  }
  if(
    hasUpper
  ){
    charOptions += uppercaseLetters
  }
  if(
    hasNumber
  ){
    charOptions += numbers
  }
  if(
    hasSpecialChar
  ){
    charOptions += specialChar
  }

  var generatedPassword = ""
for (let i = 0; i < length; i++) {
  generatedPassword += charOptions.charAt(Math.floor(Math.random()*charOptions.length))
}
return generatedPassword
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
