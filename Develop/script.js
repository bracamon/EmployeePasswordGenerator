// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var letterUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var letterUpS = letterUp.split('') // creates array of individual values out of continuous string

var letterLow = 'abcdefghijklmnopqrstuvwxyz'
var letterLowS = letterLow.split('')

var number = '0123456789'
var numberS = number.split('')
console.log(numberS)

var special = '!@#$%^&*()'
var specialS = special.split('')

var emoji = '😃❤️🥰😂😅😙👀🤩😎😍'
var emojiS = emoji.split('')



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  



  passwordText.value = password;

}

var length = prompt("Enter number between 8-128 for password length");
if (length < 8 || length > 128) {
  alert("Please enter a number between 8-128");
  prompt("Enter number between 8-128 for password length");
} else {
  var letterUpSTrue = confirm("Do you want to use uppercase letters?");
  var letterLowSTrue = confirm("Do you want to use lowercase letters?");
  var numberSTrue = confirm("Do you want to use numbers");
  var specialSTrue = confirm("Do you want to use special characters?");
  var emojiSTrue = confirm("Do you want to use emojis?");


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

