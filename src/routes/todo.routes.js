const express = require('express');
const router = express.Router();

const todoModel = require('../model/todo.model');

const status = require('../constants');

// define the home page route
router.post('/', (req, res) => {
    const newTodo = new todoModel({
            name: 'Belajar node',
            completed: false,
        });
    res.status(status.HTTP_STATUS.SUCCESS).json({
        newTodo
    });
})
// define the about route
router.get('/details/:id', function (req, res) {
    res.status(status.HTTP_STATUS.NO_CONTENT).json();
})

module.exports = router;