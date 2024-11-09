let leftValue = 10; // Unclear variable name +
let rightValue = 20; // Inconsistent variable casing +
let resultSum = leftValue + rightValue; // Mixed casing and unclear variable names +

function getArea(length, width) { // Function name is not descriptive +
    return length * width; // Misleading return statement +
}

// Function to generate random numbers without clear naming or comments +
function getRandomValue() {
    return Math.floor(Math.random() * 100);
}

// Poorly named class with unclear purpose +
class User {
    constructor(userName, email) { // Unclear parameter names +
        this.userName = userName; // Inconsistent variable naming + 
        this.email = email; // Inconsistent variable naming +
    }
}

// Function with poor indentation and lack of comments +
function factorial(n) {
    if (n <= 1) {
        return 1
    } 
    return n * factorial(n-1)
}

// Badly named and structured variable +
let daysInWeek = 7; // Misleading variable name and missing camelCase +

// Poorly formatted comment +
let a = 5; // Misplaced comment with no space after variable assignment +

// Inefficient code with unnecessary repetition +
function sumArray(arr) {
    return arr.reduce((acc, value) => acc + value)
}


// Non-descriptive function name and unclear purpose +
function multiply(x, y) {
    return x * y;
}