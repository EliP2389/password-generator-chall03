
function printHello() {
    console.log('Hello world!')
}


// first: iterator initialization
// second: conditonal statement --> true or false
// third: iterator modifier --> always executes at the end of every loop
// i++ ---> i = i + 1
// example: i = 0
// i++ ---> i = 0 + 1 ---> i = 1

function myFunction () {
    for (var i = 0; i < 3; i++) {
        console.log('hi!')
     }
}


 // 1st loop
 // i = 0;
 // i < 3
 // 0 < 3 --> true
 // ---> 'Hi!'
 // i++ --> add 1 to i
 // i = 1;

// 2nd loop
// i = 1
// i < 3
// 1 < 3 ---> true
// --> 'Hi!'
// i++ ---> i = 2

// 3rd loop
// i = 2;
// 2 < 3 ---> true
// ---> 'Hi!'
// i++ ---> i = 3;

// 4th loop
// i = 3
// i < 3
// 3 < 3 ---> false
// NO MORE LOOP


// FUNCTION CALL
printHello();
myFunction()




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
    // Math.floor(5.7) ---> 5
    // Math.floor(10.312312) ---> 10

    // Math.random() ---> random number between 0 to 1
    // 0.2354234167
    // 0.97264527364527
    // 0.0

    // 0.2354234167 * 52 ---> 12.242
    // Math.floor(12.242) ---> 12
    // var randomChar = 12

    // pass += characters.substring(randomChar, randomChar + 1);
    pass += characters.charAt(randomChar)
    // characters.charAt(12)
    // ---> M
    // pass = "" + 'M'
    // pass = "M"\

    // pass = pass + "B"
    // pass = "M" + "B"
    // pass = "MB"

    // ...
  }

  // pass = "MB1jk23R"

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