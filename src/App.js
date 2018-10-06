const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todo.routes');
const cors = require('cors');

const app = express();
// tell express to use cors
app.use(cors());
app.options('*', cors())
// tell express to use body parser
app.use(bodyParser.json());

// use todo router
app.use('/todo', todoRoutes);

module.exports = app;
