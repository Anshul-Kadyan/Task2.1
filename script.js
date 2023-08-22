// string methods

let text1 = "Hello s223688915!";
let newText1 = text1.replace("s223688915", "Deakin University.");
console.log(newText1);

let text2 = "Hello Deakin!";
let newText2 = text2.toUpperCase();
console.log(newText2);

let text3 = "Hello Deakin!";
let newText3 = text3.toLowerCase(); // Corrected variable name
console.log(newText3);

let text4a = "Hello";
let text4b = "Deakin";
let newText4 = text4a.concat(" ", text4b);
console.log(newText4);

let text5 = "   Hello Deakin!    ";
let newText5 = text5.trim();
console.log(newText5);

// number methods

let x = 100 / "Apple";
console.log(x);

let a = "100";
let b = "10";
let c = a - b;
console.log(c);

let d = "100";
let e = 10;
let f = d + e;
console.log(f);

let g = 100 / "10";
console.log(g);

let h = "100";
let i = "10";
let j = h * i;
console.log(j);

// array methods

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let size = fruits.length;
console.log(size);

fruits.pop();
console.log(fruits);

fruits.push("Kiwi");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Lemon");
console.log(fruits);

// date methods

let d1 = new Date();
console.log(d1);
let d2 = new Date("2022-03-25");
console.log(d2);
let d3 = new Date(2023, 08);
console.log(d3);
let d4 = new Date(2023, 08, 22);
console.log(d4);
let d5 = new Date(2023, 08, 22, 4);
console.log(d4);

// function methods

function multiply_two(n1, n2) {
  return n1 * n2;
}

let test1 = multiply_two(5, 6);
console.log(test1);

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius(77);
console.log(value);
