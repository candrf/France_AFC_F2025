// script.js
// Name: Andrew France
// Task5 - Temperature Classifier

// Step 1: Function that converts Celsius to Fahrenheit, has celcius as parameter
function classifyTemperature(celsius) {
    // Step 2: Takes C and converts to F, store result in new variable
    const fahrenheit = (celsius * (9 / 5)) + 32;

    // Step 3: Classifies feeling by temp number using chained if else if statements
    if (fahrenheit > 100) {
        return "Hot";
    } else if (fahrenheit > 80) {
        return "Warm";
    } else if (fahrenheit < 40) {
        return "Cold";
    } else {
        return "Chilly";
    }
}

// Step 4: Get user input and store as string
const input = prompt("Enter temperature in Celsius:");

// Step 5: Converts user input to number
const celsius = Number(input);

// Step 6: Input validation using isNaN to ensure user entered number
if (Number.isNaN(celsius)) {
    console.log("Error: Please enter a valid number.");
} else {
    // Step 7: Call function to classify temp, pass user input as argument, store result to string
    const classification = classifyTemperature(celsius);

    // Step 8: Output results to console
    console.log("The temperature is:", classification);
}