// index.js
// Name: Andrew France
// Lab2 - Simple Interest Calculator

// Step 1: Function to calculate interest, takes in principal, rate, and time
function calculateSimpleInterest(principal, rate, time) {
    // Do the calculation and return the simple interest
    return (principal * rate * time) / 100;
}

// Step 2: Get the principal from user input and store it in variable as a number
const principal = Number(prompt("Enter the principal amount:"));

// Step 3: Get the interest from user input and store it in a variable as a number
const rate = Number(prompt("Enter the rate of interest:"));

// Step 4: Get the years from user input and store it in a variable as a number
const time = Number(prompt("Enter the time in years:"));

// Step 5: Calculate the interest with user defined variables and store results in intererst variable
const interest = calculateSimpleInterest(principal, rate, time);

// Step 6: Print the results to the console
console.log("Your simple interest is:", interest);