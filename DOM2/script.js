/*document.getElementsByClassName("text");
console.log(document.getElementsByClassName("text"));
console.log(document.getElementById("newText"));
*/
/* for ( let i=0; i< document.getElementsByClassName("text").length; i++ ) {
    console.log(document.getElementsByClassName("text").item(i));
}
    */

const elements = document.getElementsByClassName("text");

for (let i = 0; i < elements.length; i++) {
  console.log(elements.item(i));
  elements.item(i).style.color = "red";
  elements.item(i).style.backgroundColor = "pink";
}

//Syntax
//const btn = document.querySelectorAll("button");
// variable.addEventListener("click", function);

//const btn = document.querySelectorAll("button");

/*
function newColor() {
    //console.log()
 return document.querySelector("button").style.color = green;
}

btn.addEventListener("click", () => {
    document.querySelector("button").style.color = "green";
});
*/
/*
btn.addEventListener("click", myFunction);
function myFunction() {
    document.querySelector("button").style.color = "green";
  }
*/
// rgb(red, green, blue)
// 255 max number
// random number

const red = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
const green = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
const blue = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
const randomColors = `rgb(${red}, ${green}, ${blue})`;
console.log(randomColors);

const btn = document.getElementById("myButton");
/*
btn.addEventListener("click", myFunction);

function myFunction() {
    //document.querySelector("button").style.backgroundColor = "green";
    document.getElementById("newText").style.color = randomColors;
}
*/

btn.addEventListener("click", () => {
  document.getElementById("newText").style.color = randomColors;
});
