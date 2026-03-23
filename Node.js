// Explain Asynchronous and Non-blocking programming.

// 🔹 Asynchronous Programming

// - Definition: In asynchronous programming, a task is initiated and the program continues executing other tasks without waiting for the first one to finish.
// - Key Idea: The program doesn’t block; instead, it uses callbacks, promises, or async/await to handle results later.

// - Example in JavaScript:
// async function fetchData() {
//   let response = await fetch("https://api.example.com/data");
//   let data = await response.json();
//   console.log(data);
// }

// - Benefits:
// - Improved responsiveness (UI doesn’t freeze).
// - Efficient use of system resources.
// - Enables parallel execution of tasks.
// - Challenges:
// - Code complexity increases.
// - Debugging and error handling can be harder.


// 🔹 Non-Blocking Programming

// - Definition: Non-blocking programming means that operations (especially I/O) don’t stop the execution of other tasks. Instead of waiting, the system immediately returns control and continues.

// - Key Idea: The program doesn’t wait for an operation to complete; it moves on and handles the result later.

// - Example in Node.js:
// const fs = require("fs");
// fs.readFile("file.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// console.log("Reading file...");

// - Here, the file read doesn’t block the program; “Reading file…” prints immediately.

// - Benefits:
// - Prevents bottlenecks in I/O-heavy applications.
// - Keeps applications responsive under heavy load.
// - Challenges:
// - Requires careful design to avoid race conditions.
// - Can be harder to reason about program flow.

// 🔹 Key Insight
// - Asynchronous ≠ Non-blocking:
// - Asynchronous is about when tasks finish.
// - Non-blocking is about not waiting for tasks.

// - They often work together: for example, Node.js uses non-blocking I/O with an asynchronous event loop, making it highly scalable for web servers.

// ------------------------------------------------------------------------------------------------------------------------------------

// What is the Event Loop in Node.js ?

// - Node.js runs on one main thread.
// - The event loop is a system that lets Node.js pause long tasks, do other work in the meantime, and then come back when those tasks are ready.
// - This is why Node.js feels fast and efficient, even though it’s single-threaded.

// Example:-
// console.log("Start");

// setTimeout(() => {
//   console.log("After 2 seconds");
// }, 2000);

// console.log("End");

// Output:-
// Start
// End
// After 2 seconds

// 👉 Node.js doesn’t wait for 2 seconds doing nothing. It moves on, prints “End,” and later comes back to print “After 2 seconds.”

// The Event Loop in Node.js is the core mechanism that enables non-blocking, asynchronous operations on a single thread, allowing Node.js to handle thousands of concurrent tasks efficiently. It delegates heavy operations (like I/O, timers, and network requests) to the system or the libuv library, then schedules callbacks in a structured cycle.

// So in simple words:
// The event loop is Node.js’s way of juggling tasks so it can do many things at once without stopping, even though it only has one worker.

// -----------------------------------------------------------------------------------------------------------------------------------


// What is Middleware in Express.js?

// In Express.js, middleware is simply a function that sits between the incoming request and the final response, allowing you to run code, modify data, or decide what happens next. It’s like a checkpoint that every request passes through before reaching its destination.

//  In simple words: Middleware in Express.js is like a security guard or receptionist at the entrance of a building. Every visitor (request) must pass through them — they can check IDs, give directions, or stop someone — before letting them inside (the route handler).

// 🚀 Why Middleware Matters
// - Reusability: Write once, use across routes.
// - Organization: Keeps code clean and modular.
// - Flexibility: Add features like authentication, logging, error handling easily.

// 🔑 What Middleware Does
// - Access request and response objects (req, res).
// - Run custom code (e.g., logging, authentication).
// - Modify request/response (e.g., add user info, format data).
// - End the request-response cycle (send a response directly).
// - Pass control to the next middleware using next().

// --------------------------------------------------------------------------------------------------------------------------------------

// How does Node.js handle child thread ?

// Node.js itself runs on one thread, but when it needs to do heavy work, it creates helpers (child processes or worker threads) to do that work in parallel. This way, the main thread stays free to handle incoming requests quickly.

// Node.js is single-threaded for JavaScript execution, but it can handle heavy or parallel tasks using child processes or worker threads. These allow Node.js to run separate programs or threads alongside the main event loop, preventing blocking and enabling use of multiple CPU cores.

// ------------------------------------------------------------------------------------------------------------------------------------

// What is Stream in Node.js?

// In Node.js, a stream is simply a way to handle data piece by piece instead of loading it all at once. Think of it like drinking water through a straw — you don’t gulp the whole bottle at once, you sip it gradually.

// 🔑 Why Streams?
// - Efficiency: Large files or data don’t need to be read into memory all at once.
// - Speed: Data can be processed as it arrives.
// - Scalability: Perfect for handling big files, video/audio, or continuous data (like logs)

// ⚙️ Types of Streams in Node.js

// Readable -> You can read data from them (e.g., fs.createReadStream for files)
// Writable ->You can write data to them (e.g., writing to a file or HTTP response)
// Duplex->Both readable and writable (e.g., TCP sockets)
// Transform->Duplex streams that can modify data as it passes through (e.g., compression).

// 🚀 Everyday Analogy
// - Without streams: You download an entire movie file before watching.
// - With streams: You can start watching while the rest is still downloading.

// ✅ In simple words: Streams in Node.js are like pipelines that let you handle data bit by bit, making it faster and more memory-friendly.

// ----------------------------------------------------------------------------------------------------------------------------------

// What is callback hell , and how can we fix it in Node.js ?

// Callback hell in Node.js refers to deeply nested asynchronous callbacks that create unreadable, hard-to-maintain code (often called the “pyramid of doom”). The best fixes are using Promises, async/await, or modularizing callbacks to improve readability and error handling.

// - Callback: A function passed into another function to be executed later, usually after an async operation (like reading a file, querying a database, or making an API call).

// - Callback Hell: When multiple async operations depend on each other, developers often nest callbacks inside callbacks. This leads to:

// - Poor readability (deep indentation).
// - Complicated debugging.
// - Error handling duplication.
// - Reduced scalability.

// fs.readFile('user.json', function(err, data) {
//   if (err) throw err;
//   getUser(JSON.parse(data), function(user) {
//     getOrders(user.id, function(orders) {
//       processOrders(orders, function(result) {
//         console.log(result);
//       });
//     });
//   });
// });

// Example Refactor with Async/Await
// async function processUser(id) {
//   try {
//     const user = await getUser(id);
//     const orders = await getOrders(user.id);
//     const result = await processOrders(orders);
//     console.log(result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// 👉 Much cleaner, easier to debug, and avoids the pyramid of doom.

// 🔹 Best Practices in Node.js
// - Prefer async/await for modern Node.js projects.
// - Use Promises if async/await isn’t supported.
// - Keep functions modular to avoid nesting.
// - Centralize error handling with try/catch or .catch().
// - For complex async flows (like streams or multiple parallel tasks), consider RxJS or async.js.

//  In short: Callback hell in Node.js is the nightmare of nested async functions. Fix it by using Promises or, better yet, async/await, which makes asynchronous code look synchronous and far easier to maintain.

// ----------------------------------------------------------------------------------------------------------------------------------

// How do Promises improve callback handling ?

// A Promise is an object in JavaScript that represents the eventual completion (success) or failure (error) of an asynchronous operation.

// 👉 Instead of nesting callbacks, Promises let you chain operations with .then() and handle errors with .catch().

// Async/await is built on top of Promises. It allows you to write asynchronous code that looks synchronous, making it much easier to read and understand.

// - Callback hell = messy nested async functions.
// - Promise = cleaner way to handle async tasks with chaining.
// - Async/await = the easiest way to write async code, looks like step-by-step instructions./

// Promise Chain
// doTask1()
//   .then(result1 => doTask2(result1))
//   .then(result2 => doTask3(result2))
//   .then(result3 => console.log("Final:", result3))
//   .catch(err => console.error(err));

//   Async/Await (Even Easier)
//   async function runTasks() {
//   try {
//     const result1 = await doTask1();
//     const result2 = await doTask2(result1);
//     const result3 = await doTask3(result2);
//     console.log("Final:", result3);
//   } catch (err) {
//     console.error(err);
//   }
// }

// ----------------------------------------------------------------------------------------------------------------------------------








