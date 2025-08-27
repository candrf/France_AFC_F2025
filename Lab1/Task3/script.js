// script.js
// Name: Andrew France
// Task3 - Favorite Color Selector

// Step 1: Initialize array of colors
let colors = ["red", "blue", "green"];

// Step 2: Create function to add colors, color array as parameter
function addColor(colorArray) {
    // Step 3: Get user input for a new color through prompt
    const newColor = prompt("Enter a color to add:");

    // Step 4: Add new color to start of the array
    colorArray.unshift(newColor);

    // Step 5: Display the updated array
    console.log("Updated colors:", colorArray);
}

// Step 6: Call the function with hard-coded colors array
addColor(colors);