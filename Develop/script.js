// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var letterUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var letterUpS = letterUp.split('') // creates array of individual values out of continuous string

var letterLow = 'abcdefghijklmnopqrstuvwxyz'
var letterLowS = letterLow.split('')

var number = '0123456789'
var numberS = number.split('')

var special = '!@#$%^&*()'
var specialS = special.split('')

var emoji = ["⭐️","❤️","🥰","😂","😅","😙","👀","🤩","😎","😍"];


// Write password to the #password input
function writePassword() {
  var password = []
  
  var length = prompt("Enter number between 8-128 for password length");
  if (length < 8 || length > 128) {
    alert("Please enter a number between 8-128");
    prompt("Enter number between 8-128 for password length");
  } else {
    var letterUpSTrue = confirm("Do you want to use uppercase letters?");
    var letterLowSTrue = confirm("Do you want to use lowercase letters?");
    var numberSTrue = confirm("Do you want to use numbers");
    var specialSTrue = confirm("Do you want to use special characters?");
    var emojiTrue = confirm("Do you want to use emojis?");

    if (letterUpSTrue) {password.push(letterUpS)}
    if (letterLowSTrue) {password.push(letterLowS)}
    if (numberSTrue) {password.push(numberS)}
    if (specialSTrue) {password.push(specialS)}
    if (emojiTrue) {password.push(emoji)}
    
    
    
    
    
  }



  passwordText.value = password;

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

