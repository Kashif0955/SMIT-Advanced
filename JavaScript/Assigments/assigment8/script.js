// 1. Declare an empty array using JS literal notation to store student names in future.
let futureStudentNamesLiteral = [];

// 2. Declare an empty array using JS object notation to store student names in future.
let futureStudentNamesObject = new Array();

// 3. Declare and initialize a strings array.
let stringsArray = ["Hello", "World", "JavaScript"];

// 4. Declare and initialize a numbers array.
let numbersArray = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
let booleanArray = [true, false, true, true];

// 6. Declare and initialize a mixed array.
let mixedArray = ["apple", 10, true, "banana", false];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan.
let qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

console.log("Qualifications:");
qualificationsArray.forEach((qualification, index) => {
    console.log(`${index + 1}) ${qualification}`);
});

// 8. Write a program to store 3 student names in an array and their scores.
let studentNames = ["Michael", "John", "Tony"];
let studentScores = [320, 230, 480];
let totalMarks = 500;

for (let i = 0; i < studentNames.length; i++) {
    let percentage = (studentScores[i] / totalMarks) * 100;
    console.log(`Score of ${studentNames[i]} is ${studentScores[i]}. Percentage: ${percentage}%`);
}

// 9. Initialize an array with color names and perform operations as described.
let colorsArray = ["Red", "Green", "Blue"];

// a.
let colorToAddBegin = prompt("Enter a color to add to the beginning:");
colorsArray.unshift(colorToAddBegin);
console.log("Updated Array (Added to Beginning):", colorsArray);

// b.
let colorToAddEnd = prompt("Enter a color to add to the end:");
colorsArray.push(colorToAddEnd);
console.log("Updated Array (Added to End):", colorsArray);

// c.
colorsArray.unshift("Yellow", "Orange");
console.log("Updated Array (Added two more colors to the beginning):", colorsArray);

// d.
colorsArray.shift();
console.log("Updated Array (Deleted the first color):", colorsArray);

// e.
colorsArray.pop();
console.log("Updated Array (Deleted the last color):", colorsArray);

// f.
let indexToAdd = prompt("Enter the index to add a color:");
let colorNameToAdd = prompt("Enter the color name to add:");
colorsArray.splice(indexToAdd, 0, colorNameToAdd);
console.log("Updated Array (Added color at specified index):", colorsArray);

// g.
let indexToDelete = prompt("Enter the index to delete color(s):");
let numToDelete = prompt("Enter the number of colors to delete:");
colorsArray.splice(indexToDelete, numToDelete);
console.log("Updated Array (Deleted colors at specified index):", colorsArray);

// 10. Write a program to store student scores in an array & sort the array in ascending order.
let studentScoresToSort = [320, 230, 480, 120];
studentScoresToSort.sort((a, b) => a - b);
console.log("Ordered Scores of Students:", studentScoresToSort);

// 11. Write a program to initialize an array with city names and copy 3 array elements to another array.
let citiesArray = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCitiesArray = citiesArray.slice(2, 4);
console.log("Selected cities list:", selectedCitiesArray);

// 12. Write a program to create a single string from the given array.
let arr = ["This ", " is ", " my ", " cat"];
let singleString = arr.join("");
console.log("String:", singleString);

// 13. Create a new array to implement FIFO.
let fifoArray = [];

fifoArray.push("Value1");
fifoArray.push("Value2");
fifoArray.push("Value3");

console.log("FIFO Array (After Pushing Values):", fifoArray);

let firstValue = fifoArray.shift();
console.log("First Value (FIFO):", firstValue);
console.log("FIFO Array (After Removing First Value):", fifoArray);
