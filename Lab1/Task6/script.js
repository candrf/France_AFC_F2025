// script.js
// Name: Andrew France
// Task6 - Student Array Operations

// Step 1: Create multiple student objects with name/age
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 18 }
];

// Step 2: Function finds student by name and takes user input to update age
const updateStudentAge = (array) => {
    // Step 3: Get studen name through prompt
    let studentName = prompt("Enter the student's name to update:");

    // Step 4: Check if student name exists in array
    let student = array.find(s => s.name.toLowerCase() === studentName.toLowerCase());

    // Step 5: If not found, print error message and return
    if (!student) {
        console.log("Error: Student not found.");
        return;
    }

    // Step 6: Prompt user for new age, convert to number
    let newAge = Number(prompt("Enter the new age:"));

    // Step 7: If user didn't input a number, print error message and return
    if (Number.isNaN(newAge)) {
        console.log("Error: Age must be a number.");
        return;
    }

    // Step 8: Set object's name to the new age from the user
    student.age = newAge;

    // Step 9: Print the new
    console.log("Updated students:", array);
};

// Step 10: Call the arrow function with the students array
updateStudentAge(students);