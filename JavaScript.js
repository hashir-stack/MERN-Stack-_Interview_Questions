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

//2. What is the difference between localStorage and sessionStorage ?

//  Both localStorage and sessionStorage are part of the Web Storage API in JavaScript, used to store data in the browser. They look similar but differ in scope and lifespan.

// LocalStorage
// - A type of web storage that allows you to store data in the browser with no expiration date.
// - The data remains available even after the browser is closed and reopened, until it is explicitly deleted by the user or the application.
// - It is shared across all tabs and windows of the same origin (domain + protocol + port).


// SessionStorage
// - A type of web storage that stores data only for the duration of the page session.
// - The data is cleared automatically when the tab or window is closed.
// - It is unique to each tab/window and is not shared across different tabs, even if they are from the same origin



//   Feature                               	LocalStorage	                                        SessionStorage
//   Persistence   	                 Permanent (survives browser/tab close)  	            Temporary (cleared when tab closes) 
//   Scope	                         Shared across tabs (same origin)	                    Tab-specific 
//   Examples	                     Amazon cart (persists login) 	                        LinkedIn job forms (clears on reload) 
//   Storage Limit                   Typically ~5–10 MB depending on the browser.           Same limit (~5–10 MB).
// API Methods                       Both use the same methods:                             Same methods as localStorage.
//                                   setItem(), getItem(), removeItem(), clear().

// localStorage example
// localStorage.setItem("theme", "dark");
// console.log(localStorage.getItem("theme")); // "dark"

// sessionStorage example
// sessionStorage.setItem("sessionUser", "Hashir");
// console.log(sessionStorage.getItem("sessionUser")); // "Hashir"

// --------------------------------------------------------------------------------------------------------------------------------------

// 3.






