// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return "Hello there!";
};

console.log(greeting());

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    var name = name
    return `Hello ${name}`;
};

console.log(customGreeting('Eric'));
console.log(customGreeting("Santa"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, mid, last) {
    var first = first;
    var mid = mid;
    var last = last;
    return `Wow I never thought I'd get to meet the ${first} ${mid} ${last}!`
}

console.log(greetPerson("Taylor", "Alison", "Swift"));
console.log(greetPerson("Eric", "Daniel", "Batiste"));

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(number) {
    var number = number;
    return `The value of ${number} squared is ${number * number}`;
}

console.log(square(12));
console.log(square(3));

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
function checkStock(level, item){
    var level = level
    var item = item
    if (level >= 4) {
      return `${item} is stocked.`;
    } else if (level < 4 && level >= 1) {
      return `${item} - running LOW.`;
    } else {
      return `${item} - OUT of stock!`
    }
  };

console.log(checkStock(4, "Coffee"));
// => "Coffee is stocked"

console.log(checkStock(3, "Tortillas"));
// => "Tortillas - running LOW"

console.log(checkStock(0, "Cheese"));
// => "Cheese - OUT of stock!"

console.log(checkStock(1, "Salsa"));
// => "Salsa - running LOW"