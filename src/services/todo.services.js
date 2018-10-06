const todoModel = require('../model/todo.model');

const status = require('../utils/constants');

const createNewTodo = (req, res) => {
    const query = new todoModel(req.body.todo);
    query.save((err, query) => {
        if (err) {
            res.status(status.HTTP_STATUS.ERROR).json(err);
        }
        res.status(status.HTTP_STATUS.SUCCESS).json(query);
    })
};

const fetchAllTodo = (req, res) => {
    todoModel.find((err, result) => {
        if (err) {
            res.status(status.HTTP_STATUS.ERROR).json(err);
        }
        res.status(status.HTTP_STATUS.SUCCESS).json(result)
    });
};

const fetchOneTodo = (req, res) => {
    const id = req.params.id;
    todoModel.findById(id, (err, result) => {
        if (err) {
            res.status(status.HTTP_STATUS.ERROR).json(err);
        }
        res.status(status.HTTP_STATUS.SUCCESS).json(result);
    })
}

const updateTodo = (req, res) => {
    const id = req.params.id;
    const updatedData = req.body.todo;
    todoModel.findByIdAndUpdate(id, updatedData, (err, result) => {
        if (err) {
            res.status(status.HTTP_STATUS.ERROR).json(err);
        }
        res.status(status.HTTP_STATUS.SUCCESS).json(result);
    })
}

const deleteTodo = (req, res) => {
    const id = req.params.id;
    todoModel.findByIdAndDelete(id, (err, result) => {
        if (err) {
            res.status(status.HTTP_STATUS.ERROR).json(err);
        }
        res.status(status.HTTP_STATUS.SUCCESS).json(result);
    })
}

module.exports = {
    createNewTodo,
    fetchAllTodo,
    fetchOneTodo,
    updateTodo,
    deleteTodo,
};