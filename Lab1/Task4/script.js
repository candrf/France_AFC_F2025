// script.js
// Name: Andrew France
// Task4 - Event Countdown with Date Object

// Step 1: Function that calculates days until an event,
// takes date of event as parameter
function calculateDaysUntil(eventDate) {
    // Step 2: Date type variable equals today's date
    const today = new Date();

    // Step 3: Convert user input to Date type variable
    const event = new Date(eventDate);

    // Step 4: Get the difference between event and today
    const diff = event - today;

    // Step 5: Convert previous variable to the amount of days
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    // Step 6: Function returns the difference of days
    return days;
}

// Step 7: Get user input from prompt
let eventDate = prompt("Enter event date (YYYY-MM-DD):");

// Step 8: Ensure correct date format, loop until good input
const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

while (!dateFormat.test(eventDate)) {
    eventDate = prompt("Invalid format. Please enter date as YYYY-MM-DD:");
}

// Step 9: Call function to calculate days and store in variable
const daysRemaining = calculateDaysUntil(eventDate);

// Step 10: Display the results to the console
console.log("Days until the event:", daysRemaining);