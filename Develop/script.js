// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var letterUp = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var letterLow = ["abcdefghijklmnopqrstuvwxyz"]
var number = ["0123456789"]
var special = ["!@#$%^&*()"]
var emojis = ["😃❤️🥰😂😅😙👀🤩😎😍🥳😱"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

