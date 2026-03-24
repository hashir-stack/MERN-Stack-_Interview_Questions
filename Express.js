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
