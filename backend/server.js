// const jsonServer = require('json-server');
const jsonServer = require('json-server');
const auth = require('./node_modules/json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Use the default middlewares (logger, static, CORS)
server.use(middlewares);

// Apply json-server-auth before the router
server.use(require('json-server-auth'));  // This is the key for authentication middleware

// Use the router to handle the API
server.use(router);

// server.listen(5000, () => {
//   console.log('JSON Server is running on http://localhost:5000');
// });

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

/******* */
// const jsonServer = require('json-server');
// const auth = require('json-server-auth');
// const cors = require('cors');

// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// // Enable CORS (optional but good for frontend requests)
// server.use(cors());
// server.use(middlewares);

// // Apply auth before the router
// server.use(auth);
// server.use(router);

// // Let Render set the port or use 5000 locally
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//   console.log(`JSON Server is running on port ${PORT}`);
// });

    // "server": "json-server --watch db.json --port 5000 -m ./node_modules/json-server-auth"
//  "server": "node server.js"
