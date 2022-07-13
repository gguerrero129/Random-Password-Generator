// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
let choiceSelected = '';
let charAmount = prompt('Choose between 8 and 128 charaters for your password')

if (!(charAmount >= 8 && charAmount <= 128)) {
  alert('Please select the correct amount of characters')
  return;
}

var uppercase = confirm('Do you want to include uppercase letters?')
var lowercase = confirm('Do you want to include lowercase letters?')
var special = confirm('Do you want to include special characters?')
var numbers = confirm('Do you want to include numbers?')

uppercaseLet = ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
lowercaseLet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
specialChar = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','`','~']
numb = ['1','2','3','4','5','6','7','8','9','0']

if (uppercase) {
  choiceSelected = choiceSelected.concat(uppercaseLet)
}
if (lowercase) {
  choiceSelected = choiceSelected.concat(lowercaseLet)
}
if (special) {
  choiceSelected = choiceSelected.concat(specialChar)
}
if (numbers) {
  choiceSelected = choiceSelected.concat(numb)
}


let password = '';

for (let i = 0; i < charAmount; i++) {
  var index = Math.floor(Math.random() * choiceSelected.length);
  password = password + choiceSelected[index];

  return password;
}
}