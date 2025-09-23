// script.js
// Name: Andrew France
// Task6 - Student Array Operations

// Step 1: Create multiple student objects and initialize their name/age, store in array of objects
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 18 }
];

// Step 2: Function finds student by name and takes user input to update age,
// has array as parameter
const updateStudentAge = (array) => {
    // Step 3: Get student name through prompt, assign to variable
    let studentName = prompt("Enter the student's name to update:");

    // Step 4: Check if student name exists in array, use toLowerCase so user input
    // does not need to be case-sensitive
    let student = array.find(s => s.name.toLowerCase() === studentName.toLowerCase());

    // Step 5: If not found, print error message to console and return
    if (!student) {
        console.log("Error: Student not found.");
        return;
    }

    // Step 6: Prompt user for new age, convert to number, store in variable
    let newAge = Number(prompt("Enter the new age:"));

    // Step 7: If user didn't input a number, print error message and return
    if (Number.isNaN(newAge)) {
        console.log("Error: Age must be a number.");
        return;
    }

    // Step 8: Set object's age to the new age entered by the user
    student.age = newAge;

    // Step 9: Print elements of the array to console
    console.log("Updated students:", array);
};

// Step 10: Call the function to update student age, pass in the students array of objects
updateStudentAge(students);