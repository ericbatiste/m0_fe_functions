// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
// Changes: I imagined this function as part of a form that needed to be filled out.
  // First I reformated by opening up the code block to use multipe lines.
  // Next I added a parameter (name) and stored that value in a variable. I then added an 
  // if else statement to handle whether or not my imaginary form had been filled out.
  // I also used the typeof operator to check that the value that gets called is a 'string'.
  // Finally, I moved the console.log statement from the code block to the function call.
function askForName(name) { 
  var name = name;
  if (typeof name === 'string') {
    return `Hello ${name}`;
  } else {
    return `Hello, what is your name?`;
  }
};

console.log(askForName('Eric'));


// EX 2:
// Changes: I changed the perameter names to be more descriptive, 
  // used the tab key to add a space in front of var and return lines, 
  // moved the closng curly brace back a few spaces, added a couple semi-colons 
  // and added a console.log statement to each function call.
function addThreeNums(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  return sum;
};

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));


// EX 3:
// Changes: I moved the closing curly brace below the function to increase readability 
    // and added a semi-colon after it. I also changed the incomplete declaration keyword from 'func' to 'function'. 
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
};

makeFreshPesto();


//  EX 4:
// Changes: I moved the opening curly brace up a line to follow the parameters. 
    // Then, I combined the arithmetic by incorperating parenthesis and set it equal to just the avg variable.
    // Finally, I called the function inside of a console.log statement to see the result printed to the console. 
function getAverage(num1, num2) {
  var average = (num1 + num2) / 2;
  return average;
};

console.log(getAverage(20, 58));