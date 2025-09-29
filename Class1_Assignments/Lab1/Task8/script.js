// index.js
// Name: Andrew France
// Task8 - Shopping List Operations

// Step 1: Declare array of string for shopping list
let shoppingList = ["eggs", "butter", "flour"];

// Step 2: Function takes in array (list) and new item (string) then
// adds the new item to end of list
const modifyItem = (list, newItem) => {
    // Step 3: Push to add to end of existing array (list)
    list.push(newItem);

    // Step 4: Print out the updated list to console
    console.log("Updated shopping list:", list);
};

// Step 5: Get user input and store as string in variable
const userItem = prompt("Enter a new item to add to the shopping list:");

// Step 6: If the string is empty then print an error message
if (!userItem) {
    console.log("Error: You must enter a valid item.");
} else {
    // Step 7: Call the function to add item to list, pass in hard coded
    // array and user input as arguments
    modifyItem(shoppingList, userItem);
}