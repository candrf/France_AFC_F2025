// index.js
// Name: Andrew France
// Task10 - How Long Until Graduation

// Step 1: Function returns current date/time using Date object
const getToday = () => {
    return new Date();
};

// Step 2: Call function to get date/time and store it in variable
const today = getToday();

// Step 3: Initialize array of strings for days of the week
// use today.getDay to get a numeric value that is used to index
// the days array. Store result to weekday variable
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekday = days[today.getDay()];

// Step 4: Similar to step 3, initialize array of strings for months
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// use getFullYear() to store year as numeric value in variable,
// use getMonth() to get a numeric value of the month to then index months array
// use getDate() to store day as numeric value in variable
const year = today.getFullYear();
const month = months[today.getMonth()];
const day = today.getDate();

// Step 5: Function returns suffix for day. Except for special cases 11th, 12th, 13th,
// uses mod 10 to apply suffix to day ending in 1, 2, or 3, default for any other ending
// So, 21 -> 21 % 10 -> 1 -> case:1 -> return "st"
const getSuffix = (n) => {
    if ([11, 12, 13].includes(n % 100)) return "th";
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};

// Uses year, month, day, and suffix to store formatted date as string
const formattedDate = year + ", " + month +  " " + day + getSuffix(day);

// Step 6: Print out the day of the week and the formatted date to console
console.log("Today is:", weekday);
console.log("Formatted date:", formattedDate);

// Step 7: Set the graduation date to a hard-coded value using Date object
const graduationDate = new Date("2025-11-13");
// Get the difference between grad date and today (stored in milliseconds)
// then convert milliseconds to number of days
const diff = graduationDate - today;
const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));

// Step 8: Print message to the console that tells how many days til graduation
console.log("And you have " + daysRemaining + " days left in this web design program until graduation.");