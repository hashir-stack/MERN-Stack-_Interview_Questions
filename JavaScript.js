// 1. What do you mean by Hositing in JavaScript ?

// Definition: Hoisting moves variable and function declarations to the top of their scope during the compile phase. 

// Types:

// Variable Hoisting (var): Declarations hoisted, but not initializations (results in undefined).

// console.log(a); // undefined (due to hoisting with var)
// var a = 10;  

// Function Hoisting: Full function declarations hoisted (can call before definition).

// sayHello(); // Works fine
// function sayHello() {
//   console.log("Hello!");
// }

// let/const Hoisting: Hoisted but not initialized (Temporal Dead Zone - cannot access before declaration).

// console.log(b); // ReferenceError (TDZ)
// let b = 20;

// Analogy: JavaScript throws variables/functions (like a ball) to the top of their scope before execution.

// Why It Matters
// Hoisting can lead to unexpected behavior if you’re not aware of it. For example, using var can cause bugs because variables appear accessible before initialization. Modern best practice is to use let and const to avoid these pitfalls.

// -----------------------------------------------------------------------------------------------------------------------------------





