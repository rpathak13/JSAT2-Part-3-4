// Part 3 
// 3.1
let myString = "This is a string";
console.log(myString);

let anotherString = "   Another string";
console.log(anotherString);

let hello = "Hello there!";
console.log(hello);

let myName = "Rudra";
console.log(myName);

// 3.2
let myStringLength = myString.length;
console.log("Length of myString:", myStringLength);

let firstChar = myString[0];
console.log("First character of myString:", firstChar);

let eleventhChar = myString[10];
console.log("Eleventh character of myString:", eleventhChar);

//3.3
let slicedString = myString.slice(5, 9);
console.log("My sliced string:", slicedString);

let subString = anotherString.substring(6, 9);
console.log("My substring:", subString);

//3.4
let upperCaseName = myName.toUpperCase();
let lowerCaseName = myName.toLowerCase();
console.log("Uppercase name:", upperCaseName);
console.log("Lowercase name:", lowerCaseName);