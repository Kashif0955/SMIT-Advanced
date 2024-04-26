//Task 1: Check Input Type
// var input = prompt("Enter a character (number or string):");

// if (!isNaN(input)) {
//     alert("Input is a number.");
// } else if (input === input.toUpperCase()) {
//     alert("Input is an uppercase letter.");
// } else if (input === input.toLowerCase()) {
//     alert("Input is a lowercase letter.");
// } else {
//     alert("Input is neither a number nor a letter.");
// }


//Task 2: Compare Two Integers

// var num1 = parseInt(prompt("Enter first integer:"));
// var num2 = parseInt(prompt("Enter second integer:"));

// if (num1 > num2) {
//     alert(num1 + " is larger than " + num2);
// } else if (num2 > num1) {
//     alert(num2 + " is larger than " + num1);
// } else {
//     alert("Both integers are equal.");
// }


//Task 3: Check Number Sign

// var number = parseInt(prompt("Enter a number:"));

// if (number > 0) {
//     alert("Number is positive.");
// } else if (number < 0) {
//     alert("Number is negative.");
// } else {
//     alert("Number is zero.");
// }


//Task 4: Check if Character is a Vowel

// var character = prompt("Enter a character:");

// if (character.length === 1) {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//     var lowerCaseChar = character.toLowerCase();
//     if (vowels.indexOf(lowerCaseChar) !== -1) {
//         alert("Character is a vowel.");
//     } else {
//         alert("Character is not a vowel.");
//     }
// } else {
//     alert("Please enter only one character.");
// }


//Task 5: Validate Password
// var correctPassword = "password"; // Change this to your desired password
// var userPassword = prompt("Enter your password:");

// if (!userPassword) {
//     alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password.");
// } else {
//     alert("Incorrect password.");
// }


//Task 6: Fix If/Else Statement
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// console.log(greeting);


//Task 7: Convert 24-hour Time Format

var timeInput = prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm):");
var hour = parseInt(timeInput.substring(0, 2));
var period = "am";

if (hour >= 12) {
    period = "pm";
    if (hour > 12) {
        hour -= 12;
    }
}

alert("Time is: " + hour + ":" + timeInput.substring(2) + " " + period);

