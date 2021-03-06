var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-=+_<>{}[];,./?';

//generate password
function generatePassword() {
  const passwordLength = prompt('How many characters would you like to use?');

  if (passwordLength >= 8 && passwordLength <= 128) {
    alert(`Your new password will be ${passwordLength} characters long.`);
    console.log(passwordLength)
  } else {
    alert("Your password must be between 8 - 128 characters long")

  }
  var options = {
    upper: window.confirm("Would you like to include Upper Case letters?"),
    lower: window.confirm("Would you like to include Lower Case letters?"),
    special: window.confirm("Would you like to include Special Characters?"),
    numbers: window.confirm("Would you like to include numbers?"),
  }


  if (options.upper === false && options.lower === false && options.numbers === false) {
    window.alert("No characters chosen")
  }
  var pass = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomChar = Math.floor(Math.random() * characters.length);
    pass += characters.charAt(randomChar)

  }


  return pass;

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