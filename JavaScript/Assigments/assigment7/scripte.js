// Task 1: Declare an empty array using JS literal notation to store student names in future.
var studentNamesLiteral = [];

// Task 2: Declare an empty array using JS object notation to store student names in future.
var studentNamesObject = new Array();

// Task 3: Declare and initialize a strings array.
var stringsArray = ["apple", "banana", "cherry"];

// Task 4: Declare and initialize a numbers array.
var numbersArray = [1, 2, 3, 4, 5];

// Task 5: Declare and initialize a boolean array.
var booleanArray = [true, false, true];

// Task 6: Declare and initialize a mixed array.
var mixedArray = ["apple", 1, true, "banana", 2, false];

// Task 7: Declare and Initialize an array and store available education qualifications in Pakistan
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

// Show the listed qualifications in your browser
document.write("<h1>Educational Qualifications in Pakistan</h1>");
document.write("<ul>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");
