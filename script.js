// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCaseCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCaseCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let length = parseInt(
    prompt("How long would you like your password? Enter the number of characters...")
  )

    if(isNaN(length) === true) { //If the user enters a value that is not a number
      alert('Password length must be a number, please enter a number over 10');
      return;
    }

    if(length < 10) { //If a value less than 10 characters is entered
      alert('Password length must be 10 characters or more.');
      return;
    }

    if(length > 64) { //If a value over 64 characters is entered
      alert('Password must be below 64 characters in length.');
      return;
    }
    //Prompts for selecting the different types of characters:
  let containsSpecial = confirm( 
    'Click OK to confirm including special characters in your password.'
  )

  let containsNumeric = confirm(
    'Click OK to confirm including numbers in your password.'
  )

  let containsLower = confirm(
    'Click OK to confirm including lower case letters in your password.'
  )

  let containsUpper = confirm(
    "Click OK to confirm including Upper case letters in your password"
  )
    //Creating an alert for the scenario in which the user does not select a character type
  if(containsLower === false &&
  containsUpper === false &&
  containsSpecial === false &&
  containsNumeric === false) {
  alert('At least one character type needs to be selected to generate a password.');
  return;
  }


//Defining the object passwordOptions to contain the selected character types and defined length
let passwordOptions = {
  length: length,
  containsUpper: containsUpper,
  containsLower: containsLower,
  containsSpecial: containsSpecial,
  containsNumeric: containsNumeric

}

return passwordOptions;
}


// Function for getting a random element from an array
function getRandom(arr) {
let randomIndex = Math.floor(Math.random() * arr.length);
let randomElement = arr[randomIndex];
return randomElement;
}
  
// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  console.log(options);
  let result = [];

  let possibleCharacter = [];

  let guaranteedCharacter = [];

  console.log(possibleCharacter);
  console.log(guaranteedCharacter);


  //Concat is used in this section to combine two arrays
  if(options["containsSpecial"]) {
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters))
  }
  
  if(options["containsLower"]) {
    possibleCharacter = possibleCharacter.concat(lowerCaseCharacters);
    guaranteedCharacter.push(getRandom(lowerCaseCharacters))
  }

  if(options.containsUpper) {
    possibleCharacter = possibleCharacter.concat(upperCaseCharacters);
    guaranteedCharacter.push(getRandom(upperCaseCharacters))
  }

  if(options.containsNumeric) {
    possibleCharacter = possibleCharacter.concat(numericCharacters);
    guaranteedCharacter.push(getRandom(numericCharacters))
  }
  console.log(possibleCharacter);
  console.log(guaranteedCharacter);

// A Loop was created to combine the selected array items and push them together (randomized) to form the generated password
  for(let index = 0; index < options.length; index++){
    var generate = getRandom(possibleCharacter);
    console.log(generate);
    result.push(generate);
  }
//Logging results
    console.log(result);
    return result.join("");
  

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);




//Unrelated to above code - My first attempt at the challenge using a different method
/*
//Four sections of character generators

//Gets a random special character
function getRandomSpecialCharacter() {
return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}
console.log(getRandomSpecialCharacter());

//Gets a random lower-case character
function getRandomLowerCase() {
  return lowerCaseCharacters[Math.floor(Math.random() * lowerCaseCharacters.length)];
}
console.log(getRandomLowerCase());


//gets a random upper-case character
function getRandomUpperCase() {
  return upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)];
}
console.log(getRandomUpperCase());

//gets random number
function getRandomNumber() {
  return numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
}
console.log(getRandomNumber());
*/