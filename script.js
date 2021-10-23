// Assignment code here

//'@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'

//'0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

//'a', 'b','c','d','e','f','g','h','i','j','k','l','m','n', 'o','p','q', 'r','s','t','u','v','w', 'x','y','z'

//'a','b','c','d','e', 'f','g','h', 'i','j','k','l','m','n','o', 'p','q', 'r','s','t','u', 'v','w','x','y','z'

//0,1,2,3,4,5,6,7,8,9,

//generate password
function generatePassword() {
const totalLength = prompt('How many characters would you like to use?');
if(totalLength >= 8 && totalLength <= 128){
  alert(`Your new password will be ${totalLength} characters long.`);
}
let upper = confirm("Would you like to include upper case letters?");
let lower = confirm("Would you like to include lower case letters?");
let symbols = confirm("Would you like to include special characters?");
let numbers = confirm("Would you like to include numbers?");
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
