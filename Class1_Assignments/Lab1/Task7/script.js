// index.js
// Name: Andrew France
// Task7 - Grade Classification

// Step 1: Function takes in a number (grade) then converts it to letter grade
const classifyGrade = (grade) =>
    // Step 2: Use a chain of ternary operators (if - elsif) to find letter grade
    (grade >= 90) ? "A" :
        (grade >= 80) ? "B" :
            (grade >= 70) ? "C" :
                (grade >= 60) ? "D" :
                    "F";

// Step 3: Get user input and store result to input variable
const input = prompt("Enter a grade (0-100):");

// Step 4: Use Number() to convert string to number
const grade = Number(input);

// Step 5: Validate that grade is actually a number
if (Number.isNaN(grade)) {
    console.log("Error: Please enter a valid number.");
} else {
    // Step 6: Call the function, pass in the number grade, output results
    const classification = classifyGrade(grade);
    console.log("The grade classification is:", classification);
}