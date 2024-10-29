//write, declare and define a function is the same
/*
Function Syntax
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
*/

function printIt() {
  console.log("printing....");
}
printIt(); //calling a function

function printParameters(parameter1) {
  //parameter
  console.log(parameter1);
}
printParameters("My parameter1"); //this are arguments
printParameters("My parameter2"); //argument 2

function printSum(x, y) {
  console.log(x + y);
}
printSum(4, 6);
printSum(7, 9);
printSum("Hello ", "world!");

//Another way to declare a function is by using expressions
const count = 100; // expression

const printNewText = function () {
  console.log("print my expression");
};

const printParam = function (a, b) {
  console.log(a + b);
};
printParam(10, 20);
printNewText();

//return ****
/* Calling/evoquing the function is the process of executing a function to get a value.
If the function doesn't have a return it will return UNDEFINE. */

function numSum(c, d) {
  console.log(c + d);
  return c + d;
}
numSum(2, 3);

function numMultiply(a, b) {
  console.log(2 * (a + b));
}
numMultiply(3, 2);
numMultiply(3);

function collectionOFThings(a, ...b) {
  console.log(a);
  console.log(b);
}
collectionOFThings(1, 2, 3, 4, 5, 6, 7, 8, 9);

function sumNumZero(a, b) {
  console.log(a + b);
  return a + b;
}
sumNumZero(4, 7);

const sumNum = function (a, b) {
  console.log(a + b);
  return a + b;
};
sumNum(4, 7);

//Arrow function
const sumNumOne = (a, b) => {
  console.log(a + b);
  return a + b;
};
sumNumOne(4, 7);

//const sumNumTwo =(a,b) => console.log(a + b); //printing in the console
const sumNumTwo = (a, b) => a + b; //returning the value
sumNumTwo(4, 7);

//Nested function
function hello() {
  console.log("hello");
  function world() {
    console.log("world!");
  }
  world();
}
hello();

//function scope
//variable define inside the function connot be accessed outside the function.
//A function can access all the variables inside the scope where it was define

function numSumAgain(c, d, e) {
  console.log(c + d + e);
  return c + d + e;
}
numSumAgain(2, 3, 4);
