const express = require('express');
const router = express.Router();

const status = require('../constants');

const TodoServices = require('../services/todo.services');

// define the home page route
router.post('/', (req, res) => TodoServices.createNewTodo(req, res));
router.get('/', (req, res) => TodoServices.fetchAllTodo(req, res));

// define the about route
router.get('/details/:id', function (req, res) {
    res.status(status.HTTP_STATUS.NO_CONTENT).json();
})

module.exports = router;