// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The includes() method is called on the string "Hello World".
// The argument passed is the string "Hello".
// The function of this method is to check whether the value passed as an argument is contained within the data it is called on and return a boolean value of true or false.
// The return value is true
"Hello World".includes("Hello");

// The endsWith() method is called on the string "Hello World" with an argument of "Hello" passed.
// This method checks to see if the argument passed matches the end of the string "Hello World" and returns a boolean value of true or false.
// the return value is false.
"Hello World".endsWith("Hello");

// In this instance the argument passed is "rld" which is in fact the last three letters of "Hello World".
// The return value is true.
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// The slice() method is called on the variable, movieQuote, which stores the string object "So you're telling me there's a chance!?".
// This method returns a portion of the larger string by accepting two parameters as numbers indicating the start index and the end index of the desired slice.
// In this scenario I've input (3, 20) as parameters. The returned value is "you're telling me".
var movieQuote = "So you're telling me there's a chance!?";
console.log(movieQuote.slice(3, 20));

// Here I've called the split() method on the variable, dog, which stores the string "Border Collie". This method takes a pattern as a perameter
// and divides the string into an ordered list of substrings bassed on the pattern.  It then puts those substrings into a new array and returns the array.
// Here I have stored this new array in a variable, words, then console.log the second item in the words array. The returned value is "Collie".
var dog = "Border Collie";
var words = dog.split(' ');
console.log(words[1]);


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// The forEach() method loops through the array and takes an arrow function as it's argument. 
// In this case I've asked it to console.log the first letter of each name in the friends array.
// The returned value is 'E' 'A' 'M' 'L' 'S'.
var friends = ["Emily", "Andrew", "Millie", "Lara", "Scotty"];
friends.forEach((friend) => console.log(friend[0]));

// The sort() method rearranges the items in the array, in this case alphebetically.
// The return value is ['Collings', 'Fender', 'Gibson', 'Martin']
var guitars = ["Fender", "Gibson", "Martin", "Collings", "Gretsch"];
console.log(guitars.sort());