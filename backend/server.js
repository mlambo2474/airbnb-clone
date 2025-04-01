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

server.listen(5000, () => {
  console.log('JSON Server is running on http://localhost:5000');
});

