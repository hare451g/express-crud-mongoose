const express = require('express');
const router = express.Router();

const todoModel = require('../model/todo.model');

const status = require('../constants');

// define the home page route
router.post('/', (req, res) => {
    const query = new todoModel({
        name: 'Belajar node',
        completed: false,
    });

    query.save((err, query) => {
        res.status(status.HTTP_STATUS.SUCCESS).json(query);
        
    })
})

router.get('/', (req, res) => {
    todoModel.find((err, result) => 
        res.status(status.HTTP_STATUS.SUCCESS).json(result)
    );
})

// define the about route
router.get('/details/:id', function (req, res) {
    res.status(status.HTTP_STATUS.NO_CONTENT).json();
})

module.exports = router;