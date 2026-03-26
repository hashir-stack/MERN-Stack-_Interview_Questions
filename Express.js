// How can you handle routing in express .js ?
// In Express.js, routing is handled by defining endpoints using methods like app.get(), app.post(), app.put(), and app.delete(). Each route matches a URL path and HTTP method, and executes a callback function. For modularity, I use the express.Router() to group related routes and then mount them on the main app.

// For example:

// const express = require('express');
// const app = express();
// const router = express.Router();

// // Route directly on app
// app.get('/', (req, res) => {
//   res.send('Home Page');
// });

// // Modular routes
// router.get('/users', (req, res) => {
//   res.send('User list');
// });
// router.post('/users', (req, res) => {
//   res.send('Create user');
// });

// app.use('/api', router);

// app.listen(3000, () => console.log('Server running'));

// This way, Express routes can be organized cleanly, support different HTTP methods, and scale easily with Router modules.

// ------------------------------------------------------------------------------------------------------------------------------

// What the difference between req.params ,req.body and req.query ?

// - req.params holds route parameters defined in the URL path (e.g., /users/:id → req.params.id).

// - req.query holds query string values from the URL (e.g., /search?name=hashir → req.query.name).(for sorting)

// - req.body holds data sent in the request body, usually from POST/PUT requests, and requires middleware like express.json() or body-parser to parse it.”**

// Example:-

// app.get('/users/:id', (req, res) => {
//   console.log(req.params.id);   // Path parameter
//   console.log(req.query.sort);  // Query string
// });

// app.post('/users', (req, res) => {
//   console.log(req.body.name);   // Body data
// });

// ---------------------------------------------------------------------------------------------------------------------------

// What are the middleware functions in Express.js and how do they work ?

// “Middleware in Express.js are functions that run during the request–response cycle. They can modify req/res, execute code, end the cycle, or call next() to pass control. Express supports app-level, router-level, built-in, third-party, and error-handling middleware.”

//  How Middleware Works
// - Definition: A middleware function has access to req, res, and the next function.

// - Execution Flow:

// - Request comes in.
// - Middleware runs (can modify request/response).
// - If not finished, it calls next() to hand off to the next middleware.
// - Eventually, a route handler or error handler ends the cycle.

// - Key Rule: If middleware doesn’t end the cycle, it must call next() — otherwise the request hangs.

// Types of Middleware

// 1- Application-level middleware
// - Bound to the app using app.use() or app.METHOD().
// app.use((req, res, next) => {
//   console.log('Time:', Date.now());
//   next();
// });

// 2- Router-level middleware
// - Works with express.Router().
// const router = express.Router();
// router.use((req, res, next) => {
//   console.log('Router middleware');
//   next();
// });

// 3- Built-in middleware
// - Examples: express.json() (parse JSON body), express.static() (serve static files)

// 4- Third-party middleware
// - Popular ones include:
// - body-parser → parse request body
// - cookie-parser → parse cookies
// - morgan → logging
// - cors → enable cross-origin requests
// - multer → handle file uploads

// 5- Error-handling middleware
// - Defined with four arguments (err, req, res, next)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// -----------------------------------------------------------------------------------------------------------------------------
