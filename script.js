// Assignment code here

//'@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'

//'0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

//'a', 'b','c','d','e','f','g','h','i','j','k','l','m','n', 'o','p','q', 'r','s','t','u','v','w', 'x','y','z'

//'a','b','c','d','e', 'f','g','h', 'i','j','k','l','m','n','o', 'p','q', 'r','s','t','u', 'v','w','x','y','z'

//0,1,2,3,4,5,6,7,8,9,

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const special = "!@#$%^&*()-=+_{}";
const numbers = "0123456789";

//generate password
function generatePassword() {
const passwordLength = prompt('How many characters would you like to use?');

if(passwordLength >= 8 && passwordLength <= 128){
  alert(`Your new password will be ${passwordLength} characters long.`);
 console.log(passwordLength)
} else {
  alert("Your password must be between 8 - 128 characters long")
} 




  let upper = confirm("Would you like to choose upper case letters?");
  let lower = confirm("Would you like to choose lower case letters?");
  let special = confirm("Would you like to choose special characters?");
  let numbers =confirm("Would you like to use numbers?");

  let allCharacters = '';
  let password = '';

  if(upper){
  allCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if(lower){
    allCharacters += 'abcdefghijklmnopqrstuvwxyz';
  }
  if(special){
    allCharacters += '!@#$%^&*()-=+_{}';
  }
  if(numbers){
    allCharacters += '0123456789';
  }


}

//}
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