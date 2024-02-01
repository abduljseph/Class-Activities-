// Create a variable "timeOfDay" and assign it a string
let  timeOfDay = "sunrise";
// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = (`Enjoy the $(timeOfDay`);
// Print "greeting"
console("greeting");

// Create a new variable, but do not assign it a value
let myVariable;

// Print the new variable and its type
// What type should we expect?
console.log(typeof myVariable);

// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
myVariable = null;
// Print the variable and its type again
// What type should we expect?
console.log(typeof myVariable);

// Try to print a variable that does not exist
// What should we expect to print in the CLI?
console.log(night);
// Print "greeting" again
// Will this line run?
// no it will say undefined
