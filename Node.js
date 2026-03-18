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









