// alert("hello from the js file");
console.log("Hello again from the js file");

// var -> used in all JavaScript code from 1995 to 2015. Still use in older browsers

// let -> use when you can't use const

// const -> use when the value or type should not be change (Arrays and objects)

// Declare a variable
let car;

// camel case
let myFavoriteCake;
// snake
let my_favorite_cake;
// const upper case
const PI = 3.14;

console.log(car + " from declare variable car");

// Inicialize a variable
// The Assignment Operator (=)
// Consistency

// 8 Datatypes
// Strings
let day = "Wednesday";

// Numbers
let numberOfWeekDays = 7;
let shoeSize = 6.5;

// Booleans
let y = true;
let x = false;

console.log(y == 1);
console.log(y == 0);

// Objects
const weekDays = { firstDay: "Sunday", secondDay: "Monday" };

// Array objects
const allWeekDays = ["Sunday", "Monday", "Tuesday"];

// undefine
let toDay;

// Null

console.log(null == 1);
console.log(null == 0);

car = "Volvo";
console.log(car);

console.log("red" + car);

car = "3";
console.log(car);
console.log(3 + car);
console.log(car + 3);

car = 4;
console.log("3" + car);
console.log(car + "3");

var auto = 5;
console.log("5" + auto);
console.log(auto + "5");

auto = "6";
console.log(5 + auto);
console.log(auto + 5);

console.log(PI);
// PI = 5;

const NAME = "Liliana";

let l = 7;
let w = 5;

l = 9;

const RECTANGLE_AREA = l * w;
console.log(RECTANGLE_AREA);

// Document Object Model (DOM)
/* HTML elements now are objects we can connect properties, methods, events */

let pageText = "world from my JS file!";
document.getElementById("word").innerHTML = pageText;

document.getElementById("word").style.color = "green";

let textHello = "Hello from class";
document.getElementById("myName").innerHTML = textHello;
