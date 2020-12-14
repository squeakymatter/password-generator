// Assignment code here

//define characters allowed sets
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+";
var inputLength;
var generatedPassword = '';

function askInputLength() {
    //ask user how many characters to include in password
    inputLength = parseInt(prompt("How many characters should your password contain? Enter a number between" +
        " 8" +
        " and 128."));

}

function generatePassword() {

    var includedCharacters = '';
    askInputLength();

    //If user enters something other than a number between 8 and 128, alert user to select again

    while (8 > inputLength || inputLength > 128 || Number.isNaN(inputLength) || inputLength === "") {
            alert("Please enter a number between 8 and 128");
            askInputLength();
        }

        var includeLowerCase = confirm("Click `OK` to include or `Cancel` to exclude lowercase characters.");
        var includeUpperCase = confirm("Click `OK` to include or `Cancel` to exclude UPPERCASE characters");
        var includeNumbers = confirm("Click `OK` to include or `Cancel` to exclude numbers");
        var includeSpecialCharacters = ("Click `OK` to include or `Cancel` to exclude lowercase characters");

// append to includedCharacters if confirmed
        if (includeLowerCase) {
            includedCharacters += lowerCase;
        }
        if (includeUpperCase) {
            includedCharacters += upperCase;
        }
        if (includeNumbers) {
            includedCharacters += numbers;
        }
        if (includeSpecialCharacters) {
            includedCharacters += specialCharacters;
        }

        //generate password based on criteria set by user

        for (var i = 0; i < inputLength; i++) {
            var random = Math.floor(Math.random() * includedCharacters.length);
            generatedPassword += includedCharacters[random];
        
    }

    return (generatedPassword);

}

document.getElementById("password").innerHTML = generatedPassword

/******* FUNCTIONS PROVIDED IN ASSIGNMENT *****/


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    generatedPassword = '';

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
