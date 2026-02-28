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

// 3.How can Page Loading time be reduced ?

// Optimize images: Use WebP format (smaller than JPG/PNG). 

// Minimize HTTP requests: Combine CSS/JS files.

// Browser caching: Store static assets locally. 

// CDN (Content Delivery Network): Serve from geographically closer servers nearest location. 

// Lazy loading: Load images/videos only when needed (Pinterest example).

// --------------------------------------------------------------------------------------------------------------------------------------

// 4.What is the difference between SOAP and REST ?

// 🧩 SOAP (Simple Object Access Protocol)
// - Nature: A strict protocol with rules defined by W3C.
// - Message Format: Always XML, wrapped in an “envelope” that defines the message structure.
// - Transport: Can use HTTP, SMTP, TCP, etc.
// - Contracts: Uses WSDL (Web Services Description Language) to describe what the service does and how to call it.
// - Security: Built-in standards like WS-Security for authentication, encryption, and message integrity.
// - State: Can be stateful (maintains session info).
// - Overhead: Heavy because of XML parsing and strict rules.

// 👉 Think of SOAP like a formal courier service: every package must be wrapped in a specific envelope, stamped, and follow strict delivery rules.

// 🌐 REST (Representational State Transfer)
// - Nature: An architectural style, not a protocol.
// - Message Format: Flexible — JSON is most common, but XML, HTML, or plain text can be used.
// - Transport: Primarily HTTP, using standard methods:
// - GET → retrieve data
// - POST → create data
// - PUT/PATCH → update data
// - DELETE → remove data
// - Contracts: No WSDL; relies on documentation or conventions.
// - Security: Uses HTTPS, OAuth, JWT, etc.
// - State: Stateless — each request is independent.
// - Overhead: Lightweight, faster, easier to scale.

// 👉 Think of REST like a casual conversation: you ask directly (“Give me this data”), and the server responds simply, usually in JSON.

// 4. SOAP vs REST
//   Feature	                                      SOAP	                                                REST
//  Format	                                      Complex XML 	                                       Simple JSON 
//  State	                                      Stateful	                                           Stateless 
//  Rules	                                      Strict protocol	                                   Uses HTTP methods (GET/POST) 
//  Use Case	                                  Complex, secure apps	                               Speed, scalability 


// ----------------------------------------------------------------------------------------------------------------------------------

// 5. What is the difference between GraphQL and REST ?
// - REST (Representational State Transfer)
// REST is an architectural style for designing APIs. It uses HTTP methods (GET, POST, PUT, DELETE) to interact with resources identified by URLs. Each endpoint returns a fixed data structure defined by the server.

// - GraphQL
// GraphQL is a query language for APIs, developed by Facebook. It allows clients to specify exactly what data they need, and the server responds with that precise structure. It’s schema-driven and supports querying multiple related resources in a single request.

// GraphQL: Single endpoint, client specifies exact data (no over/under-fetching).  

// REST: Multiple endpoints, server defines response (often over-fetching). 

// Key Advantage: GraphQL reduces over-fetching by tailoring queries

// Think of it this way: REST is like ordering a fixed meal from a menu, while GraphQL is like building your own plate at a buffet — you choose exactly what you want.

// -------------------------------------------------------------------------------------------------------------------------------------

// 6.What are the various data types present in JavaScript ?

// Mutable -> Value can be change
// Immutable -> Value can't be change

// Primitive (Immutable): Number, BigInt, String, Boolean, Undefined, Null, Symbol 
// Non-Primitive (Mutable): Object (key-value pairs)

// 🔹 Primitive Data Types

// These are immutable and stored directly in memory.

// - Number: Represents both integers and floating-point numbers.
// Example: let age = 25; let pi = 3.14;

// - BigInt: Used for very large integers beyond the safe limit of Number.
// Example: let big = 1234567890123456789012345n;

// - String: Represents text enclosed in quotes.
// Example: let name = "Hashir";

// - Boolean: Represents logical values true or false.
// Example: let isActive = true;

// - Undefined: A variable declared but not assigned any value.
// Example: let x;

// - Null: Represents an intentional absence of value.
// Example: let y = null;

// - Symbol: A unique and immutable identifier, often used as object keys.
// Example: const id = Symbol("id");


// 🔹 Non-Primitive (Reference) Data Type
// These are mutable and stored as references.
// - Object: A collection of key-value pairs.
// Example:
// const person = { name: "Hashir", age: 25 };


// Objects can further include:
// - Arrays: Ordered lists of values → let arr = [1, 2, 3];
// - Functions: Callable objects → function greet() { return "Hello"; }
// - Dates, RegExp, Maps, Sets, etc.

// ----------------------------------------------------------------------------------------------------------------------------

// 7. What is DOM ?

// The DOM (Document Object Model) is a programming interface that represents the structure of a web document (like HTML or XML) in memory. Think of it as a tree-like model where every element, attribute, and piece of text in a webpage is a node in that tree.


// 🌳 Structure of the DOM
// - Document Node → The root of the tree (represents the whole page).
// - Element Nodes → HTML tags like <div>, <p>, <h1>.
// - Attribute Nodes → Attributes inside elements, e.g., id="demo".
// - Text Nodes → The actual text inside elements.

// 🔹 Why DOM Matters ?
// - It connects JavaScript to the webpage.
// - Allows developers to access, modify, and control content, structure, and styles dynamically.
// - Enables interactive features like:
// - Updating text/images in real-time
// - Form validation
// - Animations
// - Event handling (e.g., button clicks)






