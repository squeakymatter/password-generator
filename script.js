// Assignment code here

// When button is clicked (onclick Event), prompt for password length:
//"How many characters would you like your password to contain? 

var askPasswordLength = function() {
  prompt("How many characters would you like your passwor to contain?");
}
//If user enters number below 8 characters, or more than 128 characters, alert user to select again
//

// store user response to password length in local storage

// prompt user to  for special chracters: "Click OK to include special characters"
var askSpecialChar = function() {
  prompt("Click OK to include special characters")

  var specialCharacters = 
}

var specialChar = [~`!@#$%^&*()_-+={[}]|\:;"'<,>.?/]
//Don't include special characters if Cancel is selected
//store user response
//


//prompt user to confirm numbers: "Click OK to include numbers"
//don't include numbers if Cancel is clicked
var askNumbers = function() {
  prompt("Click OK to include numbers");


}

//prompt user to confirm uppercase characters: "Click OK to include uppercase letters"
//don't include uppercase if Cancel is Clicked

var askUpperCase = function() {
  prompt("Click OK to include uppercase letters");
}


//after all prompts are answered, generate password that matches selected criteria
//

//show password in alert written on page.






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
