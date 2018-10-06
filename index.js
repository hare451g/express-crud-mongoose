// require to read .env file
require('dotenv').config();

// setup express js
const express = require('express');
const app = express();

// setup body-parser
const bodyParser = require('body-parser');
const todoRoutes = require('./src/routes/todo.routes');

// tell express to use body parser
app.use(bodyParser.json());

// use todo router
app.use('/todo', todoRoutes);

app.listen(process.env.SERVER_PORT,
    () => console.log(`Example app listening on port ${process.env.SERVER_PORT}!`)
);
