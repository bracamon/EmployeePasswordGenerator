// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var letterUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var letterUpS = letterUp.split('') // creates array of objects out of string

var letterLow = 'abcdefghijklmnopqrstuvwxyz'
var letterLowS = letterLow.split('')

var number = '0123456789'
var numberS = number.split('')

var special = '!@#$%^&*()'
var specialS = special.split('')

var emoji = '😃❤️🥰😂😅😙👀🤩😎😍'
var emojiS = emoji.split('')



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

