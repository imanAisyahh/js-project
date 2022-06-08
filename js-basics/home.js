//alert ('yoooo');
//console.log ('hellooo');

///////// VARIABLES /////////
var b = 'smoothie';
console.log(b);

var number = 45;
console.log(number);

// Call by id
document.getElementById('text').innerHTML = 'Hey There';

//var age = prompt('What is your age?');
//document.getElementById('text').innerHTML = age;

///////// Numbers in Javascript /////////
var num1 = 10;
//num1 = num1 + 1;

// Increment num1 by 1
num1++;

//Decrement num1 by 1
num1--;
console.log(num1);

//Divide /, multiple *, remainder %
console.log(num1 % 6);

//Increment/ Decrement by any number
num1 += 20;
console.log(num1);

///////// Functions /////////
/*
1. Create function
2. Call function
*/

function fun() {
    console.log('this is a function');
}
fun();

/*Function that take name and say hello + name*/


function greeting(yourName) {
    var result = 'Hello ' + yourName; // String Concatenation
    console.log(result);
}
// var name = prompt('What is your name?');
// greeting(name);

function sumNumber(a, b){
    var result = a + b;
    console.log(a + b);
}
sumNumber(25, 25);
sumNumber('Hello ', '100');

// While Loops
// var run infinitely
/*var num = 0;
while(num < 100){
    num += 1;
    console.log(num);
}*/

// For Loops
/*for(let num = 0; num <= 100; num++){
    console.log(num);
}*/

///////// DATATYPES /////////
let yourAge = 25; // number
let yourName = 'Bob'; // string
let name = {first: 'Jane', last: 'Doe'}; // object --dictionary
let truth = false; // boolean
let groceries = ['apple', 'banana', 'salad']; // array --list
let random; // undefined
let nothing = null; // value null

// strings
let fruit = 'banana,apple,orange,blackberry';
let moreFruits = 'banana\napple'; // new line
console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(1, 6)); // array start with 0
console.log(fruit.replace('ban', 123));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); // split by a comma
console.log(fruit.split('')); // split by a char

// arrays

let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array ('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[1]); // access value at index 1st

fruits[0] = 'pear'; // change to new value
console.log(fruits);

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// array common methods
console.log('to String', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.pop(), fruits); // remove last item
console.log(fruits.push('blackberries'), fruits); // appends
fruits[4] = 'new fruit';
console.log(fruits);
fruits.shift(); // remove first element from a list -- opposite pop()
console.log(fruits);
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits);

// vege + fruits
let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [3, 5, 7, 10, 6, 222, 959, 90, 11, 2];
console.log(someNumbers.sort(function(a, b) {
    return a - b;
})); // sorted in ascending
console.log(someNumbers.sort(function(a, b) {
    return b - a;
})); // sorted in descending

let emptyArray = new Array();
for (let num = 0; num < 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

////// OBJECTS ///////

let student = {
    first: 'Rafeh', 
    last: 'Qazi',
    age: 24,
    height: 177,
    studentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

console.log(student.first);
console.log(student.last);
// student.first = 'notMe';
// console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

// Conditional, Control flows (if else)
// && AND
// || OR
//var age = prompt('what is your age?');
if((age >= 18) && (age <= 35)) {
    type = 'target demo';
    console.log(type);
} else {
    type = 'not my audience';
    console.log(type);
}

// Switch statements
//differenciate between weekday vs weekend
// day 0 ==> Sunday, day 6 ==> Saturday, day 4 ==> Thursday ==> weekday
var age = 45;
switch (6) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}
console.log(text);

