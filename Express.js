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
