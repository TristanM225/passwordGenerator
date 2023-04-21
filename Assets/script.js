
function generatePassword(){

  var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

var numbers = '0123456789'.split('');

var symbols = '!@#$%^&*()_+~:;?><,./-='.split('');
// this will allow us to enter a custom amount for the password
var length = parseInt(prompt('Enter password length between 8 - 128:'));

var useLowercase = confirm('Use lowercase letters?');

var useUppercase= confirm('Use Uppercase letters?');

var useNumbers = confirm('Use numbers?');

var useSymbols = confirm('Use symbols?');
// we define the possibleChar variable as empty so when we concat is it only adds the random values we want
var possibleChars = [];
//This is saying if we say yes then it will add the lowercaseLetters to out possible character variable
if (useLowercase) {
	possibleChars = 
possibleChars.concat(lowercaseLetters);
// this one is to add our uppercase variables
}if (useUppercase) {
	possibleChars = 
possibleChars.concat(uppercaseLetters);
// this one is for the numbers
}if (useNumbers) {
	possibleChars = 
possibleChars.concat(numbers);
// this one is for the symbols
}if (useSymbols) {
	possibleChars = 
possibleChars.concat(symbols);
}
// we leave the password = to blank because that is where our randomizer will drop the code into
var password = '';
// this will will incriment i till it is equal to the length inputed
for (var i = 0; i < length; i++){
var randomIndex = Math.floor(Math.random()*possibleChars.length);
	password += possibleChars[randomIndex];
}
// this will return your password in the box because the write password function calls the generate function and writes the password
return ('your password is:' + password);
}


// //Don't touch code below


// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// https://gist.github.com/bendc/1e6af8f2d8027f2965da Alphabet and special variables
