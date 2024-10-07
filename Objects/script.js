//alert("hola from the alert window");
/* syntax:

const myObject = {
  property1: "value1", // property name can be an identifier
  2: "value2", // property name can be a number
  "property n": "value3" // property name can be a string
};
*/
const weekMenu = {
    "monday" : "burritos",
    "tuesday" : "tacos",
    "wednesday" : "lassgna",
    "thrusday" : "pizza",
    friday : "quesadilla",
    6: "curry"
}
console.log(weekMenu);
// brake notation
console.log(weekMenu["monday"]);
console.log(weekMenu["friday"]);
console.log(weekMenu[6]);
console.log(weekMenu["6"]);

// dot notation
console.log(weekMenu.tuesday);
console.log(weekMenu.friday);
console.log(weekMenu[6]);

// access an object from another object

const weekMenuTwo = {
    "monday" : "burritos",
    "tuesday" : "tacos",
    "wednesday" : "lassgna",
    "thrusday" : "pizza",
    friday : ["quesadilla", "nachos", "curry", " Tika Masala"]
}

const myObject = {};
myObject.weekMenuTwo = weekMenuTwo;
console.log( myObject.weekMenuTwo.friday[0]);

const weekMenuThree = [ {
    "monday" : "burritos",
    "tuesday" : ["tacos", "tosada", "ceviche"],
    "wednesday" : "lassgna",
    "thrusday" : "pizza",
    friday : ["quesadilla", "nachos", "curry", " Tika Masala"]
},
{
    "monday" : "hamburger",
    "tuesday" : ["tamale", "bento box", "cake"],
    "wednesday" : "pasta",
    "thrusday" : "salad",
    friday : ["eggs", "pancakes", "sushi", " paella"]
}
]

console.log(weekMenuThree[0].tuesday[2]);
console.log(weekMenuThree[0].friday[1]);
console.log(weekMenuThree[1].wednesday);
console.log(weekMenuThree[1].friday[2]);


// Add a Property **** 
Object.defineProperty(weekMenuThree, "saturday", {value: "soup"});
console.log(weekMenuThree.saturday);
console.log(weekMenuThree);

// Add a Property
Object.defineProperty(weekMenuThree, "sunday", {value: ["tacos", "soup", "ceviche"]});

console.log(weekMenuThree);
// Change a Property

Object.defineProperty(weekMenuThree[0], "wednesday", {value:"soup"});
console.log(weekMenuThree);

Object.defineProperty(weekMenuThree[0], "tuesday", {value:["tacos", "soup", "ceviche"]});
console.log(weekMenuThree);

////////////// DATE Object //////////////

const date = new Date();
console.log(date);

/* Practice 
www.freecodecamp.org
Learn Date Object by Building a Date Formatter
*/
