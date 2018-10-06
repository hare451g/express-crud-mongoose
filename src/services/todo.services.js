const todoModel = require('../model/todo.model');

const status = require('../constants');

const createNewTodo = (req, res) => {
    const query = new todoModel({
        name: req.body.name,
        completed: req.body.completed,
    });
    query.save((err, query) => {
        res.status(status.HTTP_STATUS.SUCCESS).json(query);
    })
};

const fetchAllTodo = (req, res) => {
    todoModel.find((err, result) => {
        res.status(status.HTTP_STATUS.SUCCESS).json(result)
    });
};

module.exports = {
    createNewTodo,
    fetchAllTodo,
};