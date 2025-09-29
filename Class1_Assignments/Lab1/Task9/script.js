// index.js
// Name: Andrew France
// Task9 - Weekday Detector

// Step 1: Function returns the current day of the week based on current date/time
const getWeekday = () => {
    // Step 2: Use built-in date object to store current date/time to variable
    const today = new Date();

    // Step 3: Get the day number from Date method
    // e.g. (0 = Sunday, 1 = Monday, ...)
    const dayNumber = today.getDay();

    // Step 4: Initialize array of strings with the days of the week
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Step 5: Return current day by using the day number (0-6) to index
    // the days array e.g. days[0] = "Sunday"
    return days[dayNumber];
};

// Step 6: Call function and print results to console
console.log("Today is:", getWeekday());