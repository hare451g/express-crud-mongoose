// setup express js
const express = require('express');
const app = express();

// setup body-parser
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todo.routes');

// tell express to use body parser
app.use(bodyParser.json());

// use todo router
app.use('/todo', todoRoutes);

module.exports = app;
