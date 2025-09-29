// index.js
// Name: Andrew France
// Task3 - Favorite Color Selector

// Step 1: Initialize array of colors as strings
let colors = ["red", "blue", "green"];

// Step 2: Create function to add colors to the array, color array as parameter
function addColor(colorArray) {
    // Step 3: Get user input for a new color through prompt, store result as string
    const newColor = prompt("Enter a color to add:");

    // Step 4: Add new color to start of the array using unshift
    colorArray.unshift(newColor);

    // Step 5: Display the updated array to console
    console.log("Updated colors:", colorArray);
}

// Step 6: Call the function and pass hard-coded array of colors
addColor(colors);