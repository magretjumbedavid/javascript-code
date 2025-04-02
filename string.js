// Extract the last four characters from the string below;"extravaganza"
let text= "extravaganza";
console.log(text.length-1);
console.log(text.slice(0,8));


// Insert the following string at the fourth index of the below variable:
// "eat"const food = "The quick fox jumped over the lazy dog"

const food ="The quick fox jumped over the lazy dog";
const food2=food.charAt(4);
console.log(food2);
console.log(food.replace("q","eat"));

// Count how many times the following string appears in the string variable:1. 
// "The quick brown fox jumps over the lazy dog"
// "the"2."brown"const story= 

let str="The quick brown fox jumps over the lazy dog";
let str1=str.toLowerCase();
console.log(str1);
console.log(str1.split("the").length-1);
console.log(str1.split("brown").length-1);

// Using JavaScript, find the following words from the following 
// strings:1. "are"const string1 = "The pupils are reading in the library";2. 
// "sitting"const string2 = "The child was sitting on the table before it fell"
const string1="The pupils are reading in the library";
console.log(string1.includes("are"));

const string2="The child was sitting on the table before it fell";
console.log(string2.includes("sitting"));



// Convert the following strings into the specified format:1. UpperCase: "wonderful"
// 2. LowerCase: "amazing", "UndERneath"3. 
// Title case "A wonderful world"

let a="wonderful";
console.log(a.toUpperCase());

let b="amazing";
console.log(b.toLowerCase());

let c="A wonderful wordl";
console.log(c.toTittle)

