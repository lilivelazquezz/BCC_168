/* If Statements

if (condition)
{
    // code
}

If // statement Uses a condition to change the flow of control or order of execution, and will only run and execute when a certain condition is true.
"{ }" // Contains all the code that will be executed if the condition is met.

Equal to                  ==
Less than                 <
Less than or equal to     <=
Greater than              >
Greater than or equal to  >=
Not equal to              !=

*/

let a = 20;
let b = "20";
//console.log(a === b);

if (a === b) {
  console.log("Same number");
}
/*
if( a == b ) {
    console.log("same string and number");
}

let c = "Howdy";
let d = c;

if ( c === d ) {
    console.log("same word");
}

let e = "hello";
let f = e;

if( e === f ) {
    console.log("same word " + f);
}

let tem = 99;
if( tem > 98.6 ) {
    console.log("you have a fever!");
}
*/
// two way selection

if (a === b) {
  console.log(" same number");
} else {
  console.log(" NO the same number");
}

let grade = 90;
if (grade <= 65.0) {
  console.log("That is a failing grade.");
} else {
  console.log("That is passing grade.");
}

if (grade >= 65.0) {
  console.log("Pass!");
} else {
  console.log("No Pass");
}

// Else if
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 65) {
  console.log("D");
} else {
  console.log("F");
}

//Logical Operators
/* 
NOT   !  Evaluates to the opposite
AND  &&  Both conditions need to be true
OR   ||  Only one condition needs to be true (both can be true)
*/

let x = 25;

if (x > 20 && x < 30) {
  console.log("between 20 and 30");
}

if (x <= 45 || x >= 78) {
  console.log("not between 45 and 78");
}

if (!(x > 45 && x < 78)) {
  console.log("Also not between 45 and 78!");
}

/*
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/

switch (true) {
  case grade >= 90:
    console.log("A");
    break;
  case grade >= 80:
    console.log("B");
    break;
  case grade >= 70:
    console.log("C");
    break;
  case grade >= 65:
    console.log("D");
    break;
  default:
    console.log("failing");
}
