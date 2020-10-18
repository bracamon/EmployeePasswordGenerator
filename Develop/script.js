var letterUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var letterUpS = letterUp.split('')

var letterLow = 'abcdefghijklmnopqrstuvwxyz'
var letterLowS = letterLow.split('')

var number = [0,1,2,3,4,5,6,7,8,9]

var special = '!@#$%^&*()'
var specialS = special.split('')

var emoji = ["⭐️","❤️","🥰","😂","😅","😙","👀","🤩","😎","😍","🍉","🍇","🍎","🍑","🥑","🍕","🥞","🧀","🥭"];

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function writePassword() {
  var possibles = []
  
  var length = parseInt(prompt("Enter number between 8-128 for password length"));

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a number between 8-128");
  } else {

    var letterUpSTrue = confirm("Click 'OK' to include uppercase letters?");
    var letterLowSTrue = confirm("Click 'OK' to include lowercase letters?");
    var numberTrue = confirm("Click 'OK' to include numbers");
    var specialSTrue = confirm("Click 'OK' to include special characters?");
    var emojiTrue = confirm("Click 'OK' to include emojis?");

    if (letterUpSTrue) {possibles.push(letterUpS)};
    if (letterLowSTrue) {possibles.push(letterLowS)};
    if (numberTrue) {possibles.push(number)};
    if (specialSTrue) {possibles.push(specialS)};
    if (emojiTrue) {possibles.push(emoji)};
    
    var password = "";

    while(password.length < length) {
      for(let i = 0; i < possibles.length; i++){
        if(password.length < length){
          let rand = Math.floor(Math.random() * possibles[i].length);
          password += possibles[i][rand];
        }
      }
    }
    console.log(password, `password length: ${password.length}`);
    passwordText.value = password;
  }
}

generateBtn.addEventListener("click", writePassword);

