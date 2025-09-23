// // Template Literals
//
// `My First Literal`
//
// let dog = "dog";
//
// console.log(`I have a ${dog}`);
//
// // forEach -> does something to each element in same array
//
// // map -> creates a brand new array
//
// let person = {
//     key: "values",
//   //  "keys": values,
//     age: 24,
//     alive: true
// }
//
// console.log(person.age)
//
// // fat arrow function
//
// const add = (a,b) => {
//     return a+ b;
// };
//
// const multiply = (a,b) => a+b;
//
// add(1,2)
//
// let areaOfRectangle = (w,h) => w*h;
//
// areaOfRectangle = (w) => w*w;
//
// const rectangle  = (w,h) => w*h;
//
// console.log(areaOfRectangle(3,4));
// console.log(areaOfRectangle(4));
// console.log(areaOfRectangle(4,5));

// let name = {
//     fname: "",
//     lname: ""
// };
//
// function printFullName(fname, lname){
//     return `${fname} ${lname}`;
// }
//
// console.log(printFullName("Andrew", "France"));
//
// let name2 = {
//     fname: "Andrew",
//     lname: "France",
//     fullName: function(){
//         return `${this.fname} ${this.lname}`;
//     }
// }
//
// console.log(name2.fullName())
//
// const json = JSON.stringify(name2);
// console.log(json);

// takes array and sorts is alpabetically

let array1 = ["apple", "banana", "Apple", "Orange", "aPricot", "orange"]
let array2 = [];
let array3 = "Dog"

const sortArray = (array) => {
    if (!Array.isArray(array)){
        return "Not an array"
    }else if (array.length === 0){
        return "Array is empty";
    }else {return array.sort((a, b) => a - b)}
}

console.log(sortArray(array1));
console.log(sortArray(array2));
console.log(sortArray(array3));