//var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//var numbers = '0123456789';
//var symbols = "!@#$%^&*_-+=?";




// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var promptLength = window.prompt("How long do you want your password to be? Password must be between 8 and 20 chartacters.")
  
  var promptCharacters = window.prompt("What type of characters would you like to choose?")


  
  
 

  var password = "generatePassword"


  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
