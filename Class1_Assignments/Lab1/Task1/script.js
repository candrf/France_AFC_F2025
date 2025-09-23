// script.js
// Name: Andrew France
// Lab1 - Dynamic Age Calculator

// Step 1: Make a function called calculate age that has a parameter called year, returns age
function calculateAge(year) {
    // Step 2: Get the current year at the time of use from Date function, stored as number
    const currentYear = new Date().getFullYear();

    // Step 3: Returns age by subtracting birth year from current year
    return currentYear - year;
}

// Step 4: Ask user their age and store it to the input variable
const input = prompt("Enter your birth year (e.g., 2004):");

// Step 5: Turn the input into a number and store it in another variable
const birthYear = Number(input);

// Step 6: Input validation step, check that either birth year is number or input has a value
if (input === null || Number.isNaN(birthYear)) {
    // Step 7: Print out error message to console if input is bad
    console.log("No valid year provided.");
} else {
    // Step 8: if input is good, calculate the age and store it in age variable
    const age = calculateAge(birthYear);

    // Step 9: print out the calculated age to the console
    console.log("Your age is:", age);
}