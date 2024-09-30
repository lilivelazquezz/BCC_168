console.log("Hello");
/*
Array is a data structure used to store a collection of values of any type. 
Numbers, strings, objects, or other arrays
Each element is order by an index, the first element is always index 0.

SYNTAX
const array_name = [item1, item2, ...];
*/
const cats = [ "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Mina", "Saturday"];
console.log(cats);

console.log(cats[2]);

console.log(cats.length);

console.log(cats[cats.length -2]);


/* Method: push() -> Adds elements to the end of an array */
/* Before push() */
document.getElementById("myFirstCats").innerHTML = cats;

// Mutator Methods (Modify the original array)
/* After push() */
cats.push("Leo");
console.log(cats);

/* Method: pop() -> Removes elements to the end of an array */

document.getElementById("addedAnewCatLeo").innerHTML = cats;
/* Before pop() */

/* After pop() */
cats.pop();
console.log(cats);
cats.pop();
console.log(cats);
document.getElementById("removedMynewCatLeo").innerHTML = cats;

/* Method unshift()  -> Adds elements to the beginning of an array*/
cats.unshift("Sunny");
console.log(cats);
/* Method: shift() -> Removes elements to the beginning of an array */
cats.shift();
console.log(cats);

/* Method: splice() -> Removes elements to the beginning of an array 
Syntax array.splice(index to add elements, count elements to delete from the end, item1, ....., itemX) */
cats.splice(2, 6, "Pepper", "Bisket");
console.log(cats);

/* Method: sort() -> Sorts the elements */
//cats.sort();
//console.log(cats);

/* Method: reverse() -> Reverses the order of the elements */
//cats.reverse();
//console.log(cats);

//Accessor Methods (Do not modify the original array)
/* NECESARY TO STORE THE CHANGES INTO A NEW ARRAY */

/* Method concat()  -> Joins arrays */
//let kittens = ["Zoe", "Mina", "Bagel", "Bun", "Bagel"];
 //const allMyCats = cats.concat(kittens);
 //console.log(allMyCats);

/* Method slice(): Extracts a portion of an array */
//slice() -> remove from the begining
//slice(start)
//slice(start, end)

/*const reFormat = allMyCats.slice(2);
console.log(reFormat);
console.log(allMyCats);

// Method join() -> Joins all elements of an array into a string
const turnIntoString = reFormat.join();
console.log(turnIntoString);

// Method indexOf() -> Find the first index of a repeated element
console.log(allMyCats.indexOf("Zoe"));

// Method lastIndexOf() -> Find the last index of a repeated element
console.log(allMyCats.lastIndexOf("Bagel"));

// Method includes(): -> Determines if an array includes a certain element || Boolean result
 console.log(allMyCats.includes("Willy"));

// Iteration Methods
/* forEach(), map(), filter(), reduce(), reduceRight(), some(), every(), find(), findIndex() */
