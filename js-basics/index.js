//console.log('Hello World');

// LET
let firstName = 'Iman';
let middleName = 'Aisyah'
//console.log(firstName);

// Cannot be a reserved keyword
// Meaningful
// Cannot start with number
// Cannot contain space or hyphen (camel notation)
// Case sensitive

// CONSTANT
// cannot redefined, use let if want to
const interestRate = 0.3;
//interestRate = 1;
//console.log(interestRate);

///// TYPE
// -- PRIMITIVES / VALUE TYPES
// DYNAMIC TYPING
// all umber are type NUMBER

let name = 'Iman Aisyah'; // String
let age = 24; // Number
let isApproved = true; //Boolean
let first = undefined; //Both type & value
let last = null; // want to clear the value

// -- REFERENCE
let person = {
    name: 'Iman',
    age: 24
};

// Dot Notation
person.name = 'John';

// Bracket Notation
let selection = 'name'
//person['name'] = 'Mary';
// or //
person[selection] = 'Tom';

//console.log(person.name);

// ARRAY
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 20;
//console.log(selectedColors[0]);
//console.log(selectedColors.length);

//// FUNCTION
// Performing a task
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

// Calculate a value
function square(number){
    return number * number;
}

let number = square(2);
console.log(number); // = console.log(square(2));


greet('Iman', 'Aisyah'); // 'Aisyah' - argument, name - parameter
//greet('Mary');
